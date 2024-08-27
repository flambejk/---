const descriptionTab = document.querySelector('.tab-1'), 
      reviewsTab = document.querySelector('.tab-2'), 
      productAboutTab = document.querySelector('.tab-3');
const tab1_btn = document.querySelector('.tab-1-button'),
      tab2_btn = document.querySelector('.tab-2-button'),
      tab3_btn = document.querySelector('.tab-3-button');

function tabSwitcher(tab, button) {
    button.addEventListener('click', () => {
        descriptionTab.style.display = 'none';
        reviewsTab.style.display = 'none';
        productAboutTab.style.display = 'none';
        tab1_btn.style.borderBottom = '5px solid transparent';
        tab2_btn.style.borderBottom = '5px solid transparent';
        tab3_btn.style.borderBottom = '5px solid transparent';

        tab.style.display = 'flex';
        button.style.borderBottom = '5px solid rgba(66, 159, 58, 1)';
    })
}

tabSwitcher(descriptionTab, tab1_btn);
tabSwitcher(reviewsTab, tab2_btn);
tabSwitcher(productAboutTab, tab3_btn);


// В случае некорректной работы слайдера на устройствах с маленькой шириной экрана расскомментировать 
// код на строчках 30-41 и 50, закомментировать строчки 55-65.

// if (window.screen.width >= 1450) {
//     slidesPerView = 4;
// }
// if (window.screen.width < 1450 && window.screen.width >= 1170) {
//     slidesPerView = 3;
// }
// if (window.screen.width < 1170 && window.screen.width >= 920) {
//     slidesPerView = 3;
// }
// if (window.screen.width < 920) {
//     slidesPerView = 2;
// }

new Swiper('.swiper-container', {
    // Пагинацию пока убрал, но она слегка стилизована (зелёные точки, вместо синих).
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // }, 

    // slidesPerView: slidesPerView,
    loop: true,
    loopedSlides: 2,
    freeMode: true,
    
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        920: {
            slidesPerView: 3,
        },
        1450: {
            slidesPerView: 4,
        }
    }
});

