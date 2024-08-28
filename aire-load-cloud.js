//hides all hero elements until building image is fully loaded, then reveals cloud and skyline

document.addEventListener("DOMContentLoaded", function() {
    // Select the .aire-hero_buildings element
    var heroBuildings = document.querySelector('.aire-hero_buildings');

    // Create an image element to track the loading of the background image
    var bgImage = new Image();
    bgImage.src = getComputedStyle(heroBuildings).backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    console.log(bgImage.src);
    
    // When the background image is fully loaded
    bgImage.onload = function() {
        fadeOutBackground(heroBuildings);
    };

    function fadeOutBackground(element) {
        element.style.transition = "background-color 2s ease";
        element.style.backgroundColor = "transparent";
    }
});