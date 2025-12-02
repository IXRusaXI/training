export const templates = {
    brandCard: `
        <div class="card">
            <img class="logo" src="" alt="Лого компании">
        </div>
    `,

    deviceCard: `
          <div class="card card--device">
              <span class="card__name"></span>
              <img class="arrow" src="../img/decor/move-on.svg" alt="Перейти">
          </div>
    `,

    costCard: `
          <div class="service_card">
              <div class='service-card-wrapper'>
                  <span class="text">Ремонтные услуги</span>
                  <span class="title"></span>
              </div>
              <div class='service-card-wrapper'>
                  <span class="text">Цена</span>
                  <span class="cost"></span>
              </div>
              <div class='time_place'>
              <div class='service-card-wrapper'>
                    <span class="text">Срок</span>
                    <span class="time"></span>
              </div>
                <button class='order-button'>
                ЗАКАЗАТЬ
                <img class='order-button__arrow' src='./img/decor/cost-button-arrow.svg' alt=''>
                </button>
              </div>
          </div>
    `,

    swiperSlide: `
        <div class="swiper-slide">
        </div>
    `
};
