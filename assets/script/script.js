const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");

const toTop = document.querySelector("#to-top");

const popup = document.querySelector("#popup");
const popupImg = document.querySelector("#popupImg");

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
});

const showPopup = (imageUrl) => {
  popupImg.src = imageUrl;
  popup.style.display = "flex";
  document.body.classList.add("popup-open");
};

popupImg.addEventListener("click", (event) => {
  event.stopPropagation();
});
  
const hidePopup = () => {
  popup.style.display = "none";
  document.body.classList.remove("popup-open");
};
