/*MENU MOBILE DSPEGABLE*/
const navToggle = document.querySelector(".nav-toggle");
const menuNav = document.querySelector(".menu-nav");

navToggle.addEventListener("click", () => {
    menuNav.classList.toggle("menu-nav_visible");
});

/*PREV CLIENTE ,NEXT CLIENTE*/
const prevButtom = document.querySelector(".prevB");
const nextButtom = document.querySelector(".nextB");
const cajaPerfil = document.querySelector(".cliente-caja");

prevButtom.addEventListener("click", () => {
    cajaPerfil.scrollLeft -= 200
});

nextButtom.addEventListener("click", () => {
    cajaPerfil.scrollLeft +=200
});