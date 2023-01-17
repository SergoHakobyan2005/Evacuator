new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    // simulateTouch: false,
    watchOverflow: true,    
    scrollbar: true,
    // grabCursor: true,
    // slidesPerGroup: 3,
    loopedSlides: 3,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        invert: false,
        sensitivity: 5,
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            // slidesPerGroup: 1,

        },
        800: {
            slidesPerView: 2,
            // slidesPerGroup: 1,

        },
        1300: {
            slidesPerView: 3,
        }
    }
});