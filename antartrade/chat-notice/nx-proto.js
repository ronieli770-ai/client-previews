/* Prototype of the new deal notice, injected over the live homepage preview for the videos.
   Phone: a sheet that rises from the bottom (about 40% of the screen) over a soft dim; desktop: a big card beside the bot.
   A tap anywhere closes it: it folds into the bot and the bot keeps a count badge. A tap on the bot opens the notices list. */
(() => {
  const css = `
  .deal-notice{display:none!important}
  .nx-dim{position:fixed;inset:0;background:rgba(5,7,12,.5);opacity:0;transition:opacity .45s ease;z-index:2147483000;pointer-events:none}
  .nx-dim.on{opacity:1;pointer-events:auto}
  .nx{position:fixed;z-index:2147483001;direction:rtl;color:#eef3fa;font-family:"Fb Reforma","Roboto",sans-serif;background:radial-gradient(90% 70% at 85% 0,rgba(79,107,255,.32),rgba(79,107,255,0) 70%),radial-gradient(70% 60% at 0 100%,rgba(125,198,255,.16),rgba(125,198,255,0) 70%),#0b0e14;
    box-shadow:0 30px 80px rgba(0,0,0,.45);transition:transform .6s cubic-bezier(.22,1,.36,1),opacity .4s ease;display:flex;flex-direction:column;gap:14px}
  .nx.ph{left:0;right:0;bottom:0;border-radius:28px 28px 0 0;padding:26px 22px calc(26px + env(safe-area-inset-bottom,0px));min-height:40vh;transform:translateY(105%)}
  .nx.dk{right:96px;bottom:34px;width:420px;border-radius:28px;padding:28px;transform:translateY(24px) scale(.96);opacity:0;transform-origin:100% 100%}
  .nx.on{transform:none;opacity:1}
  .nx.fold{transform:translate(var(--fx),var(--fy)) scale(.06)!important;opacity:0!important;pointer-events:none;transition:transform .55s cubic-bezier(.55,0,.75,.2),opacity .5s ease}
  .nx .grab{align-self:center;width:44px;height:5px;border-radius:5px;background:rgba(255,255,255,.18);margin:-12px 0 4px}
  .nx .x{position:absolute;top:18px;left:18px;width:38px;height:38px;border-radius:50%;border:0;background:rgba(255,255,255,.07);color:#eef3fa;display:grid;place-items:center}
  .nx .x svg{width:18px;height:18px}
  .nx .tag{display:inline-flex;align-items:center;gap:8px;align-self:flex-start;padding:6px 14px;border-radius:999px;background:rgba(125,198,255,.14);color:#7DC6FF;font-size:15px;font-weight:500}
  .nx .tag svg{width:16px;height:16px}
  .nx .big{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin:4px 0 0}
  .nx .num{font:600 64px/1 "Roboto",sans-serif;background:linear-gradient(90deg,#7DC6FF,#4F6BFF);-webkit-background-clip:text;background-clip:text;color:transparent}
  .nx .ttl{font-size:26px;font-weight:500;line-height:1.2}
  .nx .ttl bdi{font-family:"Roboto",sans-serif;font-weight:600}
  .nx p{margin:0;font-size:16px;line-height:1.55;color:rgba(238,243,250,.72)}
  .nx p .en{font-family:"Roboto",sans-serif;font-weight:500}
  .nx .go{align-self:stretch;display:flex;align-items:center;justify-content:center;gap:10px;height:54px;border-radius:999px;background:#eef3fa;color:#12161f;font-size:17px;font-weight:500;text-decoration:none;margin-top:6px}
  .nx .go svg{width:14px;height:10px}
  .nx .hint{align-self:center;font-size:13px;color:rgba(238,243,250,.45)}
  .nx-badge{position:fixed;z-index:2147483003;min-width:22px;height:22px;padding:0 6px;border-radius:999px;background:linear-gradient(135deg,#7DC6FF,#4F6BFF);color:#fff;font:600 13px/22px "Roboto",sans-serif;text-align:center;box-shadow:0 0 0 3px #fff;transform:scale(0);transition:transform .45s cubic-bezier(.34,1.56,.64,1)}
  .nx-badge.on{transform:scale(1)}
  .nx-badge.away{transform:scale(0)!important}
  .nx-list{position:fixed;z-index:2147483002;direction:rtl;font-family:"Fb Reforma","Roboto",sans-serif;color:#eef3fa;background:#0b0e14;border-radius:24px;padding:18px;box-shadow:0 30px 80px rgba(0,0,0,.45);display:flex;flex-direction:column;gap:10px;transform:translateY(16px) scale(.97);opacity:0;transition:transform .45s cubic-bezier(.22,1,.36,1),opacity .3s ease;transform-origin:100% 100%;pointer-events:none}
  .nx-list.on{transform:none;opacity:1;pointer-events:auto}
  .nx-list.ph{left:12px;right:12px;bottom:90px}
  .nx-list.dk{right:96px;bottom:34px;width:380px}
  .nx-list h4{margin:0 2px 4px;font-size:18px;font-weight:500;display:flex;align-items:center;gap:10px}
  .nx-list h4 small{font:600 12px/20px "Roboto",sans-serif;min-width:20px;height:20px;border-radius:999px;background:linear-gradient(135deg,#7DC6FF,#4F6BFF);color:#fff;text-align:center;padding:0 6px}
  .nx-it{position:relative;display:flex;flex-direction:column;gap:6px;padding:14px 16px 14px 48px;border-radius:16px;background:#12161f;transition:opacity .3s,transform .3s}
  .nx-it .k{font-size:13px;color:#7DC6FF;font-weight:500;display:flex;align-items:center;gap:6px}
  .nx-it .k svg{width:14px;height:14px}
  .nx-it b{font-size:16px;font-weight:500}
  .nx-it b .n{font:600 16px "Roboto",sans-serif;color:#7DC6FF}
  .nx-it b bdi{font-family:"Roboto",sans-serif;font-weight:600}
  .nx-it a{font-size:14px;color:#7DC6FF;text-decoration:none;font-weight:500}
  .nx-it .x2{position:absolute;top:12px;left:12px;width:28px;height:28px;border-radius:50%;border:0;background:rgba(255,255,255,.06);color:rgba(238,243,250,.7);display:grid;place-items:center}
  .nx-it .x2 svg{width:14px;height:14px}
  .nx-it.gone{opacity:0;transform:translateX(-30px)}

  .nx.lt{background:#fff;color:#12161f;box-shadow:0 -10px 60px rgba(18,22,31,.28)}
  .nx.lt .grab{background:rgba(18,22,31,.15)}
  .nx.lt .x{background:#f1f4f8;color:#12161f}
  .nx.lt .tag{background:rgba(46,139,216,.10);color:#2e8bd8}
  .nx.lt .firm{display:flex;align-items:center;gap:14px}
  .nx.lt .firm img{width:58px;height:58px;padding:8px;border-radius:16px;background:#fff;box-shadow:0 0 0 1.5px #d9e2ec;object-fit:contain}
  .nx.lt .firm b{font:600 24px/1.15 "Roboto",sans-serif}
  .nx.lt .deal{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;padding:14px 16px;border-radius:18px;background:linear-gradient(90deg,rgba(63,216,194,.12),rgba(125,198,255,.10))}
  .nx.lt .deal .d{display:flex;align-items:baseline;gap:6px;font-size:17px;color:#1f9d62}
  .nx.lt .deal .d small{font-size:15px;color:#4b5562}
  .nx.lt .deal .d .n{font:600 34px/1 "Roboto",sans-serif;color:#1f9d62}
  .nx.lt .code{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 14px;border-radius:999px;border:1.5px dashed rgba(46,139,216,.5);background:rgba(125,198,255,.12);color:#2e8bd8;font:600 17px "Roboto",sans-serif}
  .nx.lt .code small{font:400 13px "Fb Reforma",sans-serif;color:#4b5562}
  .nx.lt p{color:#4b5562}
  .nx.lt .go{background:#12161f;color:#fff}
  .nx.lt .hint{color:rgba(18,22,31,.45)}
  .nx-tap{position:fixed;z-index:2147483004;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;background:rgba(255,255,255,.35);box-shadow:0 0 0 2px rgba(255,255,255,.7);pointer-events:none;animation:nxtap .7s ease-out forwards}
  @keyframes nxtap{0%{transform:scale(.3);opacity:1}100%{transform:scale(1.4);opacity:0}}
  `;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  const phone = innerWidth < 760;
  const TAG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3.5H19C19.8 3.5 20.5 4.2 20.5 5V11.5L11.5 20.5L3.5 12.5Z"/><circle cx="16" cy="8" r="1.4"/></svg>';
  const X = '<svg viewBox="0 0 24 24" fill="none"><path d="M7 7l10 10M17 7L7 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
  const ARR = '<svg viewBox="0 0 12 8" fill="none"><path d="M11 4H1M4 1L1 4L4 7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const dim = document.createElement("div"); dim.className = "nx-dim"; document.body.appendChild(dim);
  const LIGHT = phone && window.NXV === "light";
  const card = document.createElement("div"); card.className = "nx " + (phone ? "ph" : "dk") + (LIGHT ? " lt" : "");
  const COPY='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>';
  if (LIGHT) card.innerHTML = `<span class="grab"></span><button class="x" aria-label="סגירה">${X}</button>
    <span class="tag">${TAG}מבצע חדש</span>
    <div class="firm"><img src="/client-previews/antartrade/chat-notice/images/promotions/takeprofit-icon.png" alt=""><b>Take Profit Trader</b></div>
    <div class="deal"><span class="d"><small>עד</small><span class="n">50%</span>הנחה</span><span class="code"><small>קוד</small>ANTAR${COPY}</span></div>
    <p>50% הנחה לכל החיים על חשבון המבחן, וללא דמי הפעלה (<span class="en">$130</span>) לחשבון <span class="en">PRO</span></p>
    <a class="go" href="#">לפרטי המבצע${ARR}</a><span class="hint">לחיצה בכל מקום תסגור</span>`;
  else card.innerHTML = `${phone ? '<span class="grab"></span>' : ""}<button class="x" aria-label="סגירה">${X}</button>
    <span class="tag">${TAG}מבצע חדש</span>
    <div class="big"><span class="num">50%</span><span class="ttl">הנחה ב-<bdi>Take Profit</bdi></span></div>
    <p>50% הנחה לכל החיים על חשבון המבחן, וללא דמי הפעלה (<span class="en">$130</span>) לחשבון <span class="en">PRO</span></p>
    <a class="go" href="#">לפרטי המבצע${ARR}</a>${phone ? '<span class="hint">לחיצה בכל מקום תסגור</span>' : ""}`;
  document.body.appendChild(card);
  const fab = document.querySelector(".bot-fab");
  const badge = document.createElement("span"); badge.className = "nx-badge"; badge.textContent = "2"; document.body.appendChild(badge);
  const placeBadge = () => { const f = document.querySelector(".bot-fab").getBoundingClientRect(); badge.style.left = (f.left - 6) + "px"; badge.style.top = (f.top - 4) + "px"; };
  placeBadge(); addEventListener("scroll", placeBadge, { passive: true });
  /* the counter lives and hides with the bot: while the bot is away (top of the page) the counter is away too */
  const syncBadge = () => { const f = document.querySelector(".bot-fab"); badge.classList.toggle("away", !f || f.classList.contains("away")); placeBadge(); };
  setInterval(syncBadge, 150); syncBadge();
  const list = document.createElement("div"); list.className = "nx-list " + (phone ? "ph" : "dk");
  list.innerHTML = `<h4>התראות <small>2</small></h4>
    <div class="nx-it"><button class="x2" aria-label="סגירה">${X}</button><span class="k">${TAG}מבצע חדש</span><b><span class="n">50%</span> הנחה ב-<bdi>Take Profit</bdi></b><a href="#">לפרטי המבצע ←</a></div>
    <div class="nx-it"><button class="x2" aria-label="סגירה">${X}</button><span class="k">${TAG}עדכון בחברה</span><b>חוקי <bdi>Apex</bdi> עודכנו</b><a href="#">לדף החברה ←</a></div>`;
  document.body.appendChild(list);
  const tap = (x, y) => { const t = document.createElement("span"); t.className = "nx-tap"; t.style.left = x + "px"; t.style.top = y + "px"; document.body.appendChild(t); setTimeout(() => t.remove(), 800); };
  window.NX = {
    open() { if (phone) dim.classList.add("on"); requestAnimationFrame(() => card.classList.add("on")); },
    fold(x, y) {
      tap(x, y);
      const r = card.getBoundingClientRect(), f = document.querySelector(".bot-fab").getBoundingClientRect();
      card.style.setProperty("--fx", (f.left + f.width / 2 - (r.left + r.width / 2)) + "px");
      card.style.setProperty("--fy", (f.top + f.height / 2 - (r.top + r.height / 2)) + "px");
      card.classList.add("fold"); dim.classList.remove("on");
      setTimeout(() => { placeBadge(); badge.classList.add("on"); card.style.display = "none"; }, 560);
    },
    openList() { const f = document.querySelector(".bot-fab").getBoundingClientRect(); tap(f.left + f.width / 2, f.top + f.height / 2); setTimeout(() => list.classList.add("on"), 150); },
    closeOne() { const it = list.querySelectorAll(".nx-it")[1], b = it.querySelector(".x2").getBoundingClientRect(); tap(b.left + 14, b.top + 14); it.classList.add("gone"); setTimeout(() => { it.remove(); badge.textContent = "1"; list.querySelector("h4 small").textContent = "1"; }, 320); },
    closeList(x, y) { tap(x, y); list.classList.remove("on"); }
  };
})();
/* Live mode for the phone link: opens by itself and folds into the bot on any tap. The bot still opens the chat;
   the new notices wait at the top of the chat window, above the greeting, each with its own X. Opening the chat clears the counter. */
