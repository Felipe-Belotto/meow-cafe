const menuHamburguer = document.querySelector("#menu-hamburguer");
const menuContainer = document.querySelector(".menu-hamburguer-elements");
const root = document.querySelector("#root");

let startY = 0;

menuContainer.addEventListener("touchstart", (event) => {
  startY = event.touches[0].clientY;
});

menuContainer.addEventListener("touchmove", (event) => {
  const currentY = event.touches[0].clientY;
  const deltaY = currentY - startY;

  if (deltaY > 0) {
    menuHamburguer.checked = false;
  }
});

menuContainer.addEventListener("mousedown", (event) => {
  startY = event.clientY;
});

menuContainer.addEventListener("mousemove", (event) => {
  const currentY = event.clientY;
  const deltaY = currentY - startY;

  if (deltaY > 0) {
    menuHamburguer.checked = false;
  }
});
