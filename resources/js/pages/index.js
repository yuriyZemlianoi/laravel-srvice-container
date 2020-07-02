import MainPage from '@Component/index.js'
Container.provide({
    boot({ Vue, store, content }) {
        Vue.component('main-container', MainPage)
    }
})
