import $ from './jquery-3.3.1.min';

$(window).on('load', function() {
    let carousel = document.getElementById('carousel');
    let imgs = carousel.querySelectorAll('img');
    let index = 0;
    let currentImage = null;
    let currentCircle = null;
    let timeoutId;
    let winWidth = window.innerWidth;

    let circles = document.createElement('div');
    circles.className = 'circles';
    carousel.appendChild(circles);

    for(let i = 0; i < imgs.length; i++) {
        let circle = document.createElement('span');
        $(circle).on('click', () => moveToImage(i, 6000));
        circles.appendChild(circle);

        imgs[i].style.transform = `translateX(${winWidth}px)`;
    }

    function moveToImage(index, time) {
        clearTimeout(timeoutId);
        let winWidth = window.innerWidth;
        
        if (currentImage) {
            let deletedImage = currentImage;
            deletedImage.style.transform = `translateX(-${winWidth}px)`;
            setTimeout(() => {
                deletedImage.style.visibility = 'hidden';
                deletedImage.style.transform = `translateX(${winWidth}px)`;
                deletedImage.style.zIndex = '0';
            }, 400);

            currentCircle.removeClass('selected');
        }

        let img = imgs[index];
        img.style.transform = 'translateX(0)';
        img.style.visibility = 'visible';
        currentImage = img;

        setTimeout(() => {
            img.style.zIndex = '1';
        }, 400);

        currentCircle = $(circles.children[index]);
        currentCircle.addClass('selected');

        let nextIndex = (index + 1) % imgs.length;
        timeoutId = setTimeout(() => moveToImage(nextIndex), time || 2000);
    }

    moveToImage(0);
});
