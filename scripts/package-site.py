"""Package a committed static site for ChatGPT Sites; no third-party dependencies."""
from pathlib import Path
import argparse, json, shutil, subprocess, tarfile, tempfile
parser=argparse.ArgumentParser()
parser.add_argument('--commit',default='HEAD')
parser.add_argument('--archive',default='/private/tmp/oaks-site-deploy.tar.gz')
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]
sha=subprocess.check_output(['git','rev-parse',args.commit],cwd=root,text=True).strip()
with tempfile.TemporaryDirectory(prefix='oaks-package-') as scratch:
    work=Path(scratch)
    source=work/'source';source.mkdir()
    source_tar=work/'source.tar'
    subprocess.run(['git','archive','--format=tar','--output',str(source_tar),sha],cwd=root,check=True)
    with tarfile.open(source_tar) as tf: tf.extractall(source)
    package=work/'package';output=package/'dist';output.mkdir(parents=True)
    shutil.copytree(source/'.openai',package/'.openai')
    for path in source.iterdir():
        if path.is_file() and path.suffix in ('.html','.js','.png','.ico','.webmanifest'):
            shutil.copy2(path,output/path.name)
    for name in ('assets','export-assets'):
        shutil.copytree(source/name,output/name)
    for design in (source/'_ds').iterdir():
        dest=output/'_ds'/design.name;dest.mkdir(parents=True)
        for name in ('tokens','assets'):
            if (design/name).exists(): shutil.copytree(design/name,dest/name)
        for name in ('styles.css','_ds_bundle.js'):
            if (design/name).exists(): shutil.copy2(design/name,dest/name)
    if (source/'_headers').exists(): shutil.copy2(source/'_headers',output/'_headers')
    with tarfile.open(args.archive,'w:gz') as tf:
        for name in ('.openai','dist'): tf.add(package/name,arcname=name)
print(json.dumps({'commit_sha':sha,'archive':str(Path(args.archive).resolve()),'bytes':Path(args.archive).stat().st_size}))
