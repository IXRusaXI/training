import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/swiper-bundle.css';

const baseOptions = {
  spaceBetween: 16,
  centeredSlides: true,
  modules: [Navigation, Pagination],
};

export function initMenu() {
  const selector = '.swiper--menu';

  let perView;
  if (window.innerWidth >= 700) {
    perView = 3;
  } else if (window.innerWidth >= 424) {
    perView = 1.5;
  } else {
    perView = 1.2;
  }


  return new Swiper(selector, {
    ...baseOptions,
    centeredSlides: false,
    slidesPerView: perView
  });
}

export function initBrandsSwiper() {
  const selector = '.swiper--brand';
  const paginationSelector = '.swiper--brand .swiper-pagination';

  let perView;
  if (window.innerWidth >= 500) {
    perView = 2;
  } else {
    perView = 1;
  }
  return new Swiper(selector, {
    ...baseOptions,
    slidesPerView: perView,
    pagination: {
      el: paginationSelector,
      clickable: true,
    },
  });
}

export function initDevicesSwiper() {
  const selector = '.swiper--device-type';
  const paginationSelector = '.swiper--device-type .swiper-pagination';

  let perView;
  if (window.innerWidth >= 500) {
    perView = 2;
  } else {
    perView = 1;
  }
  return new Swiper(selector, {
    ...baseOptions,
    slidesPerView: perView,
    pagination: {
      el: paginationSelector,
      clickable: true,
    },
  });
}
export function initPriceSwiper() {
  const selector = '.swiper--price';
  const paginationSelector = '.swiper--price .swiper-pagination';

  let perView;
  if (window.innerWidth >= 500) {
    perView = 2;
  } else {
    perView = 1;
  }

  return new Swiper(selector, {
    ...baseOptions,
    slidesPerView: perView,
    pagination: {
      el: paginationSelector,
      clickable: true,
    },
  });
}
