/* The reviews close into a ball as the page scrolls: the strip of real reviews bends round,
   more rows of the same reviews fade in above and below, and the ball keeps turning slowly. Drag turns it. */
(function () {
  const sec = document.getElementById("students"), src = sec && sec.querySelector(".rb-src");
  if (!src) return;
  const R = [...src.querySelectorAll("figure")].map((f) => ({ t: f.querySelector("blockquote").textContent.trim(), n: f.querySelector("figcaption").textContent.trim() }));
  const N = R.length, TAU = Math.PI * 2;
  const view = sec.querySelector(".rb-view"), world = sec.querySelector(".rb-world"), track = sec.querySelector(".rball");
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const smooth = (v) => { v = clamp(v, 0, 1); return v * v * (3 - 2 * v); };
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let items = [], C = 0, Rad = 0, off = 0, vel = 0;

  function card(k) {
    const el = document.createElement("figure");
    el.className = `rb-card c${(k % 4) + 1}`;
    const q = document.createElement("blockquote"); q.textContent = R[k].t;
    const n = document.createElement("figcaption"); n.textContent = R[k].n;
    el.append(q, n);
    return el;
  }

  function build() {
    world.innerHTML = ""; items = [];
    const small = innerWidth < 760, W = small ? 270 : 340, H = small ? 300 : 320, gap = small ? 16 : 24;
    world.style.setProperty("--w", W + "px"); world.style.setProperty("--h", H + "px");
    C = N * (W + gap); Rad = C / TAU;
    for (let i = 0; i < N; i++) items.push({ el: card(i), sx: i * (W + gap), sy: 0, row: 0 });
    [[1, 12], [-1, 12], [2, 8], [-2, 8], [3, 4], [-3, 4]].forEach(([row, n], ri) => {
      for (let j = 0; j < n; j++) {
        const el = card((j * 5 + ri * 3 + 2) % N); el.setAttribute("aria-hidden", "true");
        items.push({ el, sx: (j + (row % 2 ? .5 : 0)) * (C / n), sy: row * (H + gap), row });
      }
    });
    items.forEach((it) => world.appendChild(it.el));
  }

  let down = false, lx = 0;
  view.addEventListener("pointerdown", (e) => { down = true; lx = e.clientX; vel = 0; view.setPointerCapture(e.pointerId); });
  view.addEventListener("pointermove", (e) => { if (!down) return; const dx = (e.clientX - lx) * 1.4; lx = e.clientX; off += dx; vel = dx; });
  view.addEventListener("pointerup", () => { down = false; });
  view.addEventListener("pointercancel", () => { down = false; });
  const wrap = (s) => ((s % C) + C * 1.5) % C - C / 2;

  function frame(dt) {
    const r = track.getBoundingClientRect();
    if (r.bottom < -50 || r.top > innerHeight + 50) return;
    const p = still ? 1 : clamp(-r.top / (r.height - innerHeight), 0, 1);
    const e = smooth((p - .08) / .72);
    if (!down) { if (Math.abs(vel) > .2) { off += vel; vel *= .93; } else if (!still) off -= dt * .04; }
    const Rb = Rad / Math.max(e, .0004);
    world.style.transform = `scale(${1 - (innerWidth < 760 ? .68 : .5) * e})`;
    items.forEach((it) => {
      const th = wrap(it.sx + off) / Rb, ph = it.sy / Rb, facing = Math.cos(th) * Math.cos(ph);
      it.el.style.transform = `translateZ(${-Rb}px) rotateY(${th}rad) rotateX(${-ph}rad) translateZ(${Rb}px)`;
      const ghost = it.row === 0 ? 1 : smooth((e - .3) / .45);
      const dim = clamp(.12 + .88 * Math.max(0, facing) ** 1.5, 0, 1);
      it.el.style.opacity = (ghost * (1 - e + e * dim)).toFixed(3);
    });
  }

  build();
  let rw = innerWidth;
  addEventListener("resize", () => { if (Math.abs(innerWidth - rw) > 40) { rw = innerWidth; build(); } });
  let last = performance.now();
  (function raf(now) { frame(Math.min(50, now - last)); last = now; requestAnimationFrame(raf); })(last);
})();
