import $ from './jquery-3.3.1.min';

let originalSrc;

$(".gallery img").on("mouseover", function() {
    originalSrc = $(".image > img").attr("src");
    $(".image > img").attr("src", $(this).attr("src"));
});

$(".gallery img").on("mouseout", function() {
    $(".image > img").attr("src", originalSrc);
});