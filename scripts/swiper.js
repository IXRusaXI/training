export function initSwiper() {
    return new Swiper(".swiper", {
        slidesPerView: (window.innerWidth + 10) / (240 + 10),
        spaceBetween: 10,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
        }
});
}