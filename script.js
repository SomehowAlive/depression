const illuminateBtn = document.querySelector("#illuminate");
const moon = document.querySelector(".moon");
const overlay = document.querySelector(".overlay");

illuminateBtn.onclick = () => {
  overlay.classList.add("full-moon");
  moon.classList.add("illuminated");
};
