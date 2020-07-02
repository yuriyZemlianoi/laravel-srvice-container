import Vuex from 'vuex'
import StoreObject from '@Store'
Container.provide({
    register({ Vue, root, use }) {
        Vue.use(Vuex)
        const store = new Vuex.Store(StoreObject)
        root.set({ store })
        use({ store })
    }
})
