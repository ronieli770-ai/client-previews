# Builds firm-light.html: a demo of the Apex page with light sections and folded long lists.
# It only reads firm.html and adds a demo layer on top; the real page and its parts stay untouched.
import os

D = os.path.dirname(os.path.abspath(__file__))
html = open(f'{D}/firm.html', encoding='utf-8').read()

css = r"""
<style id="light-demo">
/* demo: three sections in the homepage's light language (duel, community): white ground, navy titles, two greys only */
.fp .lt { background: #fff !important; color: #12161f; }
.fp .lt .h2 { background: none !important; color: #12161f !important; -webkit-text-fill-color: #12161f !important; }
.fp .lt .pill { background: rgba(97,177,242,.14) !important; color: #2e8bd8 !important; }
.fp .lt .sub { color: rgba(18,22,31,.7) !important; }
/* big containers: the community card (white with a sky glow and a sky gradient frame) */
.fp .lt .lt-card { position: relative; border: 0 !important; background:
    radial-gradient(55% 55% at 100% 0, rgba(214,236,255,.55) 0%, rgba(214,236,255,0) 100%),
    radial-gradient(70% 70% at 0 100%, rgba(97,177,242,.4) 0%, rgba(125,198,255,.15) 40%, rgba(214,236,255,0) 100%), #fff !important;
  box-shadow: 0 24px 60px rgba(85,169,235,.09) !important; }
.fp .lt .lt-card::before { content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px; pointer-events: none;
  background: linear-gradient(45deg, #2e8bd8 0%, #7dc6ff 50%, #d6ecff 100%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; }
/* capsules and small boxes inside: the duel chip grey */
.fp .lt .lt-chip { background: rgba(18,22,31,.04) !important; border: 1px solid rgba(18,22,31,.1) !important; background-image: none !important; box-shadow: none !important; }
.fp .lt .lt-on { background: #12161f !important; color: #fff !important; border-color: #12161f !important; }
.fp .lt .lt-line { border-color: #eaf2fa !important; }
/* folded lists: the first items stay, the rest open from a button */
.fp .folded > .fold-x { display: none !important; }
.fp .fold-btn { align-self: center; display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 22px; border-radius: 999px; border: 1px solid rgba(125,198,255,.45);
  background: rgba(125,198,255,.08); color: #fff; font: 500 16px/1 "Fb Reforma", "Roboto"; cursor: pointer; transition: background .2s; }
.fp .fold-btn:hover { background: rgba(125,198,255,.16); }
.fp .lt .fold-btn { color: #12161f; border-color: rgba(18,22,31,.1); background: rgba(18,22,31,.04); }
.fp .fold-btn svg { width: 12px; height: 8px; transition: transform .25s; }
.fp .fold-btn.open svg { transform: rotate(180deg); }
.demo-note { position: fixed; z-index: 9999; left: 16px; bottom: 16px; max-width: 330px; padding: 14px 16px; border-radius: 16px; background: rgba(11,14,20,.92); color: #fff;
  border: 1px solid rgba(125,198,255,.3); font: 400 14px/1.45 "Fb Reforma", "Roboto"; direction: rtl; backdrop-filter: blur(10px); }
.demo-note b { font-weight: 500; color: #7dc6ff; } .demo-note button { margin-top: 8px; background: none; border: 0; color: rgba(255,255,255,.6); font: inherit; cursor: pointer; padding: 0; }
</style>"""

