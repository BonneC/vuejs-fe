<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-flex flex-row justify-content-center" style="padding-left: 40%">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'gallery', params:{category: 'cat1'}}">Graphs
                        </router-link>
                    </li>
                    <li class="nav-item" style="padding: 0">
                        <router-link class="nav-link" :to="{name: 'home'}">
                            <img src="../assets/avatar.png" width="60" height="60" alt=""></router-link>
                    </li>
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
        name: "Navbar"
    }
</script>

<style scoped lang="scss">
    /*@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700");*/
    @media (min-width: 768px) {
        .navbar .navbar-nav {
            position: relative;
            display: inline-block;
            float: none;
            vertical-align: top;
        }

        .navbar .navbar-collapse {
            text-align: center;
        }
    }
    img{
        border-radius: 50% !important;
        /*position: absolute;*/
        z-index: 1;
        box-shadow: 1px 1px 10px #0f1010;
    }

    .navbar {
        overflow: hidden;
        text-align: center !important;
        /*float: none;*/
        /*display: inline-block;*/
        box-shadow: 1px 1px 10px #0f1010;
        background: #212529;
        padding-top: 0;
        padding-bottom: 0;
        /*height: 60px;*/
        /*z-index:10;*/
    }

    .nav-link {
        font-family: Roboto;
        color: white;

        &:after {
            content: '';
            bottom: 0;
            width: 0;
            height: 1px;
            background-color: rgba(255, 255, 255, 0.5);
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            position: absolute;
            z-index: 5;
            -webkit-transition-duration: 500ms;
            transition-duration: 500ms;


        }
        /*&:hover,*/
        /*&:after {*/
        /*    width: 70px;*/
        /*    background-color: white;*/
        /*}*/
        /*&:focus,*/
        /*&:after{*/
        /*    width: 70px;*/
        /*    background-color: white;*/
        /*}*/
    }
    .nav-link:hover::after, .nav-link:focus::after {
        width: 70px;
        background-color: white; }
    li {
        /*height: inherit;*/
        /*line-height: 60px;*/
        display: block;
        transition-duration: 0.5s;

        float: left;
        padding: 0.5rem;
        position: relative;
        text-decoration: none;
        /*background: white !important;*/
        /*height: 150px;*/
        /*align-self: center!important;*/
        &:hover {
            cursor: pointer;
            /*background: #f6f6f6;*/
            border-bottom: 5px white;
            /*border-bottom: 5px black;*/
        }
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        /*text-align: left;*/
    }

    ul li ul {
        visibility: hidden;
        z-index: 999;
        opacity: 0;
        min-width: 4rem;
        position: absolute;
        transition: all 0.5s ease;
        margin-top: 0.5rem;
        /*padding: 5px;*/
        left: 0;
        display: none;
    }

    ul li:hover > ul,
    ul li ul:hover {
        background: #f6f6f6;
        visibility: visible;
        opacity: 1;
        display: block;
    }

    ul li ul li {
        clear: both;
        width: 100%;
        padding: 1rem;

        &:hover {
            background: #6b7eaa;
            color: white;
        }
    }
</style>