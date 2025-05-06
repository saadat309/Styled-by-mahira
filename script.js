function updateMainPadding() {
    const header = document.getElementById("site-header");
    const main = document.querySelector("main");
    if (header && main) {
      const headerHeight = header.offsetHeight;
      main.style.paddingTop = `${headerHeight}px`;
    }
  }

  // Run on page load and on resize
  window.addEventListener("load", updateMainPadding);
  window.addEventListener("resize", updateMainPadding);