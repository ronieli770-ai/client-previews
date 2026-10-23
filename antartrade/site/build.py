# joins the section parts into index.html (styles to the head, markup in order)
import re, glob, os
def latin_fallback(html):
    # Reforma has no Latin letters: any English that slips into a Reforma run falls back to Roboto, never to a system font
    return re.sub(r'"Fb Reforma"(?!\s*;)(?!\s*,\s*"?Roboto)', '"Fb Reforma", "Roboto"', html)

D = os.path.dirname(os.path.abspath(__file__))
shell = open(f'{D}/shell.html', encoding='utf-8').read()
styles, bodies = [], []
for p in sorted(glob.glob(f'{D}/parts/*.html')):
    s = open(p, encoding='utf-8').read()
    styles += re.findall(r'<style>.*?</style>', s, re.S)
    bodies.append(f'<!-- {os.path.basename(p)} -->\n' + re.sub(r'<style>.*?</style>', '', s, flags=re.S).strip())
import base64, mimetypes
def inline(css):
    # CSS masks can't load files over file://, so images referenced from CSS are embedded
    def rep(m):
        p = f'{D}/' + m.group(2)
        if not os.path.exists(p): return m.group(0)
        mt = {'svg': 'image/svg+xml', 'webp': 'image/webp', 'png': 'image/png', 'jpg': 'image/jpeg'}.get(p.rsplit('.', 1)[-1], 'application/octet-stream')
        return 'url("data:%s;base64,%s")' % (mt, base64.b64encode(open(p, 'rb').read()).decode())
    return re.sub(r'url\((["\']?)(img/[^"\')]+)\1\)', rep, css)
shell = inline(shell)
styles = [inline(s) for s in styles]
out = shell.replace('<!--PART-STYLES-->', '\n'.join(styles)).replace('<!--PARTS-->', '\n\n'.join(bodies))
open(f'{D}/index.html', 'w', encoding='utf-8').write(latin_fallback(out))
print('built', len(bodies), 'parts')
