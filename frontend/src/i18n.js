import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:"en",
    resources:{
        en:{
translation:{
    greeting:"Hello, Welcome",
}
        },
        hi:{
translation:{
    greeting:"नमस्ते, आपका स्वागत है!",
}
        }
    }
})