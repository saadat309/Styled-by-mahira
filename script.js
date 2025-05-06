// =========Animation

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.faded) {
          entry.target.classList.add("visible");
          entry.target.dataset.faded = "true";
        }
      });
    },
    { threshold: 0.1 }
  );

  faders.forEach((el) => appearOnScroll.observe(el));
});

function updateMainPadding() {
  const header = document.getElementById("site-header");
  const main = document.querySelector("main");
  if (header && main) {
    const headerHeight = header.offsetHeight;
    main.style.paddingTop = `${headerHeight}px`;
  }
}

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateMainPadding, 100);
});

window.addEventListener("load", updateMainPadding);
