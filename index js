// ========================================
// SCROLL ANIMATION
// ========================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.2
});

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
