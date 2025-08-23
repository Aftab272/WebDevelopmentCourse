// ===== Helper: DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSmoothScroll();
  initReveal();
  initSkillBars();
  initTyping();
  initScrollToTop();
  setYear();
  initContactForm();
  initNavbarActive();
});

// ===== Theme (Dark/Light) =====
function initTheme() {
  const body = document.body;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  toggle?.addEventListener('click', () => {
    const cur = body.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    const icon = toggle?.querySelector('i');
    if (!icon) return;
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
  document.querySelectorAll('.navbar .nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
      const collapse = document.getElementById('navmenu');
      if (collapse?.classList.contains('show')) {
        new bootstrap.Collapse(collapse).hide();
      }
    });
  });
}

// ===== Reveal on Scroll =====
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== Skill Bars Animation =====
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = bar.style.getPropertyValue('--level') || '0%';
        bar.style.width = level;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
}

// ===== Typing Effect in Hero =====
function initTyping() {
  const el = document.getElementById('typing');
  if (!el) return;
  const words = ["Web Developer", "MERN Learner", "Frontend Enthusiast"];
  let wi = 0, ci = 0, typing = true;

  function tick() {
    const word = words[wi];
    if (typing) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { typing = false; setTimeout(tick, 1200); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { typing = true; wi = (wi + 1) % words.length; }
    }
    setTimeout(tick, typing ? 70 : 40);
  }
  tick();
}

// ===== Scroll To Top =====
function initScrollToTop() {
  const btn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 320) btn.classList.add('show');
    else btn.classList.remove('show');
  });
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== Footer Year =====
function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

// ===== Contact Form (demo) =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("✅ Message sent! I'll get back to you soon.");
    form.reset();
  });
}

// ===== Active Nav Highlight =====
function initNavbarActive() {
  const links = document.querySelectorAll('.navbar .nav-link[href^="#"]');
  const sections = [...links].map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

  function setActive() {
    const pos = window.scrollY + 120;
    for (const section of sections) {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const link = document.querySelector(`.navbar .nav-link[href="#${section.id}"]`);
      if (pos >= top && pos < bottom) {
        links.forEach(l => l.classList.remove('active'));
        link?.classList.add('active');
        break;
      }
    }
  }
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
}
