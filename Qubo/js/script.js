let sliders = document.querySelectorAll('.swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
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

            if (slider.classList.contains('swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('gallery')) {
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback()
}

function sliders_bild_callback(params) { }

let sliderScollItems = document.querySelectorAll('.swiper-scroll');
if (sliderScollItems.length > 0) {
    for (let index = 0; index < sliderScollItems.length; index++) {
        const sliderScrollItem = sliderScollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
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


function sliders_bild_callback(params) { }


if (document.querySelector('.slider-state__body')) {
    new Swiper('.slider-state__body', {
        autoplay: {
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
        navigation: {
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
        autoplay: {
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
        navigation: {
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
        speed: 800,
        preloadImages: false,
        lazy: true,
        navigation: {
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
        autoplay: {
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
        navigation: {
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
};

const searchForm = document.querySelector('.hero-section__form');
if (searchForm) {
    const inputField = searchForm.querySelector('.search-input');
    const dropdown = searchForm.querySelector('.search-value__list');
    const dropdownArray = [...dropdown.querySelectorAll('li')];

    let valueArray = [];
    dropdownArray.forEach(item => {
        valueArray.push(item.textContent);
    });

    inputField.addEventListener('input', () => {
        dropdown.classList.add('open');
        let inputValue = inputField.value.toLowerCase();
        if (inputValue.length > 0) {
            for (let j = 0; j < valueArray.length; j++) {
                if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
                    dropdownArray[j].classList.add('closed');
                } else {
                    dropdownArray[j].classList.remove('closed');
                }
            }
        } else {
            for (let i = 0; i < dropdownArray.length; i++) {
                dropdownArray[i].classList.remove('closed');
            }
        }
    });

    dropdownArray.forEach(item => {
        item.addEventListener('click', () => {
            inputField.value = item.textContent;
            dropdownArray.forEach(dropdown => {
                dropdown.classList.add('closed');
            });
        });
    })

    inputField.addEventListener('focus', () => {
        inputField.placeholder = 'Scrie pentru a filtra';
        dropdown.classList.add('open');
        dropdownArray.forEach(dropdown => {
            dropdown.classList.remove('closed');
        });
    });

    inputField.addEventListener('blur', () => {
        inputField.placeholder = 'Scie sau alege raionul/orasul tau';
        dropdown.classList.remove('open');
    });

    document.addEventListener('click', (evt) => {
        const isDropdown = dropdown.contains(evt.target);
        const isInput = inputField.contains(evt.target);
        if (!isDropdown && !isInput) {
            dropdown.classList.remove('open');
        }
    });
}

const footerSearchForm = document.querySelector('.footer-content__search');
if (footerSearchForm) {
    const inputField = footerSearchForm.querySelector('.search-input');
    const dropdown = footerSearchForm.querySelector('.search-value__list');
    const dropdownArray = [...dropdown.querySelectorAll('li')];

    let valueArray = [];
    dropdownArray.forEach(item => {
        valueArray.push(item.textContent);
    });

    inputField.addEventListener('input', () => {
        dropdown.classList.add('open');
        let inputValue = inputField.value.toLowerCase();
        if (inputValue.length > 0) {
            for (let j = 0; j < valueArray.length; j++) {
                if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
                    dropdownArray[j].classList.add('closed');
                } else {
                    dropdownArray[j].classList.remove('closed');
                }
            }
        } else {
            for (let i = 0; i < dropdownArray.length; i++) {
                dropdownArray[i].classList.remove('closed');
            }
        }
    });

    dropdownArray.forEach(item => {
        item.addEventListener('click', () => {
            inputField.value = item.textContent;
            dropdownArray.forEach(dropdown => {
                dropdown.classList.add('closed');
            });
        });
    })

    inputField.addEventListener('focus', () => {
        inputField.placeholder = 'Scrie pentru a filtra';
        dropdown.classList.add('open');
        dropdownArray.forEach(dropdown => {
            dropdown.classList.remove('closed');
        });
    });

    inputField.addEventListener('blur', () => {
        inputField.placeholder = 'Scie sau alege raionul/orasul tau';
        dropdown.classList.remove('open');
    });

    document.addEventListener('click', (evt) => {
        const isDropdown = dropdown.contains(evt.target);
        const isInput = inputField.contains(evt.target);
        if (!isDropdown && !isInput) {
            dropdown.classList.remove('open');
        }
    });
}

const header = document.querySelector('header');
if (header) {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.header-navbar');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('lock');
    })
}

const mobileSearch = document.querySelector('.mobile-search');
if (mobileSearch) {
    const specialSearch = document.querySelector('.hero-section__search');
    const heroContainer = document.querySelector('.hero-container');
    const pageW = window.innerWidth;
    if (pageW <= 768) {
        mobileSearch.appendChild(specialSearch);
    } else {
        heroContainer.appendChild(specialSearch);
    }
}


const overlay = document.querySelector('.overlay');
const storyPopup = document.querySelector('.story-popup');
const writeStory = document.querySelectorAll('.write-story');

if (storyPopup) {
    writeStory.forEach(btn => {
        btn.addEventListener('click', () => {
            overlay.classList.add('open')
            storyPopup.classList.add('open')
            document.body.classList.add('lock')
        })
    })

    overlay.addEventListener('click', () => {
        overlay.classList.remove('open')
        storyPopup.classList.remove('open')
        document.body.classList.remove('lock')
    })
}

refreshFsLightbox();