js = r"""
<script id="light-demo-js">
(function () {
  var LIGHT = ['withdraw', 'opinion', 'faq'];
  var NAVY = '#12161f', GREY = 'rgba(18,22,31,.7)', GREY_L = 'rgba(18,22,31,.55)', BLUE = '#2e8bd8';
  var lum = function (c) { return 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b; };
  var rgba = function (s) { var m = s && s.match(/rgba?\(([^)]+)\)/); if (!m) return null; var p = m[1].split(',').map(parseFloat); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  var isWhite = function (c) { return c && c.r > 200 && c.g > 200 && c.b > 200; };
  var isSky = function (c) { return c && c.b > 220 && c.r < 170 && c.g > 120; };

  /* recolour one light section with the homepage's fixed palette: navy, two greys, the site blue */
  function lighten(sec) {
    sec.classList.add('lt');
    var all = [].slice.call(sec.querySelectorAll('*'));
    all.forEach(function (el) {
      if (el.closest('.btn-halo, .fold-btn, svg, img, .pill, .h2')) return;
      var cs = getComputedStyle(el), c = rgba(cs.color);
      /* text: white -> navy, mid white -> dark grey, faint white -> light grey; sky -> blue; gradient numbers -> navy */
      if (cs.webkitTextFillColor === 'rgba(0, 0, 0, 0)' || cs.backgroundClip === 'text' || cs.webkitBackgroundClip === 'text') {
        el.style.background = 'none'; el.style.webkitTextFillColor = NAVY; el.style.color = NAVY;
      } else if (isWhite(c)) el.style.color = c.a >= .85 ? NAVY : c.a >= .6 ? GREY : GREY_L;
      else if (isSky(c)) el.style.color = BLUE;
      /* boxes */
      var bg = rgba(cs.backgroundColor), r = parseFloat(cs.borderTopLeftRadius) || 0, box = el.getBoundingClientRect();
      var darkFill = (bg && bg.a > .4 && lum(bg) < 70) || /rgb\(11, 14, 20\)|rgba\(11, 14, 20/.test(cs.backgroundImage);
      var faintFill = bg && bg.a > .02 && bg.a < .3 && isWhite(bg);
      if ((darkFill || faintFill || cs.backgroundImage.indexOf('radial') > -1) && r >= 14 && box.width > 220 && box.height > 110 && !el.parentElement.closest('.lt-card')) {
        el.classList.add('lt-card'); el.style.backgroundImage = '';
      } else if (darkFill || faintFill) {
        el.classList.add('lt-chip');
      } else if (bg && bg.a > .5 && lum(bg) > 215 && r >= 20 && box.height < 60) {
        el.classList.add('lt-on');  /* the active toggle pill */
      }
      var bc = rgba(cs.borderTopColor);
      if (bc && parseFloat(cs.borderTopWidth) > 0 && isWhite(bc) && bc.a < .4 && !el.classList.contains('lt-card') && !el.classList.contains('lt-chip')) el.classList.add('lt-line');
      var bb = rgba(cs.borderBottomColor);
      if (bb && parseFloat(cs.borderBottomWidth) > 0 && isWhite(bb) && bb.a < .4) el.style.borderBottomColor = '#eaf2fa';
    });
    /* every question in the list looks the same, open or closed: the light capsule */
    sec.querySelectorAll('details').forEach(function (d) { d.classList.remove('lt-card'); d.classList.add('lt-chip'); });
    /* the big quote mark: a faint blue mark, not a solid black shape */
    sec.querySelectorAll('.qm').forEach(function (q) { q.style.webkitTextFillColor = 'rgba(46,139,216,.14)'; q.style.color = 'rgba(46,139,216,.14)'; });
    /* the active toggle text sits on the navy pill: keep it white */
    sec.querySelectorAll('.lt-on, .lt-on *').forEach(function (e) { e.style.color = '#fff'; });
  }

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

  /* English and numbers are never Roboto Regular: one weight above the Hebrew around them (Reforma 400 -> Roboto 500) */
  function weights() {
    document.querySelectorAll('.fp *').forEach(function (e) {
      if (![].some.call(e.childNodes, function (n) { return n.nodeType === 3 && n.nodeValue.trim(); })) return;
      var cs = getComputedStyle(e);
      if (/Roboto/.test(cs.fontFamily.split(',')[0]) && cs.fontWeight === '400') e.style.fontWeight = '500';
    });
  }

  function run() {
    weights();
    LIGHT.forEach(function (id) { var s = document.getElementById(id); if (s) { s.classList.remove('alt'); lighten(s); } });
    fold(document.getElementById('rulesGrid'), 6, 'הצג עוד {n} חוקים', 'הצג פחות חוקים');
    var items = document.querySelectorAll('#faq details');
    if (items.length) fold(items[0].parentNode, 5, 'הצג עוד {n} שאלות', 'הצג פחות שאלות');
    var note = document.createElement('div'); note.className = 'demo-note';
    note.innerHTML = '<b>הדמיה:</b> שלושה סקשנים בשפה הבהירה של דף הבית (משיכות, הדעה שלנו, שאלות נפוצות), וחוקים ושאלות מקופלים. העמוד באתר לא השתנה.<br><button type="button">סגור</button>';
    note.querySelector('button').onclick = function () { note.remove(); };
    document.body.appendChild(note);
  }
  window.addEventListener('load', function () { setTimeout(run, 400); });
})();
</script>"""

out = html.replace('</head>', css + '\n</head>', 1).replace('</body>', js + '\n</body>', 1)
out = out.replace('<title>Apex Trader Funding - AntarTrade</title>', '<title>Apex - הדמיה עם סקשנים בהירים</title><meta name="robots" content="noindex, nofollow">', 1)
open(f'{D}/firm-light.html', 'w', encoding='utf-8').write(out)
print('built firm-light.html')
