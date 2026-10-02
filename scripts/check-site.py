"""Smoke check with Playwright installed and a local server on port 8000."""
from pathlib import Path
import json, os
from urllib.parse import quote
from playwright.sync_api import sync_playwright
base='http://127.0.0.1:8000/'
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=os.environ.get('CHROME_PATH'),headless=True)
    results=[]
    for path in ['index.html']+[p.name for p in Path('.').glob('OAKS*.html')]:
        page=browser.new_page(viewport={'width':1440,'height':900})
        errors=[]; failures=[]
        page.on('pageerror',lambda e: errors.append(str(e)))
        page.on('response',lambda r: failures.append(r.url) if r.status>=400 and r.url.startswith(base) else None)
        page.goto(base+quote(path),wait_until='domcontentloaded')
        page.wait_for_selector('h1',timeout=15000)
        page.wait_for_timeout(500)
        assert not errors, (path,errors)
        assert not failures, (path,failures)
        results.append({'page':path,'title':page.locator('h1').inner_text(),'errors':errors})
        page.close()
    page=browser.new_page(viewport={'width':390,'height':844},reduced_motion='reduce')
    media=[]
    page.on('request',lambda r: media.append(r.url) if r.resource_type=='media' else None)
    page.goto(base,wait_until='domcontentloaded')
    page.wait_for_selector('#hero h1')
    page.wait_for_timeout(1500)
    assert not media, media
    assert not page.evaluate('document.documentElement.scrollWidth > innerWidth'), 'mobile overflow'
    page.screenshot(path='/private/tmp/oaks-mobile-optimized.png')
    page.close()
    page=browser.new_page(viewport={'width':1440,'height':900})
    page.goto(base,wait_until='domcontentloaded')
    page.wait_for_selector('#hero h1')
    assert page.locator('#hero video').evaluate_all('(vs)=>vs.filter(v=>v.hasAttribute("src")).length')==1
    page.locator('#hero button[aria-label="Pause footage"]').click()
    page.locator('#government video').scroll_into_view_if_needed()
    page.wait_for_function('document.querySelector("#government video")?.getAttribute("src")')
    programme=page.locator('#government video')
    print('Programme loads on scroll:',programme.get_attribute('src'))
    page.locator('#enterprise video').scroll_into_view_if_needed()
    page.wait_for_function('!document.querySelector("#government video") || document.querySelector("#government video").paused')
    page.wait_for_function('document.querySelector("#enterprise video").getAttribute("src")')
    print('Mining clip loads on scroll:',page.locator('#enterprise video').get_attribute('src'))
    browser.close()
    print(json.dumps({'pages':results,'mobile':'passed','reduced_motion':'no video requests','lazy_loading':'passed'},indent=2))
