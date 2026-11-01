/* shared: start the intro once fonts are in, the halo glow, the price ticking down */
(function () {
  const start = () => requestAnimationFrame(() => document.documentElement.classList.add("go"));
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => setTimeout(start, 120));

  document.addEventListener("pointermove", (e) => {
    const b = e.target.closest && e.target.closest(".btn-halo > span");
    document.querySelectorAll(".btn-halo > span").forEach((s) => { if (s !== b) { s.style.setProperty("--sx", "0px"); s.style.setProperty("--sy", "0px"); s.style.setProperty("--ga", "0"); } });
    if (!b) return;
    const r = b.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    b.style.setProperty("--sx", (x * 18).toFixed(1) + "px"); b.style.setProperty("--sy", (y * 14).toFixed(1) + "px"); b.style.setProperty("--ga", "1");
  });

  document.querySelectorAll("[data-count]").forEach((el) => {
    const from = +el.dataset.from, to = +el.dataset.count, delay = +(el.dataset.delay || 1000), dur = 1400;
    el.textContent = from.toLocaleString("en-US");
    setTimeout(() => {
      const t0 = performance.now();
      const step = (t) => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(from + (to - from) * e).toLocaleString("en-US"); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }, delay);
  });
})();
