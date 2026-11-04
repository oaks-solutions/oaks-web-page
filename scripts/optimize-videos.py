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

# Decorative stock footage (Pexels licence), shown as "Illustrative footage": (pexels id, source file, start second)
stock=[
('7597819','7597819/7597819-hd_1920_1080_30fps.mp4',2),   # Valletta, Carmelite Basilica at dusk: home
('6672502','6672502/6672502-hd_1920_1080_24fps.mp4',0),   # marking an exam paper: assessments
('32082738','32082738/13675725_1920_1080_25fps.mp4',0),   # stylus on a tablet checklist: surveys
('6549976','6549976/6549976-hd_1920_1080_25fps.mp4',0),   # hands through archive files: document intelligence
('38855173','38855173/16516755_1920_1080_25fps.mp4',0),   # team with a tablet: upskilling
('8033300','8033300/8033300-hd_1920_1080_25fps.mp4',0),   # office team from above: partner model, about
('5311422','5311422/5311422-hd_1920_1080_25fps.mp4',0)]   # handshake: contact
for pid,src,start in stock:
    target=root/'assets/video'/f'stock-pexels-{pid}.mp4'
    if not target.exists():
        subprocess.run([ffmpeg,'-nostdin','-y','-loglevel','error','-rw_timeout','30000000','-ss',str(start),'-i','https://videos.pexels.com/video-files/'+src,'-t','10','-an','-vf','scale=1280:-2,fps=25','-c:v','libx264','-preset','slow','-crf','26','-pix_fmt','yuv420p','-movflags','+faststart',str(target)],check=True,timeout=300)
    poster=target.with_suffix('.webp')
    subprocess.run([ffmpeg,'-nostdin','-y','-loglevel','error','-i',str(target),'-frames:v','1','-vf','scale=1280:-2','-quality','78',str(poster)],check=True)
    print(pid, target.stat().st_size, flush=True)
