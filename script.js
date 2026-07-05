/* ============================================
   Rathod Hair Art — Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------
     1. Scroll Reveal Animations
     Fades/slides elements with class "reveal"
     into view as user scrolls down the page.
  --------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target); // animate once only
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));


  /* ---------------------------------------------
     2. Active Nav Link on Scroll
     Highlights the nav link matching the section
     currently in view.
  --------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  function updateActiveNavLink() {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 120) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('border-b-2', 'border-primary', 'pb-1');
      link.classList.add('text-on-surface-variant');

      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('border-b-2', 'border-primary', 'pb-1');
        link.classList.remove('text-on-surface-variant');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink(); // run once on load


  /* ---------------------------------------------
     3. Smooth Scroll for Anchor Links
     Ensures clicking any nav/footer link smoothly
     scrolls to the target section.
  --------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Close mobile menu if open
          const mobileMenu = document.getElementById('mobile-menu');
          if (mobileMenu && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
          }
        }
      }
    });
  });


  /* ---------------------------------------------
     4. Mobile Menu Toggle
     Opens/closes the mobile nav when hamburger
     icon is tapped.
  --------------------------------------------- */
  const menuButton = document.querySelector('nav button.md\\:hidden');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }


  /* ---------------------------------------------
     5. Sticky Nav Background on Scroll
     Adds a stronger shadow/background once user
     scrolls past the hero section.
  --------------------------------------------- */
  const nav = document.querySelector('nav');

  function updateNavBackground() {
    if (nav) {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  }

  window.addEventListener('scroll', updateNavBackground);
  updateNavBackground();


  /* ---------------------------------------------
     6. Booking Button Placeholder Action
     Replace this with real booking logic
     (e.g. open a modal, redirect to booking page,
     or trigger a Calendly widget).
  --------------------------------------------- */
  const clickableEls = document.querySelectorAll('button, a');

  clickableEls.forEach((el) => {
    if (el.textContent.trim().toLowerCase().includes('book')) {
      el.addEventListener('click', (e) => {
        // TODO: Replace with actual booking flow
        console.log('Booking button clicked — connect this to your booking system.');
      });
    }
  });


  /* ---------------------------------------------
     7. Image Fade-In Once Loaded
     Ensures images appear smoothly rather than
     popping in abruptly.
  --------------------------------------------- */
  const allImages = document.querySelectorAll('img');

  allImages.forEach((img) => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
  });

});
