const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");

if (toggle && header) {
  toggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
}

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("nav-open");
  });
});

const revealItems = document.querySelectorAll(
  ".hero-copy, .hero-visual, .kit-photo, .section-copy, .giveaway-copy, .giveaway-visual, .product-card, .features article"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
