const hamburgerBtn = document.querySelector('.hamburger-button');
const menuMobile = document.querySelector('.menu-mobile');

window.addEventListener("resize", menuMobileHide);
window.addEventListener('DOMContentLoaded', () => { menuMobile.style['display'] = "" });
hamburgerBtn.addEventListener("click", menuMobileClick);

function menuMobileHide() {
    if (window.innerWidth > 1000 && hamburgerBtn.classList.contains('hamburger-active')) {
        document.body.classList.remove("scroll");
        hamburgerBtn.classList.remove("hamburger-active");
        menuMobile.classList.remove('menu-mobile-active');
        hamburgerBtn.setAttribute('aria-expanded', hamburgerBtn.classList.contains('hamburger-active'));
    }
}

function menuMobileClick() {
    hamburgerBtn.classList.toggle('hamburger-active');
    hamburgerBtn.setAttribute('aria-expanded', hamburgerBtn.classList.contains('hamburger-active'));
    menuMobile.classList.toggle('menu-mobile-active');
    document.body.classList.toggle('scroll');
    //menuMobile.scrollTop = 0;
}

