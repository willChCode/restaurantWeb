/*PREV MENU, NEXT MENU */
// const prevMenu = document.querySelector(".prevBM");
// const nextMenu = document.querySelector(".nextBM");
// const menuListas = document.querySelector(".card2-contenido");

// prevButtom.addEventListener("click", () => {
//     menuListas.scrollLeft -= 200
// });
// nextButtom.addEventListener("click", () => {
//     menuListas.scrollLeft += 200
// });
const prevMenu = document.querySelector(".prevBM");
const nextMenu = document.querySelector(".nextBM");
const menuListas = document.querySelector(".card2-contenido");

prevMenu.addEventListener("click", () => {
    menuListas.scrollLeft -= 200
});
nextMenu.addEventListener("click", () => {
    menuListas.scrollLeft += 200
});

/*menuhdjsd */
const menuLinks = document.querySelector(".menu-nav-link");
