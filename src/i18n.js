import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locale/resources';

const storedLanguage = localStorage.getItem("i18nextLng") || 'EN';

i18n
.use(initReactI18next)
.init({
    debug: true,
    resources,
    fallbackLng: storedLanguage,
    interpolation: {
      escapeValue: false
    }
});

export default i18n;
