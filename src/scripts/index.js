import '../styles/index.scss';
import i18next from 'i18next';
import enContent from '../locales/en/translation.json';
import { initHeroSlider, initNewArrivalSlider, initShopByRoomSlider } from './components/slider';

function updateContent() {
  let element;
  document.querySelectorAll('[data-translate]').forEach(item => {
    element = item;
    element.innerHTML += i18next.t(item.getAttribute('data-translate'));
  });
}

i18next
  .init({
    lng: 'en',
    resources: {
      en: {
        translation: enContent
      }
    }
  })
  .then(() => {
    updateContent();
  });

initHeroSlider();
initNewArrivalSlider();
initShopByRoomSlider();
