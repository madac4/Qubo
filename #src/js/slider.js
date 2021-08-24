let sliders = document.querySelectorAll('.swiper');
if(sliders){
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if(!slider.classList.contains('swiper-bild')){
            let slider_items = slider.children;
            if(slider_items){
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');                 
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if(slider.classList.contains('swiper_scroll')){
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if(slider.classList.contains('gallery')){
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback()
}

function sliders_bild_callback(params) {}

let sliderScollItems = document.querySelectorAll('.swiper-scroll');
if(sliderScollItems.length > 0){
    for (let index = 0; index < sliderScollItems.length; index++) {
        const sliderScrollItem = sliderScollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar:{
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false,
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


function sliders_bild_callback(params) {}


if (document.querySelector('.slider-state__body')) {
    new Swiper('.slider-state__body', {
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 15,
        autoHeight: true,
        speed: 800,
        preloadImages: false,
        lazy: true,
        navigation:{
            nextEl: '.slider-state-controls__arrows .slider-arrow__next',
            prevEl: '.slider-state-controls__arrows .slider-arrow__prev',
        },
        pagination: {
            el: '.slider-state-controls__dots',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    }) 
}

if (document.querySelector('.slider-video__body')) {
    new Swiper('.slider-video__body', {
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        spaceBetween: 40,
        slidesPerView: 1,
        autoHeight: true,
        speed: 800,
        preloadImages: false,
        lazy: true,
        navigation:{
            nextEl: '.slider-video-controls__arrows .slider-arrow__next',
            prevEl: '.slider-video-controls__arrows .slider-arrow__prev',
        },
        pagination: {
            el: '.slider-video-controls__dots',
            clickable: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
        },
    }) 
}

if (document.querySelector('.slider-recomandation__body')) {
    new Swiper('.slider-recomandation__body', {
        observer: true,
        observeParents: true,
        spaceBetween: 40,
        slidesPerView: 1,
        autoHeight: true,
        speed: 800,
        preloadImages: false,
        lazy: true,
        navigation:{
            nextEl: '.slider-recomandation-controls__arrows .slider-arrow__next',
            prevEl: '.slider-recomandation-controls__arrows .slider-arrow__prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
        },
    }) 
}

if (document.querySelector('.slider-resurces__body')) {
    new Swiper('.slider-resurces__body', {
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        spaceBetween: 40,
        slidesPerView: 2,
        autoHeight: true,
        speed: 800,
        preloadImages: false,
        lazy: true,
        navigation:{
            nextEl: '.slider-resurces-controls__arrows .slider-arrow__next',
            prevEl: '.slider-resurces-controls__arrows .slider-arrow__prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                slidesPerView: 'auto',
                freeMode: true,
                draggable: true,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 1,
            },
            1340: {
                slidesPerView: 2,
            },
        },
    }) 
}