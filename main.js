const menuHamburguer = document.querySelector("#menu-hamburguer");
const menuContainer = document.querySelector(".menu-hamburguer-elements");
const root = document.querySelector("#root");

window.addEventListener("scroll", () => {

  if (menuHamburguer.checked) {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }
});
