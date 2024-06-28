let headerButton = document.querySelector(".header__button");
let nav = document.querySelector(".nav");

headerButton.addEventListener("click" , function(){
  nav.classList.toggle("nav-toggle");
})