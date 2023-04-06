let closeButton = document.querySelector('.close-button');
let hamburgerButton = document.querySelector('.hamburger-button');
let headerNav = document.querySelector('.header-nav');

hamburgerButton.addEventListener('click', function event() {
    headerNav.classList.toggle('nav-open');
    hamburgerButton.classList.toggle('nav-close');
    closeButton.classList.toggle('nav-open');
});

closeButton.addEventListener('click', function event() {
    headerNav.classList.toggle('nav-open');
    hamburgerButton.classList.toggle('nav-close');
    closeButton.classList.toggle('nav-open');
})