(() => {
  const toc = document.querySelector('.jr-toc');
  if (!toc) return;

  const links = Array.from(toc.querySelectorAll('a[href^="#"]'));
  if (!links.length) return;

  const entries = links
    .map((link) => {
      const id = decodeURIComponent(link.getAttribute('href').slice(1));
      const heading = document.getElementById(id);
      return heading ? { link, heading } : null;
    })
    .filter(Boolean);

  if (!entries.length) return;

  const clearActive = () => {
    links.forEach((link) => {
      link.classList.remove('jr-toc-active');
      link.removeAttribute('aria-current');
    });
  };

  const setActive = (activeLink) => {
    clearActive();
    if (!activeLink) return;
    activeLink.classList.add('jr-toc-active');
    activeLink.setAttribute('aria-current', 'true');
  };

  let ticking = false;
  const update = () => {
    ticking = false;
    const offset = Math.min(window.innerHeight * 0.28, 220);
    let current = entries[0];

    for (const entry of entries) {
      const top = entry.heading.getBoundingClientRect().top;
      if (top - offset <= 0) current = entry;
      else break;
    }

    setActive(current.link);
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
})();
