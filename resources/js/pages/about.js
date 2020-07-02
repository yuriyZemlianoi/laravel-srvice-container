import AboutPage from '@Component/about.js'
Container.provide({
    boot({ Vue, store, content }) {
        Vue.component('about-page', AboutPage)
    }
})
