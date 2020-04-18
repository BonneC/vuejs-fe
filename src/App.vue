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
        font-family: Bangers, Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-left: 250px;
    }
</style>
