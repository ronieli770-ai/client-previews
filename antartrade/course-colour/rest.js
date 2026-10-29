/* Full course page, under the hero: video on click, folded lists, long quotes, header colour, gentle reveal */
(function () {
  /* the video loads only when asked for */
  document.querySelectorAll(".player[data-yt]").forEach((p) => p.addEventListener("click", () => {
    p.innerHTML = `<iframe src="https://www.youtube.com/embed/${p.dataset.yt}?autoplay=1&rel=0" title="סרטון הסבר על הקורס המלא" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  }, { once: true }));

  /* "show more" opens the rest of a folded list and goes away */
  document.querySelectorAll("[data-fold]").forEach((b) => b.addEventListener("click", () => {
    document.getElementById(b.dataset.fold).classList.remove("folded"); b.remove(); clamp();
  }));

  /* long student quotes fold after seven lines behind "קרא עוד" */
  function clamp() {
    document.querySelectorAll(".tc").forEach((c) => {
      if (c.dataset.done || c.offsetParent === null) return;
      c.dataset.done = 1; c.classList.add("clamp");
      const q = c.querySelector("blockquote"), rm = c.querySelector(".rm");
      if (q.scrollHeight > q.clientHeight + 4) { rm.hidden = false; rm.onclick = () => { c.classList.remove("clamp"); rm.remove(); }; }
      else c.classList.remove("clamp");
    });
  }
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(clamp);

  /* the header takes the colour of the section under it once the page scrolls */
  const hdr = document.querySelector(".hdr"), secs = [...document.querySelectorAll(".hero, .cs")];
  function tone() {
    const y = 40, s = secs.find((el) => { const r = el.getBoundingClientRect(); return r.top <= y && r.bottom > y; });
    const light = !!(s && s.classList.contains("lt"));
    hdr.classList.toggle("on", scrollY > 10); hdr.classList.toggle("light", light); hdr.classList.toggle("dark", !light);
  }
  addEventListener("scroll", tone, { passive: true }); tone();

  /* blocks fade in once as they arrive */
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px 10% 0px" });
  document.querySelectorAll("[data-rv]").forEach((el) => io.observe(el));
})();
