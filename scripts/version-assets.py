"""Add a content hash to every stylesheet and script link (e.g. site.css?v=a8912f34).

Run after editing any CSS or JS, before deploying: browsers and CDNs then fetch the new file
instead of reusing a cached copy of the old one. Safe to run repeatedly.
"""
from pathlib import Path
import hashlib, re

root = Path(__file__).resolve().parents[1]
ASSETS = ['assets/site.css', 'assets/player.css', 'assets/legal.css', 'assets/responsive.css', 'assets/site.js',
          'media.js', 'forms.js', 'support.js', 'image-slot.js']
ver = {a: hashlib.md5((root / a).read_bytes()).hexdigest()[:8] for a in ASSETS if (root / a).exists()}
pages = [p for p in root.glob('*.html')]
for f in pages:
    txt = f.read_text(encoding='utf-8')
    new = txt
    for a, v in ver.items():
        new = re.sub(r'((?:href|src)="(?:\./|/)?' + re.escape(a) + r')(?:\?v=[0-9a-f]+)?"', r'\1?v=' + v + '"', new)
    if new != txt:
        f.write_text(new, encoding='utf-8')
        print('updated', f.name)
print('versions', ver)
