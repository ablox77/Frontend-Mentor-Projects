//Planet Navbar active state based on which page you are on

let planetNavAnchorElements = document.querySelectorAll('.planetNavAnchor');

//formulas

planetNavAnchorElements.forEach(element => {
    if(element.href.includes(windowPathName)) {
        element.nextElementSibling.classList.add('planetActivePageNavAnchor-Scrolling');
    };
});