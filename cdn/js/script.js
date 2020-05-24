(function ($) {
    'use strict';

    $(window).on('load', function () {
        $('.preloader').fadeOut(700);
    });

    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    $('.hero-slider').slick({
        autoplay: true,
        infinite: true,
        arrows: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
        dots: false,
        autoplaySpeed: 7000,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    $('.hero-slider').slickAnimation();


})(jQuery);