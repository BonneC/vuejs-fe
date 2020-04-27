<template>
    <div id="app">
        <app-navbar></app-navbar>
        <side-nav></side-nav>

        <!--        <app-gallery></app-gallery>-->
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {}
    }
</script>

<style>
    #app {
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/

        /*margin-left: 150px;*/
    }
</style>
