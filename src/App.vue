<template>
    <div id="app">
        <app-navbar></app-navbar>
<!--        <side-nav></side-nav>-->

        <!--        <app-gallery></app-gallery>-->
        <div style="padding-top: 40px">
        <router-view/>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {},
        data(){
            return{
                height: window.innerHeight + 'px',
                width: window.innerWidth + 'px'
            }
        },
        computed:{
            styleCSS(){
                console.log(this.height)
                return {
                    // '--height-screen': this.height,
                    // '--width-screen': this.width
                }
            }
        }
    }
</script>

<style>
    #app {
        background-color:#232323;
    }
</style>
