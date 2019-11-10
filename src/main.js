import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Menu from '@/components/Menu.vue'
Vue.component('Menu', Menu)
import Star from '@/components/Star.vue'
Vue.component('Star', Star)
import Logo from '@/components/Logo.vue'
Vue.component('Logo', Logo)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')