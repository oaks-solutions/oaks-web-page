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
# Full-HD cuts: 1920px wide, 12 s, CRF 21, silent, fast-start; posters at 1920px.
# Each also gets a 960px "-sm" cut and poster, which media.js and the pages use on phones and slow connections.
stock=[
('7597819','7597819/7597819-uhd_2560_1440_30fps.mp4',2),   # Valletta, Carmelite Basilica at dusk: home
('7255101','7255101/7255101-hd_2048_1080_30fps.mp4',0),    # operations room: solutions
('6672502','6672502/6672502-hd_1920_1080_24fps.mp4',0),    # marking an exam paper: assessments
('32082738','32082738/13675725_1920_1080_25fps.mp4',0),    # stylus on a tablet checklist: surveys
('6549976','6549976/6549976-hd_1920_1080_25fps.mp4',0),    # hands through archive files: document intelligence
('38855173','38855173/16516755_1920_1080_25fps.mp4',0),    # team with a tablet: upskilling
('8033300','8033300/8033300-hd_1920_1080_25fps.mp4',0),    # office team from above: partner model
('5311422','5311422/5311422-hd_1920_1080_25fps.mp4',0)]    # handshake: contact
for pid,src,start in stock:
    target=root/'assets/video'/f'stock-pexels-{pid}.mp4'
    if not target.exists():
        subprocess.run([ffmpeg,'-nostdin','-y','-loglevel','error','-rw_timeout','30000000','-ss',str(start),'-i','https://videos.pexels.com/video-files/'+src,'-t','12','-an',
                        '-vf','scale=1920:-2:flags=lanczos,fps=25','-c:v','libx264','-preset','slow','-crf','24' if pid=='7597819' else '21','-profile:v','high','-pix_fmt','yuv420p','-movflags','+faststart',str(target)],check=True,timeout=600)
    poster=target.with_suffix('.webp')
    subprocess.run([ffmpeg,'-nostdin','-y','-loglevel','error','-i',str(target),'-frames:v','1','-quality','85',str(poster)],check=True)
    small=target.with_name(target.stem+'-sm.mp4')
    subprocess.run([ffmpeg,'-nostdin','-y','-loglevel','error','-i',str(target),'-an','-vf','scale=960:-2:flags=lanczos','-c:v','libx264','-preset','slow','-crf','25',
                    '-profile:v','high','-pix_fmt','yuv420p','-movflags','+faststart',str(small)],check=True)
    subprocess.run([ffmpeg,'-nostdin','-y','-loglevel','error','-i',str(small),'-frames:v','1','-quality','80',str(small.with_suffix('.webp'))],check=True)
    print(pid, target.stat().st_size, small.stat().st_size, flush=True)
