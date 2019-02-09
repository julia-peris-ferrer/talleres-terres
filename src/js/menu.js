

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