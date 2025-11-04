import { createI18n } from 'vue-i18n'
import en2024 from "../locales/2024/en.json"
import fr2024 from "../locales/2024/fr.json"
import en2025 from "../locales/2025/en.json"
import fr2025 from "../locales/2025/fr.json"

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en',
        messages: {
            en: en2025,
            fr: fr2025,
            en2024: en2024,
            fr2024: fr2024
        }
    })

    vueApp.use(i18n)
})