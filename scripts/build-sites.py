"""Build the static files and clean page addresses for Sites hosting."""
from pathlib import Path
import json
import shutil
from urllib.parse import unquote

root = Path(__file__).resolve().parents[1]
output = root / 'dist'
if output.exists():
    shutil.rmtree(output)
output.mkdir()
for path in root.iterdir():
    if path.is_file() and path.suffix in ('.html', '.js', '.png', '.ico', '.webmanifest', '.txt', '.xml'):
        shutil.copy2(path, output / path.name)
for name in ('assets', 'export-assets'):
    shutil.copytree(root / name, output / name)
for design in (root / '_ds').iterdir():
    destination = output / '_ds' / design.name
    destination.mkdir(parents=True)
    for name in ('tokens', 'assets', 'styles.css', '_ds_bundle.js'):
        source = design / name
        if source.is_dir():
            shutil.copytree(source, destination / name)
        elif source.is_file():
            shutil.copy2(source, destination / name)
if (root / '_headers').exists():
    shutil.copy2(root / '_headers', output / '_headers')
routes = json.loads((root / 'vercel.json').read_text())
for route in routes['rewrites']:
    source = root / unquote(route['destination']).lstrip('/')
    destination = output / (route['source'].lstrip('/') + '.html')
    shutil.copy2(source, destination)
redirects = []
for route in routes['redirects']:
    address = route['source'].replace('(%20| )', '%20').replace(':path+', '*')
    redirects.append(f"{address} {route['destination']} {route['statusCode']}")
(output / '_redirects').write_text('\n'.join(redirects) + '\n')
assert (output / 'about.html').read_bytes() == (root / 'OAKS About.dc.html').read_bytes()
print(f'Prepared {len(routes["rewrites"])} clean page addresses for Sites.')
