// Luma landing page — small progressive-enhancement behaviors

document.addEventListener('DOMContentLoaded', () => {

  /* Mobile nav toggle */
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.classList.toggle('is-active', isOpen);
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Scroll-reveal animations, respecting reduced-motion preference */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // slight stagger for elements revealed together
          setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  /* Language switcher */
  const langEn = document.getElementById('lang-en');
  const langPt = document.getElementById('lang-pt');

  function setLanguage(lang) {
    document.querySelectorAll('[data-en][data-pt]').forEach(element => {
      element.textContent = element.getAttribute(`data-${lang}`);
    });

    langEn.classList.toggle('active', lang === 'en');
    langPt.classList.toggle('active', lang === 'pt');
  }

  if (langEn && langPt) {
    langEn.addEventListener('click', () => setLanguage('en'));
    langPt.addEventListener('click', () => setLanguage('pt'));
  }

});