(() => {
  const css = `
  .nx-inchat{display:flex;flex-direction:column;gap:8px;margin:0 0 14px;direction:rtl;font-family:"Fb Reforma","Roboto",sans-serif;color:#eef3fa}
  .nx-inchat h5{margin:0 2px 2px;font-size:13px;font-weight:500;color:rgba(238,243,250,.55)}
  .nx-inchat .nx-it{background:rgba(125,198,255,.08);padding:12px 14px 12px 46px;gap:4px}
  .nx-inchat .nx-it .x2{background:rgba(255,255,255,.08)}`;
  const st0 = document.createElement("style"); st0.textContent = css; document.head.appendChild(st0);
  const card = document.querySelector(".nx"), badge = document.querySelector(".nx-badge"), src = document.querySelector(".nx-list");
  const items = [...src.querySelectorAll(".nx-it")].map(n => n.outerHTML);
  let st = "idle";
  setTimeout(() => { NX.open(); st = "open"; }, 2200);
  const strip = () => {
    const m = document.querySelector(".sa-msgs"); if (!m || !items.length) return;
    if (m.querySelector(".nx-inchat")) return;
    const box = document.createElement("div"); box.className = "nx-inchat";
    box.innerHTML = `<h5>התראות חדשות</h5>` + items.join("");
    m.prepend(box);
  };
  setInterval(() => { if (st === "chat") strip(); }, 250);
  document.addEventListener("click", e => {
    if (st === "open") { e.preventDefault(); e.stopPropagation(); NX.fold(e.clientX, e.clientY); st = "folded"; return; }
    const x = e.target.closest(".nx-inchat .x2");
    if (x) { e.preventDefault(); e.stopPropagation(); const it = x.closest(".nx-it"), all = [...it.parentNode.querySelectorAll(".nx-it")];
      items.splice(all.indexOf(it), 1); it.classList.add("gone");
      setTimeout(() => { const box = it.parentNode; it.remove(); if (!items.length && box) box.remove(); }, 320); return; }
    const r = document.querySelector(".bot-fab").getBoundingClientRect();
    const onBot = e.clientX > r.left - 10 && e.clientX < r.right + 10 && e.clientY > r.top - 10 && e.clientY < r.bottom + 10;
    if (st === "folded" && (onBot || e.target.closest(".nx-badge"))) {
      badge.classList.remove("on"); st = "chat";
      if (!e.target.closest(".bot-fab")) { e.preventDefault(); e.stopPropagation(); document.querySelector(".bot-fab").click(); }
    }
  }, true);
})();
