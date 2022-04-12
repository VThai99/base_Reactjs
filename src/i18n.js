import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
const lang = localStorage.getItem('current_lang')
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/i18n/{{lng}}/{{ns}}.json',
    },
    lng: lang ? lang : 'en',
    fallbackLng: ['kr', 'en', 'ph', 'cn', 'jp'],
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  })

export default i18n
