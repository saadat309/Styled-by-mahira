document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  if (!main) return;

  // HEADER HTML
  const headerHTML = `
      <header role="banner" id="site-header">
        <nav class="desktop-nav fade-in" aria-label="Main navigation">
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="portfolio.html">Portfolio</a>
          <a href="notes.html">Notes</a>
        </nav>
        <a href="index.html" class="fade-in">
          <img src="assets/icons/logo.webp" alt="Mahira's Brand logo" />
        </a>
        <div class="start-btn fade-in" aria-hidden="true">
          <a href="contact.html">Get Started</a>
        </div>
        <label class="hamburger-menu fade-in" aria-label="Open menu">
          <input type="checkbox" aria-label="Toggle menu" />
        </label>
        <aside class="sidebar" aria-label="Mobile menu">
          <nav class="sidebar-nav">
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="notes.html">Notes</a>
          </nav>
          <a href="contact.html">Get Started</a>
        </aside>
      </header>
    `;

  // FOOTER HTML
  const footerHTML = `
      <footer>
        <div class="footer-sections">
          <section class="news-letter fade-in">
            <div>
              <p>JOIN THE STYLE LIST</p>
              <span><em>for tips &amp; updates</em></span>
            </div>

            <form id="form" action="submit.php" method="POST">
              <div>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>

              <button type="submit">Add me!</button>
            </form>

            <div class="socials">
              <svg
                class="instagram"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
              <svg
                class="facebook"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                />
              </svg>
              <svg
                class="linkedin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                />
              </svg>
            </div>
          </section>
          <section class="explore fade-in">
            <p>EXPLORE</p>
            <div>
              <a href="about.html">About</a>
              <a href="services.html">Services</a>
              <a href="portfolio.html">Portfolio</a>
              <a href="faqs.html">FAQs</a>
              <a href="notes.html">Notes</a>
              <a href="contact.html">Contact</a>
            </div>
          </section>
          <section class="gmail fade-in">
            <div>
              <p>EMPOWERING <i>Women</i></p>
              <p>TRANSFORMING <i>Wardrobe</i></p>
              <p>
                Styled by Mahira offers personal styling and wardrobe
                transformation services for women seeking confidence and
                authentic style in Austin, Texas, and across the US.
              </p>
            </div>

            <a href="mailto:manto03090@gmail.com">contact@styledbymahira.com</a>
          </section>
        </div>
        <p class="foot-note fade-in">
          &copy; 2025 Stayed by Mahira. All rights reserved.
        </p>
      </footer>
    `;

  // Utility: parse HTML string to DOM element
  function parseHTML(html) {
    const temp = document.createElement("div");
    temp.innerHTML = html.trim();
    return temp.firstElementChild;
  }

  // Inject header as first child of <main>
  const headerEl = parseHTML(headerHTML);
  main.insertBefore(headerEl, main.firstChild);

  // Inject footer as last child of <main>
  const footerEl = parseHTML(footerHTML);
  main.appendChild(footerEl);

  // Highlight the active navbar link
  const navLinks = document.querySelectorAll(
    "nav.desktop-nav a, nav.sidebar-nav a"
  );
  const currentPage = window.location.pathname.split("/").pop(); // Get the current page's filename

  navLinks.forEach((link) => {
    if (link.href.includes(currentPage)) {
      link.classList.add("active"); // Add active class to the matching link
    }
  });
});
