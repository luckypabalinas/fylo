const menu = document.querySelector(".hamburger");
const menuLink = document.querySelector(".nav-menu");
const navLogo = document.querySelector(".nav-logo");

const hamburger = () => {
    menu.classList.toggle('is-active')
    menuLink.classList.toggle('active')
};

menu.addEventListener('click', hamburger);

const hideHamburger = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLink.classList.remove('active');
    }
}

menuLink.addEventListener('click', hideHamburger);
navLogo.addEventListener('click', hideHamburger);
