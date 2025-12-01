import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/swiper-bundle.css';

const baseOptions = {
  spaceBetween: 16,
  centeredSlides: true,
  modules: [Navigation, Pagination],
};

export function initBrandsSwiper() {
  if (window.innerWidth >= 768) {
    return;
  }

  const selector = '.repair-brands .swiper';
  const paginationSelector = '.repair-brands .swiper-pagination';

  const slidesPerViewBrands = (window.innerWidth + 10) / (240 + 16);

  return new Swiper(selector, {
    ...baseOptions,
    slidesPerView: slidesPerViewBrands,
    pagination: {
      el: paginationSelector,
      clickable: true,
    },
  });
}

export function initDevicesSwiper() {
  if (window.innerWidth >= 768) {
    return;
  }

  const selector = '.devices-repair .swiper';
  const paginationSelector = '.devices-repair .swiper-pagination';

  const slidesPerViewDevices = (window.innerWidth - 32) / (240 + 28); // Пример: видеть больше одной карточки

  return new Swiper(selector, {
    ...baseOptions,
    slidesPerView: slidesPerViewDevices,
    pagination: {
      el: paginationSelector,
      clickable: true,
    },
  });
}
