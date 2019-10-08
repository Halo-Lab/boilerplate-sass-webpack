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

export default initHeroSlider;
