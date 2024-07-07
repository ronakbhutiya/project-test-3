const navBtn = document.querySelector(".nav-btn");
const mainContainer = document.querySelector(".main-container");
const deshboardContainer = document.querySelector(".deshboard-container");
navBtn.addEventListener("click", () => {
  deshboardContainer.classList.toggle("nav-display");
  mainContainer.classList.toggle("nav-display");
});
