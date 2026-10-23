# joins the firm page: the homepage shell, header and footer around the firm-page parts, into firm.html
import re, glob, os
def latin_fallback(html):
    # Reforma has no Latin letters: any English that slips into a Reforma run falls back to Roboto, never to a system font
    return re.sub(r'"Fb Reforma"(?!\s*;)(?!\s*,\s*"?Roboto)', '"Fb Reforma", "Roboto"', html)

D = os.path.dirname(os.path.abspath(__file__))
import base64
def inline(css):
    def rep(m):
        p = f'{D}/' + m.group(2)
        if not os.path.exists(p): return m.group(0)
        mt = {'svg': 'image/svg+xml', 'webp': 'image/webp', 'png': 'image/png', 'jpg': 'image/jpeg'}.get(p.rsplit('.', 1)[-1], 'application/octet-stream')
        return 'url("data:%s;base64,%s")' % (mt, base64.b64encode(open(p, 'rb').read()).decode())
    return re.sub(r'url\((["\']?)(img/[^"\')]+)\1\)', rep, css)
parts = [f'{D}/parts/00-header.html'] + sorted(glob.glob(f'{D}/firm-parts/*.html')) + [f'{D}/parts/12-footer.html', f'{D}/parts/99-mobile.html']
styles, bodies = [], []
for p in parts:
    s = open(p, encoding='utf-8').read()
    styles += re.findall(r'<style>.*?</style>', s, re.S)
    bodies.append(f'<!-- {os.path.basename(p)} -->\n' + re.sub(r'<style>.*?</style>', '', s, flags=re.S).strip())
shell = inline(open(f'{D}/shell.html', encoding='utf-8').read()).replace('<title>AntarTrade - דף הבית</title>', '<title>Apex Trader Funding - AntarTrade</title>')
out = shell.replace('<!--PART-STYLES-->', '\n'.join(inline(s) for s in styles)).replace('<!--PARTS-->', '\n\n'.join(bodies))
open(f'{D}/firm.html', 'w', encoding='utf-8').write(latin_fallback(out))
print('built firm.html from', len(parts), 'parts')
