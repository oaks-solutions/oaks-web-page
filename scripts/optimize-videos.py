"""Create short, silent, fast-start background clips and poster images.
Requires imageio-ffmpeg. Programme videos keep their full-length sources.
"""
from pathlib import Path
import subprocess
import imageio_ffmpeg
root=Path(__file__).resolve().parents[1]
ffmpeg=imageio_ffmpeg.get_ffmpeg_exe()
jobs=[
('titli','https://oaks-public.s3.ap-south-1.amazonaws.com/website/sunithainfo/videos/gamification_in_fln.mp4',6),
('hybrid','https://oaks-public.s3.ap-south-1.amazonaws.com/website/sunithainfo/videos/hybrid_learning_program.mp4',12),
('coaching','https://oaks-public.s3.ap-south-1.amazonaws.com/website/sunithainfo/videos/hybrid_learning_program.mp4',70),
('mining','https://videos.pexels.com/video-files/8382430/8382430-hd_1920_1080_30fps.mp4',0)]
for name,url,start in jobs:
    target=root/'assets/video'/f'{name}-preview.mp4'
    target.parent.mkdir(parents=True,exist_ok=True)
    if not target.exists():
        subprocess.run([ffmpeg,'-nostdin','-y','-loglevel','error','-rw_timeout','30000000','-ss',str(start),'-i',url,'-t','8','-an','-vf','scale=960:-2,fps=24','-c:v','libx264','-preset','fast','-crf','28','-pix_fmt','yuv420p','-movflags','+faststart',str(target)],check=True,timeout=180)
    poster=target.with_suffix('.webp')
    subprocess.run([ffmpeg,'-nostdin','-y','-loglevel','error','-i',str(target),'-frames:v','1','-quality','80',str(poster)],check=True)
    print(name, target.stat().st_size, flush=True)
