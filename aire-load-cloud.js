//hides all hero elements until building image is fully loaded, then reveals cloud and skyline

window.addEventListener("load", function() {
    var heroBuildings = document.querySelector('.aire-hero_buildings');
    if (heroBuildings) {
        var bgImage = new Image();
        bgImage.src = getComputedStyle(heroBuildings).backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
        
        bgImage.onload = function() {
            fadeOutBackground(heroBuildings);
        };
    }

    function fadeOutBackground(element) {
        element.style.transition = "background-color 2s ease";
        element.style.backgroundColor = "transparent";
    }
});