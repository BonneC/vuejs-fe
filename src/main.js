import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import Navbar from './Navbar'

// import router from './router'
Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.component('app-navbar', Navbar)

new Vue({
    render: h => h(App)
}).$mount('#app')
