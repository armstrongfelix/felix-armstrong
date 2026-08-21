const navbarLinks = document.getElementById("navbar-links");
const hamburgerMenu = document.getElementById("hamburger-menu");
const links = document.querySelectorAll(".navbar-link");
const themeSelect = document.getElementById("theme-select");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeSelect.value = theme;
}

const savedTheme = localStorage.getItem("portfolio-theme") || "system";
applyTheme(savedTheme);

themeSelect.addEventListener("change", (event) => {
  const theme = event.target.value;
  localStorage.setItem("portfolio-theme", theme);
  applyTheme(theme);
});

systemTheme.addEventListener("change", () => {
  if (document.documentElement.dataset.theme === "system") {
    applyTheme("system");
  }
});

function toggleNavbarLinks() {
  navbarLinks.classList.toggle("navbar-links-inactive");
}

hamburgerMenu.addEventListener("click", toggleNavbarLinks);
links.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      toggleNavbarLinks();
    }
  });
});
