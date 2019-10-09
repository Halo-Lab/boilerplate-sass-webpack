import Swiper from 'swiper';

const initHeroSlider = () => {
  return new Swiper('.hero-slider', {
    loop: true,

    pagination: {
      el: '.hero-slider-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.hero-slider .swiper-button-next',
      prevEl: '.hero-slider .swiper-button-prev'
    }
  });
};

const initNewArrivalSlider = () => {
  return new Swiper('.arrival-slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      576: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      992: {
        spaceBetween: 40,
        slidesPerView: 4
      }
    },

    navigation: {
      nextEl: '.arrival-slider .swiper-button-next',
      prevEl: '.arrival-slider .swiper-button-prev'
    }
  });
};

const initShopByRoomSlider = () => {
  return new Swiper('.shop-by-room-slider', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 1.25
      },
      576: {
        slidesPerView: 2.25,
        allowTouchMove: true
      },
      768: {
        slidesPerView: 3,
        allowTouchMove: false
      }
    },

    navigation: {
      nextEl: '.arrival-slider .swiper-button-next',
      prevEl: '.arrival-slider .swiper-button-prev'
    }
  });
};

export { initHeroSlider, initNewArrivalSlider, initShopByRoomSlider };
