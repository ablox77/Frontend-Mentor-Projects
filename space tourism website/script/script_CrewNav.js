//Crew Navbar active state based on which page you are on

let crewNavAnchorElements = document.querySelectorAll('.crewNavAnchor');

//formulas

crewNavAnchorElements.forEach(element => {
    if(element.href.includes(windowPathName)) {
        element.classList.add('crewNavAnchor-Active');
    };
});