// ========================================
// SCROLL ANIMATION
// ========================================

const sections = document.querySelectorAll(".section");
const sections = document.querySelectorAll(".section");

// observer used for section-level reveals
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // if this section contains a .reveal container, stagger its children
      const reveal = entry.target.querySelector('.reveal');
      if (reveal) {
        const children = Array.from(reveal.children);
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * 80}ms`;
        });
      }
    }
  });
}, { threshold: 0.18 });

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// ========================================
// NAVBAR ACTIVE LINK
// ========================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});

// Reveal observer for individual cards (project-card, skill) and reveal containers
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // optional pop effect for card-pop elements
      if (entry.target.classList.contains('project-card') || entry.target.classList.contains('skill')) {
        entry.target.classList.add('card-pop');
        setTimeout(() => entry.target.classList.add('show'), 20);
      }
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.project-card, .skill, .reveal > *').forEach(el => {
  el.classList.add('hidden');
  cardObserver.observe(el);
});

// Subtle pointer-based tilt for project cards (desktop)
const tiltCards = document.querySelectorAll('.project-card');
tiltCards.forEach(card => {
  let rect = null;
  const strength = 6; // degrees

  function onPointerMove(e){
    if (e.pointerType === 'touch') return;
    rect = rect || card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height/2) / rect.height) * strength; // rotateX
    const ry = ((x - rect.width/2) / rect.width) * -strength; // rotateY
    card.style.transform = `translateY(-8px) scale(1.02) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  function onPointerLeave(){
    rect = null;
    card.style.transform = '';
  }

  card.addEventListener('pointermove', onPointerMove);
  card.addEventListener('pointerleave', onPointerLeave);
  card.addEventListener('pointerup', onPointerLeave);
});
