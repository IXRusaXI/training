export function initSwiper() {
    return new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: -65,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
        }
});
}