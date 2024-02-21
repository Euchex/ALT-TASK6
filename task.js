const hamMenu = document.querySelector(".ham-menu");

const link = document.querySelector(".link");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  link.classList.toggle("active");
});