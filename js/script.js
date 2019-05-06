$(document).ready(function() {
    var windowHeight = $(window).height();
    var mouseWheelDelta = 0;
    var currentHeight = 0;
    var currentScreen = 0;

    $('body').css({
        'overflow' : 'hidden'
    });

    $('.screen').css({
        'height' : '100vh'
    });

    window.addEventListener("wheel", event => {
        const delta = Math.sign(event.deltaY);
        mouseWheelDelta += delta;
        if(mouseWheelDelta > 5) {
            $('body, html').animate({
                scrollTop: currentHeight + windowHeight
            }, 800);
            currentHeight += windowHeight;
            currentScreen = currentHeight / windowHeight;
            mouseWheelDelta = 0;
        }
        console.log(mouseWheelDelta);
        if(mouseWheelDelta < -5) {
            $('body, html').animate({
                scrollTop: currentHeight - windowHeight
            }, 800);
            currentHeight -= windowHeight;
            currentScreen = currentHeight / windowHeight;
            mouseWheelDelta = 0;
        }
    });
});