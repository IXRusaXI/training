export let elementCollection = {
    main: document.querySelector('body'),
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
  deviceHidden: true,
  serviceSlider: document.querySelector('.cost .swiper-wrapper'),

  callBackShowButton: document.querySelector('.chat_icon'),
  callBackCloseButton: document.querySelector('.call-back-content__close-button'),
  callBackBlock: document.querySelector('.call-back-wrapper'),
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
  { name: 'Ремонт ноутбуков' },
  { name: 'Ремонт планшетов'},
  { name: 'Ремонт ПК' },
  { name: 'Ремонт мониторов'},
  { name: 'Ремонт смартфонов'},
  { name: 'Ремонт принтеров'},
  { name: 'Ремонт проекторов'},
  { name: 'Ремонт серверов'},
];
export let costCollection = [
  { title: 'Диагностика', cost: 'Бесплатно', time: '30 мин'  },
  { title: 'Замена дисплея', cost: '1000 &#8381;', time: '30-120 мин' },
  { title: 'Замена полифонического динамика', cost: '1000 &#8381;', time: '30-120 мин'  },
  { title: 'Тестирование с выдачей технического заключения', cost: '1000 &#8381;', time: '30-120 мин'  },
  { title: 'Замена программного обеспечения', cost: '1000 &#8381;', time: '30-120 мин'  }
];
