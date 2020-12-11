const mySwiper = new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     // clickable: true,
    //     // type: 'bullets',
    //     // // dynamicBullets неочень
    //     // // dynamicBullets: true,
    //     // renderBullet: function (index, className) {
    //     //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     // },
    //     type: 'fraction',
    //     renderFraction: function (currentClass, totalClass) {
    //         return 'Изображение <span class="' + currentClass + '"></span>' +
    //             ' из ' +
    //             '<span class="' + totalClass + '"></span>';
    //     },
    // },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true,
    //     dragClass: 'swiper-scrollbar-drag'
    // },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.image-slider'
    },
    autoHeight: true,
    slidesPerView: 3,
    // Авто указывается только в том случае если конкретно указаны размеры сладов
    // slidesPerView: auto,
    // slidesPerView: 2.5,
    spaceBetween: 20,

    // slidesPerGroup: 1,

    // centeredSlides: true,

    // Стартовый слайд c Нуля
    // initialSlide: 1,

    // slidesPerColumn: 2,

    // C безсконечным режимомо не работает скролл и разделение на колонки
    // loop: true,
    // Интересный эффект в связке со скроллом мышкой, с автоВысотой багается
    // freeMode: true,
    // autoplay: {
    //     delay: 1000,
    //     stopOnLastSlide: true,
    //     disableOnInteraction: false
    // },
    // Скорость переключения слайдов
    speed: 700,
    // Нужно указывать высоту для вертикального слайдера свайпер контейнеру
    // direction: 'vertical',

    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // }

    // effect: 'flip',
    // flipEffect: {
    //     slideShadows: true,
    //     limitRotation: true
    // }

    // Нужно задавть ширину свапйпер контейнеру
    // effect: 'cube',

    // cubeEffect: {
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94
    // }

    // effect: 'coverflow',

    // coverFlowEffect: {
    //     rotate: 20,
    //     stretch: 50,
    //     slideShadows: true
    // }
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //         slidesPerView: 2,
    //         spaceBetween: 30
    //     },
    //     // when window width is >= 992px
    //     992: {
    //         slidesPerView: 2,
    //         spaceBetween: 40
    //     }
    // },


    preloadImages: false,
    lazy: {
        // Подгружать следующую картинку за показаной
        loadPrevNext: false,
        // Подгружать на старте анимации трансформа
        loadOnTransitionStart: false,
    },
    // Слежка за видимыми сладйами
    watchSlidesProgress: true,
    // Добавление класса видимым слайдам
    watchSlidesVisibility: true,


    // Для зума нужны плагины
    // zoom: {
    //     maxRatio: 5,

    //     minRatio: 1
    // }


    // Миниатюры(превью)
    // thumbs: {
    //     swiper: {
    //         el: '.image-mini-slider',
    //         slidesPerView: 5,
    //         mousewheel: {
    //             sensitivity: 1,
    //             eventsTarget: '.image-mini-slider'
    //         },
    //         spaceBetween: 7,
    //     },
    // }

    // Настройка для решения проблем с табами
    observer: true,

    // Обновить свайпер при изменение родителя
    observeParents: true,

    observeSlideChildren: true,

    // Если слайды приходят с сервера
    // virtual: {
    //     slides: (function () {
    //         let slide = [];
    //         for (let i = 0; i < 500; i++) {
    //             slide.push(`<div class="image-slider__text">Сдайдер№${i}</div>`)
    //         }
    //         return slide;
    //     }()),
    // }

    // доступность 
    // a11y: {
    //     enabled: true,
    //     prevSlideMessage: 'Previous slide',
    //     nextSlideMessage: 'Next slide',
    //     firstSlideMessage: 'This is the first slide',
    //     lastSlideMessage: 'This is the last slide',
    // }

});

// Инициализируем новый слайдер в слайдере
// const inSlider = new Swiper('.image-in-slider', {
//     grabCursor: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     // Отвязка от родительского слайдра указываем вложженость
//     nested: true,

// });


const textSwiper = new Swiper('.text-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
});

mySwiper.controller.control = textSwiper;
textSwiper.controller.control = mySwiper;


const sliderBlock = document.querySelector('.image-slider');

sliderBlock.addEventListener('mouseenter', () => {
    mySwiper.autoplay.stop();
})