export let elementCollection = {
    dropDown: document.querySelector('.drop-down-area'),
    sliderRow: document.querySelector('.slider-row'),
    slider: document.querySelector('.swiper-wrapper'),
    firstBlock: document.querySelector('.link-list'),
    showButton: document.querySelector('.drop-down-area__toggle-button'),
    hiddenLinksList: [],
    hidden: true,

  deviceDropDown: document.querySelector('.devices-repair .drop-down-area'),
  deviceSlider: document.querySelector('.devices-repair .swiper-wrapper'),
  deviceFirstBlock: document.querySelector('.devices-repair .link-list'),
  deviceShowButton: document.querySelector('.devices-repair .drop-down-area__toggle-button'),
  deviceHiddenLinksList: [],
  deviceHidden: true
}

export let logoImageCollection =
    [
        './img/logos/samsung-logo.png',
        './img/logos/acer-logo.png',
        './img/logos/apple-logo.png',
        './img/logos/bosch-logo.png',
        './img/logos/hp-logo.png',
        './img/logos/lenovo-logo.png',
        './img/logos/sony-logo.png',
        './img/logos/viewsonic-logo.png',
    ]

export let deviceTypeCollection = [
  { name: 'Ремонт ноутбуков', image: '../img/icons/laptop-icon.svg' },
  { name: 'Ремонт планшетов', image: '../img/icons/tablet-icon.svg' },
  { name: 'Ремонт ПК', image: '../img/icons/desktop-icon.svg' },
  { name: 'Ремонт мониторов', image: '../img/icons/monitor-icon.svg' },
  { name: 'Ремонт смартфонов', image: '../img/icons/phone-icon.svg' },
  { name: 'Ремонт принтеров', image: '../img/icons/printer-icon.svg' },
  { name: 'Ремонт проекторов', image: '../img/icons/projector-icon.svg' },
  { name: 'Ремонт серверов', image: '../img/icons/server-icon.svg' },
];
