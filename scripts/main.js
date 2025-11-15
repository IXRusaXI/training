import {templates} from "./templates.js";
import {elementCollection as collection} from "./collection.js";
import {logoImageCollection as logoImg} from "./collection.js";
import {
    getElement,
    showSecondBlock
} from "./service.js";
import {initSwiper} from "./swiper.js";

for (let i = 0; i < logoImg.length; i++) {
    let cardTemplate = getElement(templates.brandCard);
    let slideTemplate = getElement(templates.swiperSlide);
    let slide = slideTemplate.querySelector('.swiper-slide');
    let cardImage = cardTemplate.querySelector('img');

    cardImage.src = logoImg[i];

    slide.appendChild(cardTemplate);
    collection.slider.appendChild(slide);
}

for (let i = 0; i < logoImg.length; i++) {
    let cardTemplate = getElement(templates.brandCard);
    let cardImage = cardTemplate.querySelector('img');

    cardImage.src = logoImg[i];

    collection.firstBlock.appendChild(cardTemplate);
}

for (let i = logoImg.length - 1; i >= 0; i--) {
    let cardTemplate = getElement(templates.brandCard).firstElementChild;
    let cardImage = cardTemplate.querySelector('img');

    cardTemplate.classList.add('hidden');
    cardImage.src = logoImg[i];
    collection.hiddenLinksList[i] = cardTemplate;

    collection.firstBlock.appendChild(cardTemplate);
}

collection.showButton.addEventListener('click', () => {
    showSecondBlock(collection.hidden);
});


initSwiper();