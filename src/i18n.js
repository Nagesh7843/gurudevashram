import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en/common.json';
import kn from '../locales/kn/common.json';
import mr from '../locales/mr/common.json';

const resources = {
  en: { translation: en },
  kn: { translation: kn },
  mr: { translation: mr }
};

const detectedLanguage = () => {
  const stored = localStorage.getItem('lang');
  if (stored) return stored;
  const browser = navigator.language?.toLowerCase();
  if (browser.startsWith('kn')) return 'kn';
  if (browser.startsWith('mr')) return 'mr';
  return 'en';
};

i18n.use(initReactI18next).init({
  resources,
  lng: detectedLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
