"""Local preview server that applies vercel.json redirects, rewrites and the 404 page.
Usage: python3 scripts/serve.py [port]   (default 8000), then open http://localhost:8000/
"""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit
import json, re, sys

root = Path(__file__).resolve().parents[1]
config = json.loads((root / 'vercel.json').read_text())


def compile_source(source):
    """The subset of path-to-regexp used in vercel.json: literals, (a|b) groups and :name+ segments."""
    out, i = '', 0
    while i < len(source):
        if source[i] == '(':
            j = source.index(')', i)
            out += source[i:j + 1]
            i = j + 1
        elif m := re.match(r':(\w+)([+*]?)', source[i:]):
            out += '(.+)' if m.group(2) else '([^/]+)'
            i += len(m.group(0))
        else:
            out += re.escape(source[i])
            i += 1
    return re.compile('^' + out + '$')


redirects = [(compile_source(r['source']), r['destination'], r.get('statusCode', 308)) for r in config.get('redirects', [])]
rewrites = [(compile_source(r['source']), r['destination']) for r in config.get('rewrites', [])]


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(root), **kwargs)

    def route(self):
        parts = urlsplit(self.path)
        raw, decoded = parts.path, unquote(parts.path)
        query = '?' + parts.query if parts.query else ''
        if config.get('trailingSlash') is False and len(raw) > 1 and raw.endswith('/'):
            return 308, raw.rstrip('/') + query
        for pattern, dest, status in redirects:
            if pattern.match(raw) or pattern.match(decoded):
                return status, dest
        if (root / decoded.lstrip('/')).is_file() or decoded == '/':
            return None, None
        for pattern, dest in rewrites:
            if pattern.match(raw):
                self.path = dest + query
                return None, None
        return 404, None

    def send_head(self):
        status, location = self.route()
        if status in (301, 302, 307, 308):
            self.send_response(status)
            self.send_header('Location', location)
            self.end_headers()
            return None
        if status == 404:
            body = (root / '404.html').read_bytes()
            self.send_response(404)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return None
        return super().send_head()


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    print(f'Serving {root} on http://localhost:{port}/')
    ThreadingHTTPServer(('', port), Handler).serve_forever()
