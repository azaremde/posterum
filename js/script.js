$(document).ready(function() {
    // Значение false вместо true отключит анимацию.
    var smoothFadeIn = true;                    // Включить плавное появление элементов на странице?
    var mainScreenParticlesMovement = true;     // Включить движение частиц на главном экране?

    /* Плавное появление элементов на странице. */
    if(smoothFadeIn) {
        $(document).ready(function() {
            $('.toFadeIn').addClass("hidden").viewportChecker({
                classToAdd: 'animated fadeIn visible',
                offset: 0
            });
        });
    }
    /* Плавное появление элементов на странице. */

    /* <header> Перемещение частиц на главном экране. */
    if(mainScreenParticlesMovement) {
        var last_position = {},
        $output       = $('#output');
        
        $(document).on('mousemove', function (event) {
            var dotes = [$('.dot:nth-child(1)'), $('.dot:nth-child(2)'), $('.dot:nth-child(3)')];
            var deltaX, deltaY;
            var sensivity = 0.05;
        
            if (typeof(last_position.x) != 'undefined') {        
                deltaX = (last_position.x - event.clientX) * sensivity;
                deltaY = (last_position.y - event.clientY) * sensivity;
            }
        
            for(var i = 0; i < dotes.length; i++) {
                dotes[i].css({
                    'right' : (parseInt(dotes[i].css('right')) + deltaX) + 'px',
                    'top' : (parseInt(dotes[i].css('top')) - deltaY)  + 'px'
                });
            }
        
            last_position = {
                x : event.clientX,
                y : event.clientY
            };
        });
    }
    /* </header> Перемещение частиц на главном экране. */

    /* <div class="products"> Галерея работ. */
    var galleryButtons = [
        document.getElementById('gallery-button-1'),
        document.getElementById('gallery-button-2'),
        document.getElementById('gallery-button-3'),
        document.getElementById('gallery-button-4')
    ];

    var slides = [
        document.getElementsByClassName('product__image--slide-1'),
        document.getElementsByClassName('product__image--slide-2'),
        document.getElementsByClassName('product__image--slide-3'),
        document.getElementsByClassName('product__image--slide-4')
    ];

    var textes = [
        document.getElementsByClassName('product__title--slide-1'),
        document.getElementsByClassName('product__title--slide-2'),
        document.getElementsByClassName('product__title--slide-3'),
        document.getElementsByClassName('product__title--slide-4')
    ];

    var chosenPicture = 1;

    for(var i = 0; i < galleryButtons.length; i++) {
        $(galleryButtons[i]).click(function() {
            $(galleryButtons[chosenPicture - 1]).toggleClass('gallery-button--active');
            chosenPicture = parseInt(this.id.replace('gallery-button-', ''));
            $(galleryButtons[chosenPicture - 1]).toggleClass('gallery-button--active');

                for(var slideIndex = 0; slideIndex < slides.length; slideIndex++) {
                    $(slides[slideIndex]).css({
                        'transform' : 'rotateY(-180deg)',
                        'transition' : '0.5s',
                        'z-index' : '-1'
                    });
                    $(textes[slideIndex]).css({
                        'display' : 'none'
                    });

                    if(slideIndex == chosenPicture - 1) {
                        $(slides[slideIndex]).css({
                            'transform' : 'rotateY(0)',
                            'transition' : '0.5',
                            'z-index' : '1'
                        });
                        $(textes[slideIndex]).css({
                            'display' : 'block'
                        });
                    }
            }
        });
    }
    /* </div class="products"> Галерея работ. */

    /* <div class="tasks"> Выбор радио-боксов. */
    var checkboxes = document.getElementsByClassName('option');
    
    for(var i = 0; i < checkboxes.length; i++) {
        $(checkboxes[i]).hover(function() {
            $(this).toggleClass('option--hovered');            
        });

        $(checkboxes[i]).click(function() {
            $(this).toggleClass('option--active');
        });
    }
    /* </div> Выбор радио-боксов. */

    /* <div class="question"> Анимация вопросов и ответов. */
    var questions = document.getElementsByClassName('question');

    for(var i = 0; i < questions.length; i++) {
        $(questions[i]).click(function() {
            $(this).toggleClass('question--active');
        })
    }
    /* </div> Анимация вопросов и ответов. */

    /* <footer> Скролл-ап, футер. */
    var bottomUp = $('.footer__button');

    bottomUp.click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
    /* </footer> Скролл-ап, футер. */
});