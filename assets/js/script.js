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

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    header?.classList.remove("nav-open");

    const headerHeight = header?.offsetHeight ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    const scrollTop = Math.max(targetTop - headerHeight, 0);

    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });

    window.history.pushState(null, "", targetId);
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
