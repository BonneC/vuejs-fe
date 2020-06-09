<template>
    <div>
        <nav class="navbar navbar-expand-lg">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="col-sm-5"></div>
                <div class=" col-sm-6">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'gallery', params:{category: 'cat1'}}">Graphs
                            </router-link>
                        </li>
                        <!--                    <a class="navbar-brand" href="#">Navbar</a>-->
                        <router-link class="navbar-brand" :to="{name: 'home'}">
                            <img :src="image" width="60" height="60" alt=""
                                @mouseover="changeImg" @mouseleave="changeImg"></router-link>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'gallery', params:{category: 'cat2'}}">Drawings
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data(){
            return{
                image: require('../assets/logo1.jpg')
            }
        },
        methods: {
            changeImg() {

                if (this.image.includes("logo1"))
                    this.image = require('../assets/logo2.jpg')
                else this.image = require('../assets/logo1.jpg')
            }
        }
    }
</script>

<style scoped lang="scss">
    /*@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700");*/
    ul {
        /*text-align: center !important;*/
        margin-bottom: -5px;
    }
    img {
        border-radius: 50% !important;
        /*position: absolute;*/
        z-index: 1;
        /*box-shadow: 1px 1px 10px #0f1010;*/
        border: 5px solid #0f1010;
        /*box-shadow: 1px 1px 20px #0f1010;*/
        /*transition: 0.3s;*/
        /*&:hover {*/
        /*    border: 10px solid #0f1010;*/
        /*}*/
    }

    .navbar{
        background-color: #232323;
        padding: 0;
        position: relative;
        z-index: 1;
        /*box-shadow: 5px 5px 10px #0f1010;*/
        margin-bottom: -5px;
    }

    .nav-link{
        padding-top: 1em;
        font-family: Roboto;
        color: white;
        transition: 2s background-color;

        &:after {
            content: '';
            bottom: 0;
            width: 0;
            height: 1px;
            background-color: rgba(255, 255, 255, 0.5);
            /*left: 50%;*/
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            position: absolute;
            z-index: 5;
            -webkit-transition-duration: 500ms;
            transition-duration: 500ms;


        }
    }

    .nav-link:hover::after, .nav-link:focus::after {
        width: 70px;
        background-color: white;
    }



    .navbar-brand {
        position: sticky;
        margin-right: 1em;
        margin-left: 1em;
        padding: 0;
        z-index: 2;

    }

    .header-section {
        background: #081624;
        text-align: center;
        padding: 16px 90px;
        position: relative;
    }

    .site-logo {
        display: inline-block;
        /*padding-right: 80px;*/
    }

    .site-menu-style {
        list-style: none;
    }

    .site-menu-style li {
        display: inline-block;
    }

    .site-menu-style li a {
        font-size: 13px;
        text-transform: uppercase;
        color: #fff;
        margin-right: 50px;
        padding: 22px 0px;
        display: inline-block;
    }

    .site-menu-style li:last-child a {
        margin-right: 0;
    }

    .main-menu-left {
        /*float: left;*/
        /*text-align: right !important;*/
        /*float: left;*/
        /*text-align: center !important;*/
        /*padding-right: 30em;*/
    }

    .main-menu-right {
        /*text-align: center !important;*/
        /*padding-left: 30em;*/
    }


</style>