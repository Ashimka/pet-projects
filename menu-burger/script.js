const menuClass = document.querySelector(".navbar__menu");
const burgerButton = document.querySelector(".nav__burger");
const body = document.querySelector("body");

const menuCollapse = () => {
  menuClass.classList.toggle("nav__collapse");
  burgerButton.classList.toggle("burger");
  body.classList.toggle("lock");
};

burgerButton.addEventListener("click", menuCollapse);

const hideMenu = () => {
  if (menuClass.classList.contains("nav__collapse")) {
    menuClass.classList.remove("nav__collapse");
    burgerButton.classList.remove("burger");
    body.classList.remove("lock");
  }
};

menuClass.addEventListener("click", hideMenu);
