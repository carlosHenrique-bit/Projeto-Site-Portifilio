let buttonMenu = document.querySelector(".icone-menu");
let containerUl = document.querySelector(".container-menu");
let link = document.querySelectorAll(".link");
let iconeMenu = document.querySelector(".extra");

buttonMenu.addEventListener('click', function() {
  containerUl.classList.toggle('is-open')
  let aberto = buttonMenu.getAttribute("aria-expanded") === "true";
  buttonMenu.setAttribute("aria-expanded", !aberto)
  
  if(aberto) {
    iconeMenu.setAttribute("src", "./images/icon-menu.svg")
  }else {
    iconeMenu.setAttribute("src","./images/menu-fechado.svg"
    )
  }
})
