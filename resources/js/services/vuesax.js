import Vuesax from 'vuesax'
Container.provide({
    register({ Vue, root, use }) {
        Vue.use(Vuesax)
    }
})
