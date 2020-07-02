import Vue from 'vue'

// Disable development  mode warning
Vue.config.productionTip = false

// Globally Registered Components
import './globalComponents.js'

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

// Feather font icon
require('@assets/css/iconfont.css')

// Connection ServiceProvider
import { MakeServiceContainer } from 'vuejs-service-container'
window.Container = MakeServiceContainer()
Vue.use(Container)



