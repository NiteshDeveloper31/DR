/* ==========================================================================
   AAROGYA ONE - Core Main JavaScript Engine
   Line-1 Global Mobile Menu Toggle, Real Indian Doctor Photos, 3D Tilt Cards
   ========================================================================== */

// Defined at Line 1 for 100% Instant Execution from HTML onclick / ontouchstart
window.toggleMobileMenu = function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  if (drawer && backdrop) {
    const isActive = drawer.classList.contains('active');
    if (isActive) {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
   * 0. Real HD Indian Doctor Photo Fallback URLs
   * ------------------------------------------------------------------------ */
  const realIndianFemaleDoctorPhoto = 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80';
  const realIndianMaleDoctorPhoto = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80';
  const realIndianHospitalPhoto = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80';

  document.addEventListener('error', (e) => {
    if (e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'img') {
      const alt = (e.target.alt || '').toLowerCase();
      if (alt.includes('ananya') || alt.includes('priya') || alt.includes('sunita') || alt.includes('female')) {
        e.target.src = realIndianFemaleDoctorPhoto;
      } else if (alt.includes('dr') || alt.includes('rajesh') || alt.includes('vikram') || alt.includes('suresh') || alt.includes('doctor')) {
        e.target.src = realIndianMaleDoctorPhoto;
      } else {
        e.target.src = realIndianHospitalPhoto;
      }
    }
  }, true);

  /* ------------------------------------------------------------------------
   * 1. Custom Desktop Cursor
   * ------------------------------------------------------------------------ */
  const initCursor = () => {
    if (window.innerWidth <= 991) return;

    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'custom-cursor-dot';
    ring.className = 'custom-cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let cursorX = 0, cursorY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      dot.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
    });

    const renderCursor = () => {
      ringX += (cursorX - ringX) * 0.15;
      ringY += (cursorY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursor);
    };
    renderCursor();

    const hoverables = document.querySelectorAll('a, button, input, select, .tilt-card, .accordion-header');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  };

  initCursor();

  /* ------------------------------------------------------------------------
   * 2. Smooth Page Transitions
   * ------------------------------------------------------------------------ */
  const initPageTransitions = () => {
    let curtain = document.querySelector('.page-transition-curtain');
    if (!curtain) {
      curtain = document.createElement('div');
      curtain.className = 'page-transition-curtain';
      curtain.innerHTML = `
        <div style="text-align: center; color: white;">
          <div style="font-size: 1.5rem; font-weight: 800; letter-spacing: -0.03em;">AAROGYA<span style="color: #10B981;">ONE</span></div>
          <div style="font-size: 0.85rem; opacity: 0.8; margin-top: 0.2rem;">India's Healthcare Technology Platform</div>
        </div>
      `;
      document.body.appendChild(curtain);
    }

    curtain.classList.add('animating-out');
    setTimeout(() => {
      curtain.classList.remove('animating-out');
    }, 600);

    const links = document.querySelectorAll('a[href$=".html"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetUrl = link.getAttribute('href');
        if (!targetUrl || targetUrl.startsWith('#') || targetUrl.startsWith('http')) return;

        e.preventDefault();
        curtain.classList.add('animating-in');
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 500);
      });
    });
  };

  initPageTransitions();

  /* ------------------------------------------------------------------------
   * 3. Sticky Navbar & Mobile Drawer Event Handlers
   * ------------------------------------------------------------------------ */
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const backdrop = document.querySelector('.drawer-backdrop');
  const drawerClose = document.querySelector('.drawer-close');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => window.toggleMobileMenu(e));
    mobileToggle.addEventListener('touchstart', (e) => window.toggleMobileMenu(e), { passive: false });
  }
  if (backdrop) {
    backdrop.addEventListener('click', (e) => window.toggleMobileMenu(e));
    backdrop.addEventListener('touchstart', (e) => window.toggleMobileMenu(e), { passive: false });
  }
  if (drawerClose) {
    drawerClose.addEventListener('click', (e) => window.toggleMobileMenu(e));
    drawerClose.addEventListener('touchstart', (e) => window.toggleMobileMenu(e), { passive: false });
  }

  /* ------------------------------------------------------------------------
   * 4. IntersectionObserver Scroll Reveal & Counter Animations
   * ------------------------------------------------------------------------ */
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        if (entry.target.classList.contains('counter-value')) {
          animateCounter(entry.target);
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-element, .reveal-left, .reveal-right, .reveal-scale, .counter-value').forEach(el => {
    revealObserver.observe(el);
  });

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 1800;
    const stepTime = 20;
    const steps = duration / stepTime;
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
    }, stepTime);
  }

  /* ------------------------------------------------------------------------
   * 5. 3D Tilt Card Interaction
   * ------------------------------------------------------------------------ */
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  /* ------------------------------------------------------------------------
   * 6. Accordion FAQ Component
   * ------------------------------------------------------------------------ */
  const accordions = document.querySelectorAll('.accordion-item');
  accordions.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      accordions.forEach(acc => acc.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

});
