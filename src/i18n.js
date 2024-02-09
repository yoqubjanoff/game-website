import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locale/resources';


i18n
.use(initReactI18next)
.init({
    debug: true,
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
})

export default i18n;