//Crew Navbar active state based on which page you are on

let techNavAnchorElements = document.querySelectorAll('.techNavAnchor');

//formulas

techNavAnchorElements.forEach(element => {
    if(element.href.includes(windowPathName)) {
        element.classList.add('techNavAnchor-Active');
        /*element.lastChild.classList.add('techNavAnchor-Span-Active');*/
        element.lastChild.id = 'techNavAnchor-Span-Active';
    };
});