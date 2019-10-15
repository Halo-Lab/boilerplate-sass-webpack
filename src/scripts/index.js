import '../styles/index.scss';
import i18next from 'i18next';
import enContent from '../locales/en/translation.json';
import {
  initHeroSlider,
  initNewArrivalSlider,
  initShopByRoomSlider,
  initPostersSlider
} from './components/slider';

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

// LANGUAGE SWITCHER

(() => {
  const languageMenu = document.getElementById('language-menu');
  languageMenu.addEventListener('click', () => {
    languageMenu.classList.toggle('language-menu-open');
  });

  let selectedLanguage;
  const languageItem = document.querySelectorAll('.language-item');

  languageItem.forEach(item => {
    item.addEventListener('click', () => {
      selectedLanguage = item.innerHTML;
      document.querySelector('.language-item.selected').classList.remove('selected');
      item.classList.add('selected');
      document.querySelector('.current-language').innerHTML = selectedLanguage;
    });
  });
})();

initHeroSlider();
initNewArrivalSlider();
initShopByRoomSlider();
initPostersSlider();
