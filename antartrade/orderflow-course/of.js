/* Order Flow course page: the about "קרא עוד" and pausing moving parts off screen (the hero itself is hero.js, as on the full track page) */
(function () {
  /* ---------- about: the rest of Noam's story opens under "קרא עוד" ---------- */
  const btn = document.getElementById("aboutBtn"), more = document.getElementById("aboutMore");
  if (btn) btn.addEventListener("click", () => { const o = more.hidden; more.hidden = !o; btn.setAttribute("aria-expanded", o); btn.querySelector("span").textContent = o ? "הציגו פחות" : "קראו עוד"; });

})();
/* anything that keeps moving (the tools band, the price card frame) pauses while it is off screen */
(function () {
  const io = new IntersectionObserver((es) => es.forEach((en) => en.target.classList.toggle("off", !en.isIntersecting)));
  document.querySelectorAll(".band, .pcard, #faq, #learn, .ups .uc").forEach((el) => io.observe(el));
})();
/* outcomes: once the row is 30% in view the line draws through all four steps in 1.2s, each card lights as the line reaches it */
(function () {
  const road = document.getElementById("road"); if (!road) return;
  const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) { road.classList.add("go"); io.disconnect(); } }, { threshold: .3 });
  io.observe(road);
})();
/* "מה תלמד בקורס": the second row of four takes the colours in reverse, a checkerboard rather than a repeat; one column keeps the plain turn so no two neighbours match */
(function () {
  const cards = [...document.querySelectorAll("#learn .gi")]; if (!cards.length) return;
  const C = ["c3", "c4", "c1", "c2"], one = matchMedia("(max-width: 760px)");
  function paint() {
    cards.forEach((el, i) => { el.classList.remove("c1", "c2", "c3", "c4"); el.classList.add(one.matches || i < 4 ? C[i % 4] : C[3 - (i % 4)]); });
  }
  paint(); one.addEventListener("change", paint);
})();
