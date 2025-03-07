// i18n.js (for example)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // initialize the react-i18next module
  .init({
    resources: {
      en: {
        translation: {
          "homeintro1": "There can be no keener revelation of a society\'s soul than the way in which it treats its children.",
          "homeintro2":"We ensure children have access to food, shelter, and education.",
          "homeintro3":"We organize trips and events to bring happiness to children.",
          
        }
      },
      am: {
        translation: {
          
        }
      },
      // Add more languages here
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language in case the selected one is not available
    interpolation: {
      escapeValue: false, // React already escapes strings
    },
  });

export default i18n;
