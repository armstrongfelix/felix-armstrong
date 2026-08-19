const navbarLinks = document.getElementById("navbar-links");
const hamburgerMenu = document.getElementById("hamburger-menu");
const links = document.querySelectorAll(".navbar-link");

function toggleNavbarLinks() {
  navbarLinks.classList.toggle("navbar-links-inactive");
}

hamburgerMenu.addEventListener("click", toggleNavbarLinks);
links.forEach((link) => {
    link.addEventListener("click", toggleNavbarLinks);
 });

//