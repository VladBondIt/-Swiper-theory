const mySwiper = new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        // clickable: true,
        // // dynamicBullets неочень
        // // dynamicBullets: true,
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return 'Изображение <span class="' + currentClass + '"></span>' +
                ' из ' +
                '<span class="' + totalClass + '"></span>';
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragClass: 'swiper-scrollbar-drag'
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.image-slider'
    }

});
