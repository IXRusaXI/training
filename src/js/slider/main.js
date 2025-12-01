import {templates} from "./templates.js";
import {elementCollection as collection} from "./collection.js";
import {logoImageCollection as logoImg, deviceTypeCollection as deviceImg} from "./collection.js";
import {
    getElement,
    showSecondBlock,
    showDevicesBlock
} from "./service.js";
import { initBrandsSwiper, initDevicesSwiper } from "./swiper.js";

export default function initBrandCards() {
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

  initBrandsSwiper();
}

export function initDeviceCards() {
  const totalCards = deviceImg.length;
  const cardsToHide = 4;
  const startHidingIndex = totalCards - cardsToHide;

  for (let i = 0; i < totalCards; i++) {
    const data = deviceImg[i];

    let swiperCardWrapper = getElement(templates.swiperSlide);
    let swiperCard = getElement(templates.deviceCard);
    swiperCard.querySelector('.card__name').textContent = data.name;

    let slide = swiperCardWrapper.querySelector('.swiper-slide');
    slide.appendChild(swiperCard.firstElementChild);
    collection.deviceSlider.appendChild(slide);

    let gridCard = getElement(templates.deviceCard).firstElementChild;
    gridCard.querySelector('.card__name').textContent = data.name;

    if (i >= startHidingIndex) {
      gridCard.classList.add('hidden');

      collection.deviceHiddenLinksList.push(gridCard);
    }

    collection.deviceFirstBlock.appendChild(gridCard);
  }

  collection.deviceShowButton.addEventListener('click', () => {
    showDevicesBlock(collection.deviceHidden);
  });

  initDevicesSwiper();
}

