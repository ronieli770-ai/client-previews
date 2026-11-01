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
