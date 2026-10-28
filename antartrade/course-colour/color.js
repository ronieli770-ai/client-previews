/* Colourful version: colours handed round the containers, staggered reveals, cursor light, scroll parallax */
(function () {
  const C = ["c1", "c2", "c3", "c4"];
  /* each group of containers takes the four colours in turn */
  ["#for .aud", "#students .tc", "#two .crs", "#outcomes .out"].forEach((sel, g) =>
    document.querySelectorAll(sel).forEach((el, i) => el.classList.add(C[(i + g) % 4])));
  /* the hero stats are all sky; syllabus containers stay sky and only their number and tag change colour */
  document.querySelectorAll(".stat").forEach((el) => el.classList.add("c2"));
  document.querySelectorAll(".mod2").forEach((el, i) => el.classList.add(`n${(i % 4) + 1}`));
  /* soft blurred lights behind the audience section, smaller flashes behind the FAQ */
  ["#for", "#faq"].forEach((id) => { const s = document.querySelector(id); if (s) s.insertAdjacentHTML("afterbegin", '<span class="glowbg r c4"></span><span class="glowbg l c1"></span><span class="glowbg m c3"></span>'); });


  /* a soft blurred light behind each audience icon */
  document.querySelectorAll("#for .aud .ic").forEach((ic) => ic.insertAdjacentHTML("beforebegin", '<span class="halo" aria-hidden="true"></span>'));

  /* siblings arrive one after another */
  document.querySelectorAll(".tri, .tgrid, .duo, .mods2, .quad, .feats").forEach((p) =>
    [...p.children].forEach((el, i) => { el.setAttribute("data-rv", ""); el.classList.remove("in"); el.style.setProperty("--sd", `${Math.min(i, 8) * (p.matches(".tri") ? 0.18 : 0.08)}s`); }));
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll("[data-rv]:not(.in)").forEach((el) => io.observe(el));

  /* light follows the cursor inside the cards */
  if (matchMedia("(hover: hover)").matches) document.querySelectorAll(".cs .box, .mod2, .stat").forEach((el) => {
    el.classList.add("lit");
    el.addEventListener("pointermove", (e) => { const r = el.getBoundingClientRect(); el.style.setProperty("--mx", `${e.clientX - r.left}px`); el.style.setProperty("--my", `${e.clientY - r.top}px`); });
  });

  /* the big course numbers and the giant word move at their own pace */
  const nums = [...document.querySelectorAll("#two .bignum")], giant = document.querySelector("#about .giant");
  let ticking = false;
  function par() {
    ticking = false;
    /* the numbers only ever rise: still while the card is low, lifting away from the title once it passes the middle of the screen */
    nums.forEach((n, i) => { const r = n.parentElement.getBoundingClientRect(); n.style.setProperty("--py", `${-Math.max(0, innerHeight * 0.6 - r.top) * (i ? 0.14 : 0.1)}px`); });
    if (giant) { const r = giant.parentElement.getBoundingClientRect(); giant.style.setProperty("--gx", `${(innerHeight - r.top) * 0.6 - 500}px`); }
  }
  /* behind the testimonials: the blurred brain-bulb marks, as on the blog page - out in the side margins, partly cut by the edge,
     two while the list is folded, four once it opens; each turns a few degrees as it crosses the screen */
  const FEW = [{ s: "r", x: -150, at: 0.3, w: 360, rot: 14 }, { s: "l", x: -110, at: 0.72, w: 300, rot: -21 }];
  const ALL = [{ s: "r", x: -150, at: 0.16, w: 360, rot: 14 }, { s: "l", x: -110, at: 0.37, w: 300, rot: -21 }, { s: "r", x: -95, at: 0.6, w: 280, rot: -9 }, { s: "l", x: -165, at: 0.84, w: 380, rot: 26 }];
  const stu = document.getElementById("students"), RATIO = 491 / 394;
  let marks = [], set = FEW;
  function placeMarks() {
    if (!stu) return;
    stu.querySelectorAll(".bmark").forEach((m) => m.remove());
    const h = stu.offsetHeight;
    marks = set.map((m) => {
      const mh = m.w * RATIO, top = Math.max(40, Math.min(m.at * h - mh / 2, h - mh - 60));
      const img = document.createElement("img");
      img.className = "bmark"; img.src = "bg-brain-dark.svg"; img.alt = ""; img.setAttribute("aria-hidden", "true");
      img.style.cssText = `top:${top}px;${m.s === "r" ? "right" : "left"}:${m.x}px;width:${m.w}px;`;
      img.dataset.rot = m.rot; stu.prepend(img); return img;
    });
    turn();
  }
  function turn() { marks.forEach((el) => { const r = el.getBoundingClientRect(); const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - innerHeight / 2) / innerHeight)); el.style.transform = `rotate(${(+el.dataset.rot - p * 12).toFixed(2)}deg)`; }); }
  placeMarks();
  document.querySelector('[data-fold="tgrid"]')?.addEventListener("click", () => { set = ALL; setTimeout(placeMarks, 60); });
  addEventListener("resize", placeMarks);
  addEventListener("scroll", () => requestAnimationFrame(turn), { passive: true });

  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) { addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(par); } }, { passive: true }); par(); }
})();

