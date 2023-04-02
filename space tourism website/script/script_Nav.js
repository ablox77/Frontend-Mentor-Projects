//****Open and close nav bar

//Variable declarations

let hamburgerAnchor = document.querySelector('.hamburgerAnchor');
let headerNav = document.querySelector('.headerNav');
let listCloseIcon = document.querySelector('.listCloseIcon');
let navCloseIcon = document.querySelector('.navCloseIcon');

//functions

function openNavBar() {
    hamburgerAnchor.addEventListener('click', function event() {
        if (!headerNav.classList.contains("openNavBar")) {
            headerNav.classList.add('openNavBar');
        } 
    })
}

function closeNavBar() {
    navCloseIcon.addEventListener('click', function event() {
        if (headerNav.classList.contains("openNavBar")) {
            headerNav.classList.remove('openNavBar');
        }
    })
}

openNavBar();
closeNavBar();



//****Nav Bar active state based on which page you are on

//variable declarations

//Nav anchors
let homeNavAncor = document.querySelector('#homeNavAncor');
let destinationNavAncor = document.querySelector('#destinationNavAncor');
let crewNavAncor = document.querySelector('#crewNavAncor');
let technologyNavAncor = document.querySelector('#technologyNavAncor');
let activePageNavAnchor = document.querySelector('.activePageNavAnchor')

let navAnchorElements = document.querySelectorAll('.navAnchor');
let windowPathName = window.location.pathname;

//formulas

/*navAnchorElements.forEach(element => {
    if(element.href.includes(windowPathName)) {
        element.nextElementSibling.classList.add('activePageNavAnchor-Scrolling')
    }
});*/

navAnchorElements.forEach(element => {
    if(element.href.includes(windowPathName)) {
        element.nextElementSibling.classList.add('activePageNavAnchor-Scrolling')
    } else if(windowPathName.includes("destination") && element.href.includes("destination")) {
        element.nextElementSibling.classList.add('activePageNavAnchor-Scrolling')
    } else if(windowPathName.includes("crew") && element.href.includes("crew")) {
        element.nextElementSibling.classList.add('activePageNavAnchor-Scrolling')
    } else if(windowPathName.includes("technology") && element.href.includes("technology")) {
        element.nextElementSibling.classList.add('activePageNavAnchor-Scrolling')
    }
});