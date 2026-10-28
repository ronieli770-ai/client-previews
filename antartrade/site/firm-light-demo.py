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
.fp .lt .lt-chip { background: rgba(18,22,31,.04) !important; border: 0 !important; background-image: none !important; box-shadow: none !important; }
/* capsules on light grounds follow the dark ones: same height, no frame (the track and the questions too) */
.fp .lt details, .fp .lt details[open] { border: 0 !important; }
.fp .lt.fp-faq summary::after { color: #12161f; }
/* toggles on light ground: the dark-section toggle inverted, driven by the page's own .on class so it follows every click */
.fp .lt .tg { background: rgba(18,22,31,.04); }
.fp .lt .tg button { color: rgba(18,22,31,.7); }
.fp .lt .tg button.on { background: #12161f; color: #fff; }
/* no highlight flash behind changed values on the light ground */
.fp .lt .flash { animation: none !important; }
.fp .lt .lt-on { background: #12161f !important; color: #fff !important; border-color: #12161f !important; }
.fp .lt .lt-line { border-color: #eaf2fa !important; }
/* folded lists: the first items stay, the rest open from the site's own halo button (outlined on dark, navy on light) */
.fp .folded > .fold-x { display: none !important; }
.fp .fold-btn { align-self: center; border: 0; cursor: pointer; font: inherit; }
.fp .fold-btn svg { width: 12px; height: 8px; transition: transform .25s; }
.fp .fold-btn.open svg { transform: rotate(180deg); }
.demo-note { position: fixed; z-index: 9999; left: 16px; bottom: 16px; max-width: 330px; padding: 14px 16px; border-radius: 16px; background: rgba(11,14,20,.92); color: #fff;
  border: 1px solid rgba(125,198,255,.3); font: 400 14px/1.45 "Fb Reforma", "Roboto"; direction: rtl; backdrop-filter: blur(10px); }
.demo-note b { font-weight: 500; color: #7dc6ff; } .demo-note button { margin-top: 8px; background: none; border: 0; color: rgba(255,255,255,.6); font: inherit; cursor: pointer; padding: 0; }

/* ---------- mobile comparison demo (switch: current / easier) ---------- */
.ux-switch { display: none; }
@media (max-width: 760px) {
  .ux-switch { display: flex; position: fixed; z-index: 9998; left: 50%; transform: translateX(-50%); bottom: 14px; padding: 4px; border-radius: 999px; background: rgba(11,14,20,.92);
    border: 1px solid rgba(125,198,255,.35); backdrop-filter: blur(12px); box-shadow: 0 12px 30px rgba(0,0,0,.45); font: 500 14px/1 "Fb Reforma", "Roboto"; direction: rtl; }
  .ux-switch button { border: 0; background: none; color: rgba(255,255,255,.72); height: 36px; padding: 0 14px; border-radius: 999px; font: inherit; white-space: nowrap; cursor: pointer; }
  .ux-switch button.on { background: #e8e8ed; color: #12161f; }
  .demo-note { bottom: 74px; }

  /* 1. the size picker stays under the page nav while you scroll the section */
  body.ux .fp-wd .bar { position: sticky; top: var(--stick, 140px); z-index: 25; margin-inline: -16px; padding: 10px 16px; }
  body.ux .fp-wd .bar { background: rgba(255,255,255,.94); backdrop-filter: blur(10px); }
  /* 3. accounts: one compact card that fits a phone screen. The size picker moves into the card,
        price and buy button come first, four key rows show, the rest opens under "כל התנאים" */
  body.ux #accSize { display: none !important; }
  body.ux .fp-acc .w { gap: 18px; }
  body.ux #accSimple.fold { padding: 0; gap: 0; }
  body.ux #accSimple.fold > .simple-tg { display: flex; }
  body.ux #accSimple.fold:not(.open) > :not(.simple-tg) { display: none; }
  body.ux #accSimple.fold.open { padding-bottom: 20px; }
  body.ux #accSimple.fold.open > :not(.simple-tg) { margin-inline: 18px; }
  body.ux #accSimple.fold.open > h3 { display: none; }
  .simple-tg { display: none; width: 100%; align-items: center; justify-content: space-between; gap: 10px; padding: 16px 18px; border: 0; background: none; color: #fff; font: 500 17px/1.3 "Fb Reforma", "Roboto"; text-align: right; cursor: pointer; }
  .simple-tg .ic { display: flex; align-items: center; gap: 10px; }
  .simple-tg .ic i { width: 34px; height: 34px; flex: none; border-radius: 50%; display: grid; place-items: center; background: rgba(125,198,255,.12); font-style: normal; }
  .simple-tg svg.ch { width: 14px; height: 14px; transition: transform .25s; }
  #accSimple.open .simple-tg svg.ch { transform: rotate(180deg); }
  body.ux .acard .face.front { gap: 12px; padding: 18px 18px 16px; }
  body.ux .acard .face.front > .top { order: 0; }
  body.ux .acard .face.front > .msz { order: 1; display: flex; }
  body.ux .acard .face.front > .price { order: 2; }
  body.ux .acard .face.front > .gbtn { order: 3; }
  body.ux .acard .face.front > .rows.r1 { order: 4; }
  body.ux .acard .face.front > .tg.full { order: 5; }
  body.ux .acard .face.front > .rows.r2 { order: 6; }
  body.ux .acard .face.front > .morebtn { order: 7; display: inline-flex; }
  body.ux .acard .face.front > .flipl { order: 8; }
  body.ux .acard:not(.more) .face.front > .rows.r1 > div:nth-child(n+5),
  body.ux .acard:not(.more) .face.front > .tg.full,
  body.ux .acard:not(.more) .face.front > .rows.r2 { display: none; }
  body.ux .acard .top .sz { font-size: 26px; line-height: 1.2; }
  body.ux .acard .price b { font-size: 34px; line-height: 1.15; }
  body.ux .acard .price { gap: 2px; }
  body.ux .acard .rows > div { padding: 8px 0; }
  .msz, .morebtn { display: none; }
  .msz { flex-direction: column; gap: 8px; }
  .msz .lb { font: 400 14px/1.2 "Fb Reforma"; color: rgba(255,255,255,.55); }
  .msz .tg { display: flex; } .msz .tg button { flex: 1 1 0; }
  .morebtn { align-self: center; align-items: center; gap: 6px; border: 0; background: none; color: #7dc6ff; font: 500 15px/1.2 "Fb Reforma", "Roboto"; cursor: pointer; padding: 4px 0; }
  .morebtn svg { width: 12px; height: 12px; transition: transform .25s; }
  .acard.more .morebtn svg { transform: rotate(180deg); }
  body.ux .fp-wd .bar .lnk { display: none; }

  /* 2. withdrawals: one list of rows instead of seven boxes */
  .wd-list, .wd-cmp { display: none; }
  body.ux .fp-wd .quad, body.ux .fp-wd .tri, body.ux .fp-wd .duo { display: none !important; }
  body.ux .wd-list { display: block; }
  body.ux .wd-cmp { display: inline-flex; }
  .wd-list { border-radius: 24px; padding: 6px 20px; }
  .wd-list .grp { font: 500 16px/1.2 "Fb Reforma"; color: #2e8bd8; padding: 18px 0 6px; }
  .wd-list .row { display: flex; justify-content: space-between; align-items: baseline; gap: 14px; padding: 12px 0; border-bottom: 1px solid #eaf2fa; }
  .wd-list .grp + .row { padding-top: 6px; }
  .wd-list .row:last-child { border-bottom: 0; }
  .wd-list .k { font: 400 16px/1.35 "Fb Reforma"; color: rgba(18,22,31,.7); }
  .wd-list .v, .wd-list .v * { font: 500 16px/1.35 "Fb Reforma", "Roboto" !important; color: #12161f !important; -webkit-text-fill-color: #12161f !important; background: none !important; text-align: left; }
  .wd-list .v .lat, .wd-list .v.isnum { font-family: "Roboto", sans-serif !important; font-weight: 600 !important; }
  .cmp-sheet td.isnum, .cmp-sheet td .lat { font-family: "Roboto", sans-serif; font-weight: 600; }
  /* the template switcher is a review tool; it sat on top of the demo switch */
  .fp-tpl { display: none !important; }
  .wd-cmp { order: 2; margin-inline-start: auto; align-items: center; gap: 6px; border: 0; background: none; padding: 0; cursor: pointer; font: 500 16px/1.2 "Fb Reforma"; color: #2e8bd8; }

  /* 3. compare every size: a sheet with the sizes as columns */
  .cmp-sheet { position: fixed; inset: 0; z-index: 10000; display: none; direction: rtl; }
  .cmp-sheet.open { display: block; }
  .cmp-sheet .bg { position: absolute; inset: 0; background: rgba(0,0,0,.55); }
  .cmp-sheet .pnl { position: absolute; inset: auto 0 0 0; max-height: 86dvh; display: flex; flex-direction: column; background: #fff; color: #12161f; border-radius: 24px 24px 0 0; }
  .cmp-sheet .hd { display: flex; align-items: center; gap: 12px; padding: 18px 20px 10px; }
  .cmp-sheet .hd b { font: 500 22px/1.2 "Fb Reforma"; }
  .cmp-sheet .x { width: 36px; height: 36px; border-radius: 50%; border: 0; background: rgba(18,22,31,.04); display: grid; place-items: center; color: #12161f; cursor: pointer; }
  .cmp-sheet .scroll { overflow: auto; padding: 0 0 24px; }
  .cmp-sheet table { border-collapse: separate; border-spacing: 0; min-width: 100%; font: 400 15px/1.35 "Fb Reforma", "Roboto"; }
  .cmp-sheet table { table-layout: fixed; width: 100%; }
  .cmp-sheet th, .cmp-sheet td { padding: 10px 6px; border-bottom: 1px solid #eaf2fa; text-align: right; vertical-align: top; }
  .cmp-sheet td { font-size: 13px; padding-inline: 4px; }
  .cmp-sheet .lat { font-family: "Roboto", sans-serif; font-weight: 500; }
  .cmp-sheet td .lat, .cmp-sheet thead .lat { font-weight: 600; }
  .cmp-sheet col.lbl { width: 30%; }
  .cmp-sheet thead th { position: sticky; top: 0; background: #fff; z-index: 2; font: 600 15px/1.2 "Roboto"; }
  .cmp-sheet thead th.on { color: #2e8bd8; }
  .cmp-sheet tbody th { font: 400 14px/1.3 "Fb Reforma"; color: rgba(18,22,31,.7); padding-inline-start: 20px; }
  .cmp-sheet thead th:first-child { padding-inline-start: 20px; }
  .cmp-sheet td { font-weight: 500; }
  .cmp-sheet tr.grp th { color: #2e8bd8; font: 500 15px/1.2 "Fb Reforma"; padding-top: 18px; }
}
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
      if (el.closest('.btn-halo, .fold-btn, svg, img, .pill, .h2, .tg')) return;
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
  }

  function fold(list, n, more, less) {
    if (!list) return;
    var kids = [].slice.call(list.children);
    if (kids.length <= n) return;
    kids.slice(n).forEach(function (k) { k.classList.add('fold-x'); });
    list.classList.add('folded');
    var arrow = '<svg viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var b = document.createElement('button'); b.type = 'button';
    b.className = 'fold-btn btn-halo ' + (list.closest('.lt') ? 'dark' : 'ghost');
    /* the label is one inline run, so the button's flex gap never pushes the number away from its words */
    var set = function (open) { b.innerHTML = '<span><span>' + (open ? less : more.replace('{n}', '<span class="lat">' + (kids.length - n) + '</span>')) + '</span>' + arrow + '</span>'; b.classList.toggle('open', open); };
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


  /* ---------- mobile comparison demo ---------- */
  function mobileDemo() {
    if (!matchMedia('(max-width: 760px)').matches) return;
    var nav = document.querySelector('.fp-nav'), hdr = document.getElementById('hdr');
    var setStick = function () { document.documentElement.style.setProperty('--stick', ((hdr ? hdr.offsetHeight : 76) + (nav ? nav.offsetHeight : 60) - 2) + 'px'); };
    setStick(); addEventListener('resize', setStick);

    /* withdrawals: gather the seven boxes into one list of rows (the data-w spans are moved as clones, setWd updates every copy) */
    var wd = document.getElementById('withdraw'); var w = wd.querySelector('.w');
    var list = document.createElement('div'); list.className = 'wd-list lt-card';
    /* a value that is only a number or amount is set in Roboto (Reforma has no digits) */
    var isNum = function (t) { return /^[$\d]/.test(t.trim()) && !/[\u0590-\u05FF]/.test(t); };
    var numCls = function (v) { v.classList.toggle('isnum', isNum(v.textContent)); new MutationObserver(function () { v.classList.toggle('isnum', isNum(v.textContent)); }).observe(v, { childList: true, characterData: true, subtree: true }); };
    var add = function (title, pairs) { list.insertAdjacentHTML('beforeend', '<div class="grp">' + title + '</div>'); pairs.forEach(function (p) { var r = document.createElement('div'); r.className = 'row'; r.appendChild(p[0].cloneNode(true)); var v = p[1].cloneNode(true); r.appendChild(v); list.appendChild(r); numCls(v); }); };
    var qb = [].slice.call(wd.querySelectorAll('.quad .box')).map(function (b) { var k = b.querySelector('.k').cloneNode(true), v = b.querySelector('.v').cloneNode(true); v.className = 'v'; v.removeAttribute('style'); return [k, v]; });
    add('בקצרה', qb);
    wd.querySelectorAll('.tri .box, .duo .box').forEach(function (b) {
      var t = b.querySelector('.h3').textContent, rows = [].slice.call(b.querySelectorAll('.rows > div')).map(function (d) { return [d.querySelector('.k'), d.querySelector('.v')]; });
      if (!rows.length && b.querySelector('.big')) { var k = document.createElement('span'); k.className = 'k'; k.textContent = b.querySelector('.s').textContent; var v = b.querySelector('.big').cloneNode(true); v.className = 'v'; rows = [[k, v]]; }
      add(t, rows);
    });
    var quad = wd.querySelector('.quad'); quad.parentNode.insertBefore(list, quad);

    /* compare every size */
    /* the compare link sits in the sticky size bar, right next to the sizes, in place of the page's own scroll link */
    var cmpBtn = document.createElement('button'); cmpBtn.type = 'button'; cmpBtn.className = 'wd-cmp';
    cmpBtn.innerHTML = 'השוו בין כל הגדלים <svg viewBox="0 0 12 10" width="12" height="10" fill="none"><path d="M11 5H1M5 1L1 5L5 9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    wd.querySelector('.bar').appendChild(cmpBtn);
    var sheet = document.createElement('div'); sheet.className = 'cmp-sheet';
    sheet.innerHTML = '<div class="bg"></div><div class="pnl"><div class="hd"><button type="button" class="x" aria-label="סגירה"><svg viewBox="0 0 10 10" width="12" height="12" fill="none"><path d="M1 1L9 9M9 1L1 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button><b></b></div><div class="scroll"></div></div>';
    document.body.appendChild(sheet);
    var close = function () { sheet.classList.remove('open'); }; sheet.querySelector('.bg').onclick = close; sheet.querySelector('.x').onclick = close;

    /* one table for any size picker: click every size, read its rows, put the picker back where it was */
    var openTable = function (title, sizeSel, gather) {
      var y = scrollY, btns = [].slice.call(document.querySelectorAll(sizeSel)), cur = btns.findIndex(function (b) { return b.classList.contains('on'); });
      var labels = btns.map(function (b) { return b.textContent.trim(); });
      var cols = labels.map(function (_, i) { document.querySelectorAll(sizeSel)[i].click(); return gather(); });
      document.querySelectorAll(sizeSel)[cur].click(); scrollTo(0, y);
      var html = '<table><colgroup><col class="lbl">' + labels.map(function () { return '<col>'; }).join('') + '</colgroup><thead><tr><th></th>' + labels.map(function (l, i) { return '<th class="' + (i === cur ? 'on' : '') + '">' + l + '</th>'; }).join('') + '</tr></thead><tbody>';
      /* English and numbers in labels and the title in Roboto too (Reforma has no Latin letters) */
      var lat = function (t) { return t.replace(/([A-Za-z0-9$][A-Za-z0-9$,.%\/-]*(?: [A-Za-z0-9$][A-Za-z0-9$,.%\/-]*)*)/g, '<span class="lat">$1</span>'); };
      cols[0].forEach(function (r, i) { html += r.g ? '<tr class="grp"><th colspan="' + (labels.length + 1) + '">' + lat(r.g) + '</th></tr>' : '<tr><th>' + lat(r.k) + '</th>' + cols.map(function (c) { var v = c[i] ? c[i].v : ''; return '<td class="' + (isNum(v) ? 'isnum' : '') + '">' + v.replace(/([$\d][\d$,.%]*)/g, '<span class="lat">$1</span>') + '</td>'; }).join('') + '</tr>'; });
      sheet.querySelector('.hd b').innerHTML = lat(title);
      sheet.querySelector('.scroll').innerHTML = html + '</tbody></table>'; sheet.classList.add('open');
    };

    /* withdrawals: the rows of the one-list card */
    cmpBtn.onclick = function () {
      openTable('תנאי משיכה לפי גודל חשבון', '#wdSize button', function () { return [].slice.call(list.children).map(function (r) { return r.classList.contains('grp') ? { g: r.textContent } : { k: r.children[0].textContent, v: r.children[1].textContent }; }); });
    };

    /* accounts: the page's own "compare plans and sizes" button opens the same table with the account card's rows */
    var accBtn = document.querySelector('#accounts [data-cmp]');
    var rowsOf = function (face) { return [].slice.call(face.querySelectorAll('.rows > div')).map(function (d) { return { k: d.querySelector('.k').textContent.trim(), v: d.querySelector('.v').textContent.trim() }; }); };
    /* listened on window in the capture phase: the page's own anchor-scroll handler stops the click before it reaches the link */
    if (accBtn) window.addEventListener('click', function (e) {
      if (!document.body.classList.contains('ux') || !e.target.closest('#accounts [data-cmp]')) return;
      e.preventDefault(); e.stopImmediatePropagation();
      var plan = (document.querySelector('#accPick .tg button.on') || { textContent: '' }).textContent.trim();
      openTable('החשבונות לפי גודל' + (plan ? ' - ' + plan : ''), '#accSize .tg button', function () {
        var c = document.querySelector('.acard.sel'); if (!c) return [];
        var front = c.querySelector('.face.front'), back = c.querySelector('.face.back');
        var out = [{ g: 'מבחן' }].concat(rowsOf(front).slice(0, -2));
        var pr = front.querySelector('.price .p b'), was = front.querySelector('.price .p s');
        out.push({ g: 'מחיר' }, { k: 'מחיר המבחן עם ANTAR', v: pr ? pr.textContent.trim() : '' }, { k: 'מחיר מלא', v: was ? was.textContent.trim() : '' });
        out = out.concat(rowsOf(front).slice(-2));
        if (back) out = out.concat([{ g: 'חשבון ממומן' }], rowsOf(back));
        return out;
      });
    }, true);

    /* accounts: the compact card. The page re-renders #accCards and #accSimple on every pick, so the extras are added again each time */
    var CH = '<svg class="ch" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var more = false, simpleOpen = false, busy = false;
    var compact = function () {
      if (busy) return; busy = true;
      var simple = document.getElementById('accSimple');
      if (simple && simple.querySelector('h3') && !simple.querySelector('.simple-tg')) {
        simple.classList.add('fold'); simple.classList.toggle('open', simpleOpen);
        var t = document.createElement('button'); t.type = 'button'; t.className = 'simple-tg';
        t.innerHTML = '<span class="ic"><i><svg viewBox="0 0 16 16" width="16" height="16" fill="none"><path d="M2.5 3.5c1.8-.9 3.7-.9 5.5.3 1.8-1.2 3.7-1.2 5.5-.3v9c-1.8-.9-3.7-.9-5.5.3-1.8-1.2-3.7-1.2-5.5-.3v-9zM8 3.8v9.3" stroke="#7DC6FF" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></i><span></span></span>' + CH;
        t.querySelector('.ic span').innerHTML = simple.querySelector('h3').innerHTML;
        t.onclick = function () { simpleOpen = !simpleOpen; simple.classList.toggle('open', simpleOpen); };
        simple.insertBefore(t, simple.firstChild);
      }
      var real = [].slice.call(document.querySelectorAll('#accSize .tg button'));
      document.querySelectorAll('#accCards .acard').forEach(function (card) {
        var f = card.querySelector('.face.front'); if (!f || f.querySelector('.msz')) return;
        card.classList.toggle('more', more);
        var rs = f.querySelectorAll(':scope > .rows'); if (rs[0]) rs[0].classList.add('r1'); if (rs[1]) rs[1].classList.add('r2');
        if (real.length > 1) {
          var m = document.createElement('div'); m.className = 'msz';
          m.innerHTML = '<span class="lb">גודל חשבון</span><div class="tg">' + real.map(function (b, i) { return '<button type="button" class="' + (b.classList.contains('on') ? 'on' : '') + '" data-pi="' + i + '"><span class="lat">' + b.textContent.trim() + '</span></button>'; }).join('') + '</div>';
          m.addEventListener('click', function (e) { var b = e.target.closest('[data-pi]'); if (!b) return; e.stopPropagation(); document.querySelectorAll('#accSize .tg button')[+b.dataset.pi].click(); });
          f.querySelector('.top').after(m);
        }
        var n = (rs[0] ? Math.max(0, rs[0].children.length - 4) : 0) + (rs[1] ? rs[1].children.length : 0) + f.querySelectorAll(':scope > .tg.full').length;
        if (n) {
          var mb = document.createElement('button'); mb.type = 'button'; mb.className = 'morebtn';
          mb.innerHTML = '<span>' + (more ? 'פחות תנאים' : 'כל התנאים של החשבון') + '</span><svg viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
          mb.addEventListener('click', function (e) { e.stopPropagation(); more = !more; document.querySelectorAll('#accCards .acard').forEach(function (c) { c.classList.toggle('more', more); }); document.querySelectorAll('.morebtn span').forEach(function (x) { x.textContent = more ? 'פחות תנאים' : 'כל התנאים של החשבון'; }); });
          f.appendChild(mb);
        }
      });
      busy = false;
    };
    compact();
    var acc = document.getElementById('accounts');
    new MutationObserver(function () { if (!busy) setTimeout(compact, 0); }).observe(acc, { childList: true, subtree: true });

    /* the switch: what we have now / the easier version */
    document.body.classList.add('ux');
    var sw = document.createElement('div'); sw.className = 'ux-switch';
    sw.innerHTML = '<button type="button" data-v="0">המצב הנוכחי</button><button type="button" data-v="1" class="on">הגרסה הנוחה</button>';
    sw.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; sw.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b); }); document.body.classList.toggle('ux', b.dataset.v === '1'); });
    document.body.appendChild(sw);
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
    mobileDemo();
  }
  window.addEventListener('load', function () { setTimeout(run, 400); });
})();
</script>"""

out = html.replace('</head>', css + '\n</head>', 1).replace('</body>', js + '\n</body>', 1)
out = out.replace('<title>Apex Trader Funding - AntarTrade</title>', '<title>Apex - הדמיה עם סקשנים בהירים</title><meta name="robots" content="noindex, nofollow">', 1)
open(f'{D}/firm-light.html', 'w', encoding='utf-8').write(out)
print('built firm-light.html')
