# joins the duel page versions: shell, header, one hero version, the shared duel body, footer -> duel-a.html ... duel-d.html
import re, os, base64
D = os.path.dirname(os.path.abspath(__file__))
def latin_fallback(html):
    return re.sub(r'"Fb Reforma"(?!\s*;)(?!\s*,\s*"?Roboto)', '"Fb Reforma", "Roboto"', html)
def inline(css):
    def rep(m):
        p = f'{D}/' + m.group(2)
        if not os.path.exists(p): return m.group(0)
        mt = {'svg': 'image/svg+xml', 'webp': 'image/webp', 'png': 'image/png', 'jpg': 'image/jpeg'}.get(p.rsplit('.', 1)[-1], 'application/octet-stream')
        return 'url("data:%s;base64,%s")' % (mt, base64.b64encode(open(p, 'rb').read()).decode())
    return re.sub(r'url\((["\']?)(img/[^"\')]+)\1\)', rep, css)

ARROW = '<svg viewBox="0 0 12 10" fill="none"><path d="M11 5H1M5 1L1 5L5 9" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
SWAP = '<svg viewBox="0 0 16 16" fill="none"><path d="M9.5 1.5L13 5L9.5 8.5M12.4647 5H3M6.5 14.5L3 11L6.5 7.5M3.5625 11H13" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
CHEV = '<svg viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'

def card(side, name, logo, plan, sizes, now, was, per):
    sz = ''.join(f'<button class="{"on" if s == "50K" else ""}">{s}</button>' for s in sizes)
    return f'''<article class="dq-f" data-side="{side}">
  <div class="top"><span class="side">{"צד א׳" if side == 0 else "צד ב׳"}</span><button class="swap">החלף חברה {SWAP}</button></div>
  <div class="co"><img src="{logo}" alt=""><span class="n">{name}</span></div>
  <div class="plan"><span><small>מסלול</small>{plan}</span>{CHEV}</div>
  <div class="sizes">{sz}</div>
  <div><div class="meta"><span class="lat">50K</span> · החל מ-</div><div class="price"><span class="now">{now}</span><span class="was">{was}</span>{f'<span class="per">{per}</span>' if per else ''}</div></div>
  <div class="code"><span><b>ANTAR</b> קוד הנחה</span><button>העתקה</button></div>
  <a class="simple" href="#">במילים פשוטות</a>
</article>'''

FIGHTERS = ('<div class="dq-ring">'
  + card(0, 'Take Profit', 'img/firm-takeprofit.svg', 'מסלול יחיד', ['25K', '50K', '75K', '100K', '150K'], '$102', '$170', 'לחודש')
  + '<div class="dq-vs"><i>VS</i></div>'
  + card(1, 'Lucid Trading', 'img/lucid-fig-dark.png', '<span class="lat">Pro</span>', ['25K', '50K', '100K', '150K'], '$150.50', '$215', '')
  + '</div>')

CHIPS = '''<div class="dq-chips"><span>דו קרבים פופולריים:</span>
  <button class="dq-chip on">Take Profit <b>vs</b> Lucid Trading</button><button class="dq-chip">Apex <b>vs</b> Bulenox</button><button class="dq-chip">FundedNext Futures <b>vs</b> Topstep</button></div>'''

VERS = [('a', 'כפפות'), ('b', 'זירת לוגואים'), ('c', 'לוח תוצאות'), ('d', 'מסך מפוצל'), ('e', 'פינות הזירה'), ('f', 'כפפה לכל צד'), ('g', 'קרני אור'), ('h', 'לוגואים בתלת מימד'), ('i', 'כרטיסים מתנגשים'), ('j', 'אלכסון וברק'), ('k', 'חתך אור')]

if __name__ == '__main__':
    common = open(f'{D}/duel-parts/50-common.html', encoding='utf-8').read()
    for v, label in VERS:
        hero = open(f'{D}/duel-parts/hero-{v}.html', encoding='utf-8').read().replace('<!--FIGHTERS-->', FIGHTERS).replace('<!--CHIPS-->', CHIPS)
        sw = '<nav class="dq-ver">' + ''.join(f'<a class="{"on" if x == v else ""}" href="duel-{x}.html">{x.upper()}<span class="t"> · {l}</span></a>' for x, l in VERS) + '</nav>'
        page = '<main class="dq" id="top">' + hero + common + '</main>' + sw
        parts = [open(f'{D}/parts/00-header.html', encoding='utf-8').read(), page, open(f'{D}/parts/12-footer.html', encoding='utf-8').read(), open(f'{D}/parts/99-mobile.html', encoding='utf-8').read()]
        styles, bodies = [], []
        for s in parts:
            styles += re.findall(r'<style>.*?</style>', s, re.S)
            bodies.append(re.sub(r'<style>.*?</style>', '', s, flags=re.S).strip())
        shell = inline(open(f'{D}/shell.html', encoding='utf-8').read()).replace('<title>AntarTrade - דף הבית</title>', f'<title>דו קרב - {label}</title>')
        out = shell.replace('<!--PART-STYLES-->', '\n'.join(inline(s) for s in styles)).replace('<!--PARTS-->', '\n\n'.join(bodies))
        open(f'{D}/duel-{v}.html', 'w', encoding='utf-8').write(latin_fallback(out))
        print('built duel-%s.html' % v)
