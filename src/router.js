import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
// import Gallery from "@/views/Gallery";
import ImagesList from "@/views/ImagesList";
import ImageShow from "@/views/ImageShow";

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/gallery/:category',
        name: 'gallery',
        component: ImagesList,
        props: true
    },
    {
        path: '/image/:id',
        name: 'image',
        component: ImageShow,
        props: true
    },
    {
        path: '/images',
        name: 'images',
        component: ImagesList
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router