
const menuHamburguer = document.getElementById("menu-hamburguer")


menuHamburguer.addEventListener("click", ()=>{
 //crie uma função que bloqueie o scroll da página enquanto estiver ativo
 document.body.classList.toggle("active")
 

})