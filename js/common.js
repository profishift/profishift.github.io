$(document).ready(function () {
    $('.header__line-1__bottomLineMenuTrigger').on('click', function () {
        if ($('.js-mobileMenu').css('display') == 'none') {
            $('.js-mobileMenu').toggle();
			$('.link__with-image img')[0].src="../image/icons/mobile-calc-icon.png";
            $(this).toggleClass("_expanded");
        } else {
            $('.js-mobileMenu').hide();
			$('.link__with-image img')[0].src="../image/header-calc.png";
            $(this).removeClass('_expanded');
        }
    });

    $('.slider-container').slick({
        dots: true
    });

    $('.mobile-reviews-block').slick();

    $('.mobile-slider-text').slick({
        arrows: true
    });

    $('.slider-container .slick-next').on('click', function () {
        $('.mobile-slider-text .slick-next').click();
    });
    $('.slider-container .slick-prev').on('click', function () {
        $('.mobile-slider-text .slick-prev').click();
    });

    $('#scroll-to-scheme').on('click', function (e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".where-block").offset().top - 100
        }, 1000);
    });
    $('#scroll-to-contacts').on('click', function (e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".leadform-block").offset().top - 100
        }, 1000);
    });

});
