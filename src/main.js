import BootstrapVue from 'bootstrap-vue'
import Lightbox from 'vue-easy-lightbox'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.scss'
import Vue from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar'
import Gallery from "@/views/Gallery";
import SideNav from "@/components/SideNav";
import HelloWorld from "@/views/HelloWorld";
import VueRouter from 'vue-router'
import ImagesList from "@/views/ImagesList";
import ImageShow from "@/views/ImageShow";


import router from './router'


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Lightbox)
Vue.config.productionTip = false

Vue.component('app-navbar', Navbar)
Vue.component('app-gallery', Gallery)
Vue.component('hello-world', HelloWorld)
Vue.component('side-nav', SideNav)
Vue.component('images-list', ImagesList)
Vue.component('image-show', ImageShow)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
