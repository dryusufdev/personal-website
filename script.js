/* =========================================================
   Amir Yusuf - shared interactions
   typing headline · nav · fade-up. Static, lightweight.
   ========================================================= */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Shared social footer - fill any footer that doesn't already have one
     statically (home + gallery ship it inline; this keeps the other pages
     consistent without duplicating the icon markup across files). */
  var FOOTER_INNER = `
      <nav class="social" aria-label="Social links">
        <a aria-label="GitHub" href="https://github.com/dryusufdev" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
        <a aria-label="YouTube" href="https://www.youtube.com/@amirbuca" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/></svg></a>
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/dryusufdev/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg></a>
        <a aria-label="Instagram" href="https://www.instagram.com/amirr1x_/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
        <a aria-label="Spotify" href="https://open.spotify.com/playlist/6rPrB8Su6VBqoALZSoPi0Z?si=kABpWzBbRhOE1TDEf7ScpQ" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.561-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.561.3z"/></svg></a>
        <a aria-label="TikTok" href="https://www.tiktok.com/@chatgptwarrior67" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
        <a aria-label="Email" href="mailto:may23@fsu.edu"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/></svg></a>
      </nav>
      <span class="footer-copy">© <span id="year">2026</span> Amir Yusuf. All rights reserved.</span>`;
  document.querySelectorAll('.footer .footer-inner').forEach(function (fi) {
    if (!fi.querySelector('.social')) fi.innerHTML = FOOTER_INNER;
  });

  /* Footer year (every page) */
  document.querySelectorAll('#year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Experience durations: read data-start / data-end ("YYYY-MM" or "present"),
     compute inclusive calendar months (LinkedIn-style), and format naturally.
     "present" roles recalculate from the current month, so they stay accurate. */
  function formatDuration(startStr, endStr) {
    var s = String(startStr).split('-');
    var sy = parseInt(s[0], 10), sm = parseInt(s[1], 10);
    var ey, em;
    if (String(endStr).toLowerCase() === 'present') {
      var now = new Date();
      ey = now.getFullYear();
      em = now.getMonth() + 1;
    } else {
      var e = String(endStr).split('-');
      ey = parseInt(e[0], 10); em = parseInt(e[1], 10);
    }
    var months = (ey - sy) * 12 + (em - sm) + 1; // inclusive of both endpoints
    if (!isFinite(months) || months < 1) months = 1;
    var yrs = Math.floor(months / 12), mos = months % 12, parts = [];
    if (yrs > 0) parts.push(yrs + ' ' + (yrs === 1 ? 'yr' : 'yrs'));
    if (mos > 0) parts.push(mos + ' ' + (mos === 1 ? 'mo' : 'mos'));
    if (parts.length === 0) parts.push('1 mo');
    return parts.join(', ');
  }
  document.querySelectorAll('.xp-date[data-start]').forEach(function (el) {
    var out = el.querySelector('.xp-dur');
    if (out) out.textContent = formatDuration(el.getAttribute('data-start'), el.getAttribute('data-end'));
  });

  /* Mobile nav */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll'); // release scroll lock
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      // lock page scroll while the fullscreen mobile panel is open
      document.body.classList.toggle('no-scroll', open);
    });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }

  /* Nav background on scroll (home starts transparent) */
  var nav = document.querySelector('.nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 12); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Typing headline (character-by-character; caret stays inline) */
  function initTypewriter() {
    const typeEl = document.querySelector('.type[data-text]');
    if (!typeEl) return;

    const output = typeEl.querySelector('.type-out');
    if (!output) return;

    const text = typeEl.getAttribute('data-text') || '';

    output.textContent = '';

    let index = 0;
    const speed = 85;
    const startDelay = 450;

    window.setTimeout(function typeNext() {
      output.textContent = text.slice(0, index + 1);
      index += 1;

      if (index < text.length) {
        window.setTimeout(typeNext, speed);
      }
    }, startDelay);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTypewriter);
  } else {
    initTypewriter();
  }

  /* Lightbox (gallery) */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lbImg = document.getElementById('lightboxImg');
    var lbCap = document.getElementById('lightboxCap');
    var lbLoc = document.getElementById('lightboxLoc');
    var lbClose = document.getElementById('lightboxClose');
    var lastFocused = null;

    function openLightbox(trigger) {
      var full = trigger.getAttribute('data-full');
      var innerImg = trigger.querySelector('img');
      lbImg.src = full;
      lbImg.alt = innerImg ? innerImg.alt : (trigger.getAttribute('data-caption') || '');
      lbCap.textContent = trigger.getAttribute('data-caption') || '';
      var loc = trigger.getAttribute('data-loc') || '';
      lbLoc.textContent = loc;
      lbLoc.style.display = loc ? '' : 'none';
      lastFocused = trigger;
      lightbox.classList.add('open');
      document.body.classList.add('no-scroll');
      lbClose.focus();
    }
    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.classList.remove('no-scroll');
      lbImg.src = '';
      if (lastFocused) lastFocused.focus();
    }

    document.querySelectorAll('[data-full]').forEach(function (t) {
      t.addEventListener('click', function () { openLightbox(t); });
    });
    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
  }

  /* Live site previews: lazy-load iframes; keep fallback if they don't load */
  var previews = document.querySelectorAll('.site-preview');
  if (previews.length && 'IntersectionObserver' in window) {
    var pio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var sp = entry.target;
        pio.unobserve(sp);
        var frame = sp.querySelector('.sp-frame');
        var iframe = sp.querySelector('iframe');
        if (!iframe || !iframe.getAttribute('data-src')) return;
        var settled = false;
        var fail = setTimeout(function () { settled = true; }, 8000); // fallback stays
        iframe.addEventListener('load', function () {
          if (settled) return;
          settled = true; clearTimeout(fail);
          frame.classList.add('loaded');
        });
        iframe.addEventListener('error', function () { clearTimeout(fail); });
        iframe.src = iframe.getAttribute('data-src');
      });
    }, { rootMargin: '300px' });
    previews.forEach(function (p) { pio.observe(p); });
  }

  /* Fade up on load / scroll */
  var fades = document.querySelectorAll('.fade');
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    fades.forEach(function (el) { if (!el.classList.contains('in')) io.observe(el); });
  } else {
    fades.forEach(function (el) { el.classList.add('in'); });
  }

  /* First-load identity moment (home only): fast, skippable, once per session,
     and skipped entirely under reduced motion. Never blocks navigation. */
  var intro = document.getElementById('intro');
  if (intro) {
    var introSeen = false;
    try { introSeen = sessionStorage.getItem('introSeen') === '1'; } catch (e) {}
    if (reduced || introSeen) {
      if (intro.parentNode) intro.parentNode.removeChild(intro);
    } else {
      try { sessionStorage.setItem('introSeen', '1'); } catch (e) {}
      intro.hidden = false;
      var introDone = false;
      var dismissIntro = function () {
        if (introDone) return;
        introDone = true;
        intro.classList.add('done');
        setTimeout(function () { if (intro && intro.parentNode) intro.parentNode.removeChild(intro); }, 650);
        window.removeEventListener('pointerdown', dismissIntro);
        window.removeEventListener('keydown', dismissIntro);
        window.removeEventListener('wheel', dismissIntro);
      };
      setTimeout(dismissIntro, 1300);            // auto fade-out
      window.addEventListener('pointerdown', dismissIntro, { passive: true });
      window.addEventListener('keydown', dismissIntro);
      window.addEventListener('wheel', dismissIntro, { passive: true });
    }
  }

  /* Gentle scroll parallax on the crooked collage cards (desktop only).
     JS only writes the --py custom property; CSS composes it with the
     card's rotation/offset, so hover and entrance still work. */
  var collage = document.querySelector('.home-collage');
  if (collage && !reduced && window.matchMedia('(min-width: 601px)').matches) {
    var pcards = Array.prototype.slice.call(collage.querySelectorAll('.photo-card'));
    var pfactor = pcards.map(function (_, i) { return (i % 2 === 0 ? -1 : 1) * (0.02 + (i % 3) * 0.012); });
    var pTick = false;
    var applyParallax = function () {
      var rect = collage.getBoundingClientRect();
      var delta = rect.top + rect.height / 2 - window.innerHeight / 2;
      for (var i = 0; i < pcards.length; i++) {
        var py = Math.max(-14, Math.min(14, delta * pfactor[i] * -1));
        pcards[i].style.setProperty('--py', py.toFixed(1) + 'px');
      }
      pTick = false;
    };
    window.addEventListener('scroll', function () {
      if (!pTick) { pTick = true; window.requestAnimationFrame(applyParallax); }
    }, { passive: true });
    applyParallax();
  }
})();
