import $ from 'jquery';
global.jQuery = $;

require('flexslider');
//import 'cookieconsent';

window.addEventListener("load", function(){
    var menu=document.querySelector(".menu");
    var background=document.querySelector(".background");

    background.addEventListener('click', function() {
        background.style.display="none";
        menu.classList.remove("shown");
    });

    document.querySelector("#menu-button").addEventListener("click", function(){
        background.style.display="block";
        menu.classList.add("shown");
    });

    $('.flexslider').flexslider({
        animation: "fade"
    });

    /*cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#e0e0e0",
                "text": "#2c2c2c"
            },
            "button": {
                "background": "rgb(75, 188, 224)",
                "text": "#ffffff"
            }
        },
        "theme": "classic",
        "content": {
            "message": "Uso de cookies: utilizamos cookies propias y de terceros con fines funcionales y analíticos. Si continuas navegando acepta su uso.",
            "dismiss": "Aceptar",
            "link": "Más información"
        }
    });*/
});