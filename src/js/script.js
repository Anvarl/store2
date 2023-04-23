$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 6 ,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});
$('.mobile-btn').on('click', function () {
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header-menu').toggleClass('show-menu');
    $('.mobile-link').toggleClass('show-header-link');
});

$('.header-menu nav a').on('click', function () {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header-menu').removeClass('show-menu');
    $('.header-link').removeClass('show-header-link');
});
