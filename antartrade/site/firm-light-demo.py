# Builds firm-light.html: a demo of the Apex page with light sections and folded long lists.
# It only reads firm.html and adds a demo layer on top; the real page and its parts stay untouched.
import os

D = os.path.dirname(os.path.abspath(__file__))
html = open(f'{D}/firm.html', encoding='utf-8').read()

css = r'''
<style id="light-demo">
/* demo: three sections switch to the homepage's light background, so the long page alternates dark / light */
.fp .lt { background: #f4f7fb !important; color: #12161f; }
.fp .lt .h2 { background: linear-gradient(90deg, #2e8bd8 0%, #12161f 78%); -webkit-background-clip: text; background-clip: text; }
.fp .lt .pill { background: rgba(46,139,216,.12); color: #2e8bd8; }
.fp .lt .sub { color: rgba(18,22,31,.6); }
/* folded lists: the first items stay, the rest open from a button in the page's own link style */
.fp .folded > .fold-x { display: none !important; }
.fp .fold-btn { align-self: center; display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 22px; border-radius: 999px; border: 1px solid rgba(125,198,255,.45);
  background: rgba(125,198,255,.08); color: #fff; font: 500 16px/1 "Fb Reforma", "Roboto"; cursor: pointer; transition: background .2s; }
.fp .fold-btn:hover { background: rgba(125,198,255,.16); }
.fp .lt .fold-btn { color: #12161f; border-color: rgba(46,139,216,.4); background: #fff; }
.fp .fold-btn svg { width: 12px; height: 8px; transition: transform .25s; }
.fp .fold-btn.open svg { transform: rotate(180deg); }
.demo-note { position: fixed; z-index: 9999; left: 16px; bottom: 16px; max-width: 330px; padding: 14px 16px; border-radius: 16px; background: rgba(11,14,20,.92); color: #fff;
  border: 1px solid rgba(125,198,255,.3); font: 400 14px/1.45 "Fb Reforma", "Roboto"; direction: rtl; backdrop-filter: blur(10px); }
.demo-note b { font-weight: 500; color: #7dc6ff; } .demo-note button { margin-top: 8px; background: none; border: 0; color: rgba(255,255,255,.6); font: inherit; cursor: pointer; padding: 0; }
</style>'''

js = r'''
<script id="light-demo-js">
(function () {
  var LIGHT = ['withdraw', 'opinion', 'faq'];
  var lum = function (r, g, b) { return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  var rgba = function (s) { var m = s && s.match(/rgba?\(([^)]+)\)/); if (!m) return null; var p = m[1].split(',').map(parseFloat); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };

  /* recolour one light section: white text becomes ink, dark panels become white cards, sky text a deeper blue */
  function lighten(sec) {
    sec.classList.add('lt');
    sec.querySelectorAll('*').forEach(function (el) {
      if (el.closest('.btn-halo, .fold-btn, svg, img')) return;
      var cs = getComputedStyle(el);
      var c = rgba(cs.color);
      if (c && !el.classList.contains('h2')) {
        var L = lum(c.r, c.g, c.b);
        if (L > 200 && c.r > 200 && c.b > 200 && c.g > 200) el.style.color = 'rgba(18,22,31,' + Math.max(.55, c.a) + ')';
        else if (c.b > 220 && c.r < 160) el.style.color = '#2e8bd8';
      }
      var bg = rgba(cs.backgroundColor);
      if (bg && bg.a > .02) {
        var BL = lum(bg.r, bg.g, bg.b);
        if (BL < 70 && bg.a > .5) { el.style.backgroundColor = '#fff'; el.style.borderColor = 'rgba(18,22,31,.08)'; }
        else if (BL > 200 && bg.a < .25) el.style.backgroundColor = 'rgba(18,22,31,' + (bg.a + .02).toFixed(3) + ')';
      }
      if (cs.backgroundImage.indexOf('gradient') > -1 && !el.classList.contains('h2') && !el.closest('.btn-halo')) {
        if (/rgba?\((1[0-9]|2[0-9]|[0-9]),/.test(cs.backgroundImage) || cs.backgroundImage.indexOf('rgb(11, 14, 20)') > -1) { el.style.backgroundImage = 'none'; el.style.backgroundColor = '#fff'; }
      }
      var bc = rgba(cs.borderTopColor);
      if (bc && cs.borderTopWidth !== '0px' && lum(bc.r, bc.g, bc.b) > 200 && bc.a < .4) el.style.borderColor = 'rgba(18,22,31,.1)';
    });
  }

  /* fold a list: keep the first n children, the rest open from a button */
  function fold(list, n, more, less) {
    if (!list) return;
    var kids = [].slice.call(list.children);
    if (kids.length <= n) return;
    kids.slice(n).forEach(function (k) { k.classList.add('fold-x'); });
    list.classList.add('folded');
    var arrow = '<svg viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var b = document.createElement('button'); b.type = 'button'; b.className = 'fold-btn';
    var set = function (open) { b.innerHTML = (open ? less : more.replace('{n}', '<span class="lat">' + (kids.length - n) + '</span>')) + arrow; b.classList.toggle('open', open); };
    set(false);
    b.addEventListener('click', function () { var open = list.classList.toggle('folded'); set(!open); });
    list.parentNode.insertBefore(b, list.nextSibling);
  }

  function run() {
    LIGHT.forEach(function (id) { var s = document.getElementById(id); if (s) { s.classList.remove('alt'); lighten(s); } });
    fold(document.getElementById('rulesGrid'), 6, 'הצג עוד {n} חוקים', 'הצג פחות חוקים');
    var faq = document.querySelector('#faq .w > div:last-child, #faq .list, #faq [class*="faq"]');
    var items = document.querySelectorAll('#faq details, #faq .q, #faq .item');
    if (items.length) fold(items[0].parentNode, 5, 'הצג עוד {n} שאלות', 'הצג פחות שאלות');
    var note = document.createElement('div'); note.className = 'demo-note';
    note.innerHTML = '<b>הדמיה:</b> שלושה סקשנים בהירים (משיכות, הדעה שלנו, שאלות נפוצות), וחוקים ושאלות מקופלים. העמוד באתר לא השתנה.<br><button type="button">סגור</button>';
    note.querySelector('button').onclick = function () { note.remove(); };
    document.body.appendChild(note);
  }
  /* the rules grid is filled by the page script, so wait a beat after load */
  window.addEventListener('load', function () { setTimeout(run, 400); });
})();
</script>'''

out = html.replace('</head>', css + '\n</head>', 1).replace('</body>', js + '\n</body>', 1)
out = out.replace('<title>Apex Trader Funding - AntarTrade</title>', '<title>Apex - הדמיה עם סקשנים בהירים</title><meta name="robots" content="noindex, nofollow">', 1)
open(f'{D}/firm-light.html', 'w', encoding='utf-8').write(out)
print('built firm-light.html')
