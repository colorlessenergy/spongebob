var toggleNav = document.querySelector(".toggle-nav");

function toggleMenu(x) {
  x.classList.toggle("change");
  toggleNav.classList.toggle("hide-nav");
  toggleNav.classList.toggle("show-nav")
}
