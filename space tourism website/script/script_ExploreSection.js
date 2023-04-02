//****Explore Button 

//Variable declarations//

let smallExploreContainer = document.querySelector('.exploreAnchorContainer');
let exploreContainerActive = document.querySelector('.exploreContainerActive');


//functions 

smallExploreContainer.addEventListener('mouseenter', function() {
    exploreContainerActive.classList.add('exploreContainerActive-Hover');
})

smallExploreContainer.addEventListener('mouseleave', function() {
    exploreContainerActive.classList.remove('exploreContainerActive-Hover');
});