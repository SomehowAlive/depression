const hero = document.querySelector(".hero");
const illuminateBtn = document.querySelector("#illuminate");
const moon = document.querySelector(".moon");
const overlay = document.querySelector(".overlay");

illuminateBtn.onclick = () => {
  overlay.classList.add("full-moon");
  moon.classList.add("illuminated");
  setTimeout(() => {
    overlay.remove();
    hero.style.backgroundColor = "rgb(5, 20, 43)";
  }, 1000);
};
