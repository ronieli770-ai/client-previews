/* Order Flow course page: the hero's live footprint chart and DOM ladder, the about "קרא עוד", the grounds leaning with the mouse */
(function () {
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  /* phones: a lighter chart (wider cells, no numbers, one pixel ratio, 30 frames a second) that stops while off screen */
  const lite = matchMedia("(max-width: 760px), (pointer: coarse)").matches;
  const hero = document.querySelector(".hero"); let onScreen = true;
  new IntersectionObserver(([en]) => { const was = onScreen; onScreen = en.isIntersecting; if (onScreen && !was) requestAnimationFrame(draw); }).observe(hero);
  let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;

  /* ---------- footprint: each candle is a stack of price cells, bid x ask, tinted by which side was stronger ---------- */
  const cv = document.getElementById("fp"), ctx = cv.getContext("2d");
  const ROW = 15, COLW = lite ? 120 : 96, GAP = lite ? 34 : 22;
  let W, H, dpr, candles = [], price = 0, poc = {};
  function mk(o) {
    const n = 4 + Math.floor(rnd() * 6), dir = rnd() < .5 ? -1 : 1, lo = o - Math.floor(rnd() * 3), hi = lo + n, cells = [];
    for (let p = lo; p <= hi; p++) { const mid = 1 - Math.abs((p - lo) / n - .5) * 1.6, b = Math.round(20 + rnd() * 380 * mid), a = Math.round(20 + rnd() * 380 * mid); cells.push({ p, b, a }); poc[p] = (poc[p] || 0) + a + b; }
    const c = dir > 0 ? hi - Math.floor(rnd() * 2) : lo + Math.floor(rnd() * 2);
    return { lo, hi, o, c, cells, grow: 0 };
  }
  function seedCandles(n) { for (let i = 0; i < n; i++) { const c = mk(price); candles.push(c); price = c.c + Math.round((rnd() - .48) * 2); } }
  function size() {
    dpr = lite ? 1 : Math.min(2, devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const need = Math.ceil(W / (COLW + GAP)) + 2; if (candles.length < need) seedCandles(need - candles.length);
  }
  seedCandles(18); size(); addEventListener("resize", size);
  const rr = (x, y, w, h, r) => { ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, w, h, r) : ctx.rect(x, y, w, h); };
  let shift = 0, t0 = null, last = 0, prev = 0;
  function draw(t) {
    if (!onScreen) return;
    if (lite && t - prev < 33) { requestAnimationFrame(draw); return; } prev = t;
    if (t0 === null) t0 = t; const intro = Math.min(1, (t - t0) / 2200), e = 1 - Math.pow(1 - intro, 3);
    ctx.clearRect(0, 0, W, H);
    const step = COLW + GAP, n = Math.ceil(W / step) + 1, vis = candles.slice(-n - 1);
    let lo = Infinity, hi = -Infinity; vis.forEach((c) => { lo = Math.min(lo, c.lo); hi = Math.max(hi, c.hi); });
    const mid = (lo + hi) / 2, Y = (p) => H * .5 - (p - mid) * ROW * Math.min(1, (H * .62) / ((hi - lo + 2) * ROW));
    const rh = Math.max(9, ROW * Math.min(1, (H * .62) / ((hi - lo + 2) * ROW)) - 2);
    ctx.font = "500 10px Roboto, sans-serif"; ctx.textBaseline = "middle";
    const shown = Math.ceil(vis.length * e);
    for (let i = 0; i < shown; i++) {
      const c = vis[i], x = i * step - shift + 40, live = i === vis.length - 1, g = live ? c.grow : 1;
      const cells = live ? c.cells.slice(0, Math.max(1, Math.ceil(c.cells.length * g))) : c.cells;
      const up = c.c >= c.o, fade = Math.min(1, Math.max(0, (x + COLW) / 200)) * Math.min(1, Math.max(0, (W - x) / 160));
      ctx.globalAlpha = fade;
      cells.forEach((k) => {
        const y = Y(k.p) - rh / 2, d = (k.a - k.b) / (k.a + k.b), v = Math.min(1, (k.a + k.b) / 600);
        const col = d >= 0 ? `rgba(63,216,194,${(.05 + v * .28 * Math.abs(d) + .04).toFixed(3)})` : `rgba(97,177,242,${(.05 + v * .28 * Math.abs(d) + .04).toFixed(3)})`;
        ctx.fillStyle = col; rr(x, y, COLW, rh, 3); ctx.fill();
        /* imbalance: a strong side draws a thin bright edge */
        if (Math.abs(d) > .55 && v > .3) { ctx.fillStyle = d > 0 ? "rgba(63,216,194,.75)" : "rgba(125,198,255,.75)"; ctx.fillRect(d > 0 ? x + COLW - 2 : x, y + 1, 2, rh - 2); }
        if (!lite && rh >= 11) { ctx.fillStyle = "rgba(255,255,255,.38)"; ctx.textAlign = "right"; ctx.fillText(k.b, x + COLW / 2 - 6, y + rh / 2 + .5); ctx.textAlign = "left"; ctx.fillText(k.a, x + COLW / 2 + 6, y + rh / 2 + .5); ctx.fillStyle = "rgba(255,255,255,.16)"; ctx.textAlign = "center"; ctx.fillText("x", x + COLW / 2, y + rh / 2); }
      });
      /* body outline from open to close */
      const yo = Y(c.o), yc = Y(live ? c.cells[cells.length - 1].p : c.c);
      ctx.strokeStyle = up ? "rgba(63,216,194,.55)" : "rgba(125,198,255,.5)"; ctx.lineWidth = 1.2;
      rr(x - 3, Math.min(yo, yc) - rh / 2 - 2, COLW + 6, Math.abs(yc - yo) + rh + 4, 6); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    /* volume profile on the right edge, the point of control lit */
    const ps = Object.keys(poc).map(Number).filter((p) => p >= lo - 1 && p <= hi + 1), mx = Math.max(...ps.map((p) => poc[p]));
    ps.forEach((p) => { const w = (poc[p] / mx) * 150 * e, y = Y(p) - rh / 2, top = poc[p] === mx;
      ctx.fillStyle = top ? "rgba(63,216,194,.55)" : "rgba(125,198,255,.13)"; rr(W - 30 - w, y, w, rh, 3); ctx.fill(); });
    if (!still && intro >= 1) {
      const live = vis[vis.length - 1];
      if (live.grow < 1) live.grow = Math.min(1, live.grow + .004);
      else if (t - last > 1600) { last = t; const c = mk(price); c.grow = .05; candles.push(c); price = c.c + Math.round((rnd() - .48) * 2); }
      if (live.grow >= 1) { shift += lite ? .7 : .35; if (shift >= step) { shift -= step; candles.shift(); } }
    }
    requestAnimationFrame(draw);
  }
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => setTimeout(() => requestAnimationFrame(draw), 150));

  /* ---------- DOM ladder: resting size each side of the price, the levels near the price trade and change ---------- */
  const dom = document.getElementById("dom");
  if (dom) {
    let base = 21452.25; const L = 11, rows = [];
    for (let i = 0; i < L; i++) { const r = document.createElement("div"); r.className = "dr"; r.innerHTML = '<i class="bi"></i><i class="ai"></i><span class="b"></span><span class="p"></span><span class="a"></span>'; dom.appendChild(r); rows.push(r); }
    const sz = () => Math.round(8 + rnd() * 140);
    const data = rows.map(() => ({ b: sz(), a: sz() }));
    function paint() {
      rows.forEach((r, i) => {
        const p = base + (Math.floor(L / 2) - i) * .25, above = i < Math.floor(L / 2), at = i === Math.floor(L / 2), d = data[i];
        r.classList.toggle("mid", at);
        r.querySelector(".p").textContent = p.toFixed(2);
        r.querySelector(".b").textContent = above ? "" : d.b; r.querySelector(".a").textContent = above || at ? d.a : "";
        if (at) r.querySelector(".b").textContent = d.b;
        r.querySelector(".bi").style.width = above ? "0" : Math.min(48, d.b / 3.2) + "%";
        r.querySelector(".ai").style.width = above || at ? Math.min(48, d.a / 3.2) + "%" : "0";
      });
    }
    paint();
    if (!still) setInterval(() => { if (!onScreen) return;
      const k = Math.floor(L / 2) + Math.round((rnd() - .5) * 4); if (data[k]) { data[k].a = sz(); data[k].b = sz(); rows[k].classList.add("hit"); setTimeout(() => rows[k].classList.remove("hit"), 380); }
      if (rnd() < .22) { base += rnd() < .5 ? .25 : -.25; data.unshift(data.pop()); }
      paint();
    }, 650);
  }

  /* ---------- about: the rest of Noam's story opens under "קרא עוד" ---------- */
  const btn = document.getElementById("aboutBtn"), more = document.getElementById("aboutMore");
  if (btn) btn.addEventListener("click", () => { const o = more.hidden; more.hidden = !o; btn.setAttribute("aria-expanded", o); btn.querySelector("span").textContent = o ? "הצג פחות" : "קרא עוד"; });

  /* ---------- the chart and the grid lean slightly with the mouse ---------- */
  const tex = document.querySelector(".hero .tex");
  if (matchMedia("(hover: hover)").matches) addEventListener("pointermove", (e) => { const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    cv.style.transform = `translate3d(${-x * 30}px,${-y * 18}px,0)`; tex.style.transform = `translate3d(${-x * 12}px,${-y * 7}px,0)`; });
})();
/* anything that keeps moving (the tools band, the price card frame) pauses while it is off screen */
(function () {
  const io = new IntersectionObserver((es) => es.forEach((en) => en.target.classList.toggle("off", !en.isIntersecting)));
  document.querySelectorAll(".band, .pcard, #faq, #learn").forEach((el) => io.observe(el));
})();
