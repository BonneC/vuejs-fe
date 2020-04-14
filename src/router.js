import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Gallery from "@/views/Gallery";
import ImagesList from "@/views/ImagesList";

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path:'/gallery',
        name:'gallery',
        component: Gallery
    },
    {
        path:'/images',
        name: 'images',
        component: ImagesList
    }
]

const router = new VueRouter({
    routes
})

export default router