document.querySelector("#home").style.backgroundSize = "100% 100%";

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const toTop = document.querySelector("#to-top");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    return toTop.classList.add("active");
  }
  toTop.classList.remove("active");
})
