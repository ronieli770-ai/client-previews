/* Order Flow course page: the about "קרא עוד" and pausing moving parts off screen (the hero itself is hero.js, as on the full track page) */
(function () {
  /* ---------- about: the rest of Noam's story opens under "קרא עוד" ---------- */
  const btn = document.getElementById("aboutBtn"), more = document.getElementById("aboutMore");
  if (btn) btn.addEventListener("click", () => { const o = more.hidden; more.hidden = !o; btn.setAttribute("aria-expanded", o); btn.querySelector("span").textContent = o ? "הצג פחות" : "קרא עוד"; });

})();
/* anything that keeps moving (the tools band, the price card frame) pauses while it is off screen */
(function () {
  const io = new IntersectionObserver((es) => es.forEach((en) => en.target.classList.toggle("off", !en.isIntersecting)));
  document.querySelectorAll(".band, .pcard, #faq, #learn").forEach((el) => io.observe(el));
})();
/* outcomes timeline: the line fills with the scroll, each step lights as the line reaches it */
(function () {
  const tl = document.getElementById("tl"); if (!tl) return;
  const steps = [...tl.querySelectorAll(".tl-s")], vert = matchMedia("(max-width: 760px)");
  let on = false;
  new IntersectionObserver(([en]) => { on = en.isIntersecting; if (on) tick(); }, { rootMargin: "20% 0px" }).observe(tl);
  function tick() {
    const r = tl.getBoundingClientRect(), p = Math.max(0, Math.min(1, (innerHeight * .75 - r.top) / (r.height + innerHeight * .2)));
    tl.style.setProperty("--tp", p.toFixed(3));
    steps.forEach((s, i) => s.classList.toggle("on", p >= (vert.matches ? i / steps.length : i / (steps.length - 1)) - .001));
  }
  addEventListener("scroll", () => { if (on) requestAnimationFrame(tick); }, { passive: true });
})();
