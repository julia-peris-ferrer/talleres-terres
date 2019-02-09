import $ from 'jquery';
import 'flexslider';
import 'cookieconsent';
import './menu';

window.addEventListener("load", function(){
    /*
    $('.flexslider').flexslider({
      animation: "fade"
    });
    */
    cookieconsent.initialise({
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
    })
});