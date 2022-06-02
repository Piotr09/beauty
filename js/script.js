const nav = document.querySelector(".header__nav");
const navLiItems = document.querySelectorAll(".header__nav ul li");
const activeBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");
const burgerButton = document.querySelector(".header__burger");

const showMobileMenu = () => {
  nav.classList.remove("hide-mobile-nav");
  nav.classList.add("show-mobile-nav");
  burgerButton.style.position = "fixed";
};

const hideMobileMenu = () => {
  nav.classList.remove("show-mobile-nav");
  nav.classList.add("hide-mobile-nav");
  closeBtn.classList.add("hide");
  activeBtn.classList.remove("hide");
  burgerButton.style.position = "absolute";
};

const burgerMenu = () => {
  nav.classList.toggle("active");
  burgerButton.classList.toggle("active");
  closeBtn.classList.toggle("hide");
  activeBtn.classList.toggle("hide");

  if (nav.classList.contains("active")) {
    showMobileMenu();
  } else {
    hideMobileMenu();
  }
};

navLiItems.forEach((item) => item.addEventListener("click", hideMobileMenu));
burgerButton.addEventListener("click", burgerMenu);
