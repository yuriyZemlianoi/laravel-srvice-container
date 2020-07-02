import VueI18n from 'vue-i18n'
import i18nData from '../i18n/i18nData'
Container.provide({
    register({ Vue, root, use }) {
        Vue.use(VueI18n)
        const i18n = new VueI18n({
            locale: 'en', // set default locale
            messages: i18nData
        })
        root.set({ i18n })
        use({ i18n })
    }
})
