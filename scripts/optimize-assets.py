"""Run with Pillow, fonttools and brotli installed; preserves source assets."""
from pathlib import Path
import json, re
from PIL import Image, ImageOps
from fontTools.ttLib import TTFont
root=Path(__file__).resolve().parents[1]
pages=list(root.glob('OAKS*.html'))
refs=set()
manifest=root/"assets/optimized/manifest.json"
previous=json.loads(manifest.read_text()).get("mapping",{}) if manifest.exists() else {}
page_text="\n".join(page.read_text() for page in pages)
refs.update(old for old,new in previous.items() if new in page_text)
for page in pages:
    refs.update(re.findall(r'(?:export-assets|assets)/[\w./-]+\.(?:png|jpg|jpeg)',page.read_text()))
mapping={}; before=after=0
for ref in sorted(refs):
    source=root/ref
    if not source.exists(): continue
    target=root/'assets/optimized'/((ref.rsplit('.',1)[0]).replace('/','_')+'.webp')
    target.parent.mkdir(parents=True,exist_ok=True)
    with Image.open(source) as im:
        im=ImageOps.exif_transpose(im)
        edge=640 if 'logo' in ref or 'seal' in ref else 2200 if 'press' in ref else 1600
        im.thumbnail((edge,edge),Image.Resampling.LANCZOS)
        im.save(target,'WEBP',quality=82,method=6)
    if target.stat().st_size < source.stat().st_size:
        mapping[ref]=str(target.relative_to(root)); before+=source.stat().st_size; after+=target.stat().st_size
for page in pages:
    text=page.read_text()
    for old,new in mapping.items(): text=text.replace(old,new)
    page.write_text(text)
(root/'index.html').write_text((root/'OAKS Home.dc.html').read_text())
for css in root.glob('_ds/*/tokens/fonts.css'):
    text=css.read_text()
    for font in (css.parent.parent/'assets/fonts').glob('*.ttf'):
        target=font.with_suffix('.woff2')
        f=TTFont(font); f.flavor='woff2'; f.save(target)
        text=text.replace(font.name,target.name).replace('format("truetype")','format("woff2")')
    css.write_text(text)
report={'images':len(mapping),'original_bytes':before,'optimized_bytes':after,'saved_percent':round((1-after/before)*100,1) if before else 0,'mapping':mapping}
(root/'assets/optimized/manifest.json').write_text(json.dumps(report,indent=2))
print(json.dumps({k:v for k,v in report.items() if k!='mapping'}))
