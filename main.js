/* ============================================
   SUMIT KUMAR — PORTFOLIO MAIN JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Active Nav Link ── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  /* ── Hamburger Menu ── */
  const ham = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (ham && mobileNav) {
    ham.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  /* ── Scroll Fade-Up Animation ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Skill Bar Animation ── */
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
          bar.style.animationDelay = `${i * 0.1}s`;
          bar.style.animationPlayState = 'running';
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skill-block').forEach(block => {
    block.querySelectorAll('.skill-bar-fill').forEach(bar => {
      bar.style.animationPlayState = 'paused';
    });
    barObserver.observe(block);
  });

  /* ── Contact Form ── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        form.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
      }, 1200);
    });
  }

  /* ── Typed Effect on Hero (optional) ── */
  const typedEl = document.getElementById('typed');
  if (typedEl) {
    const words = ['Data Analyst', 'MIS Specialist', 'Automation Expert', 'Excel & Apps Script Dev'];
    let wi = 0, ci = 0, deleting = false;
    function type() {
      const word = words[wi];
      if (!deleting) {
        typedEl.textContent = word.slice(0, ++ci);
        if (ci === word.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        typedEl.textContent = word.slice(0, --ci);
        if (ci === 0) {
          deleting = false;
          wi = (wi + 1) % words.length;
        }
      }
      setTimeout(type, deleting ? 55 : 90);
    }
    type();
  }

  /* ── Smooth Reveal for Page Banner ── */
  const banner = document.querySelector('.page-banner');
  if (banner) {
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(16px)';
    banner.style.transition = 'opacity .5s ease, transform .5s ease';
    setTimeout(() => {
      banner.style.opacity = '1';
      banner.style.transform = 'none';
    }, 80);
  }
});
