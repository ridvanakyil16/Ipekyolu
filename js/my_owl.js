$(function() {

    $('.owl-carousel-one').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('.owl-carousel-two').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })


    $('.owl-carousel-three').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('.owl-carousel-four').owlCarousel({
        margin: 30,
        nav: false,
        dotsEach: true,
        responsive: {
            0: {
                items: 1,
                mouseDrag: true
            },
            700: {
                items: 2,
                mouseDrag: true
            },
            1000: {
                items: 3,
                mouseDrag: false
            }
        }
    })

    $('.owl-carousel-five').owlCarousel({
        margin: 0,
        nav: true,
        dots: false,
        mouseDrag: false,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1,
            },
        }
    })

    $('.owl-carousel-six').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            }
        }
    })
});