/* round 11: sticky header, the video rising over the hero, phone carousel for the testimonials, folding syllabus on phones, back to top */
(function () {
  const phone = matchMedia("(max-width: 760px)");

  /* the hero stays pinned once its bottom reaches the screen, so the video section slides up over it */
  const hero = document.querySelector(".hero");
  const pin = () => { if (hero) hero.style.top = Math.min(0, innerHeight - hero.offsetHeight) + "px"; };
  pin(); addEventListener("resize", pin);

  /* phones: the testimonials become a strip that drifts slowly; a finger can stop it, swipe and read, it resumes after a pause */
  const grid = document.getElementById("tgrid");
  if (grid && phone.matches) {
    grid.classList.remove("folded"); grid.classList.add("strip");
    document.querySelector('[data-fold="tgrid"]')?.remove();
    const cards = [...grid.children];
    cards.forEach((c) => { const k = c.cloneNode(true); k.setAttribute("aria-hidden", "true"); grid.appendChild(k); });
    grid.querySelectorAll(".rm").forEach((b) => b.addEventListener("click", () => b.closest(".tc").classList.remove("clamp")));
    let hold = 0, x = 0;
    const halt = () => { hold = performance.now() + 3500; };
    ["pointerdown", "touchstart", "wheel"].forEach((ev) => grid.addEventListener(ev, halt, { passive: true }));
    grid.addEventListener("scroll", () => { if (performance.now() < hold) x = grid.scrollLeft; }, { passive: true });
    (function step(t) {
      const half = grid.scrollWidth / 2;
      if (t > hold) { x += 0.35; if (x >= half) x -= half; grid.scrollLeft = x; }
      else if (grid.scrollLeft >= half) { grid.scrollLeft -= half; x = grid.scrollLeft; }
      requestAnimationFrame(step);
    })(0);
  }

  /* phones: each syllabus topic shows its title and summary; the four points open with the + like the FAQ */
  if (phone.matches) document.querySelectorAll(".mod2").forEach((m) => {
    m.classList.add("fold");
    const b = document.createElement("button"); b.type = "button"; b.className = "pm"; b.setAttribute("aria-label", "פירוט הנושא"); b.setAttribute("aria-expanded", "false");
    m.querySelector(".top").appendChild(b);
    m.addEventListener("click", (e) => { if (e.target.closest("a")) return; const o = m.classList.toggle("open"); b.setAttribute("aria-expanded", o); });
  });

  /* back to top: appears after a short scroll, its ring fills with the page progress */
  const top = document.querySelector(".sc-top"), ring = top && top.querySelector(".pg");
  if (top) {
    const tick = () => { const y = scrollY, max = document.documentElement.scrollHeight - innerHeight; top.classList.toggle("show", y > 500); ring.setAttribute("stroke-dashoffset", (194.8 * (1 - (max > 0 ? Math.min(1, y / max) : 0))).toFixed(1)); };
    addEventListener("scroll", () => requestAnimationFrame(tick), { passive: true }); tick();
    top.addEventListener("click", () => (window.lenis ? window.lenis.scrollTo(0) : scrollTo({ top: 0, behavior: "smooth" })));
  }
})();
