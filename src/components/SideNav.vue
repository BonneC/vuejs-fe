<template>
    <div id="mySidenav" class="sidenav">
        <div class="sonar-portfolio-menu">
            <!--            <div class="text-center portfolio-menu">-->
            <uL class="list-inline">
                <li>
                    <router-link class="btn active" :to="{name: 'image', params:{id: '1'}}">Image</router-link>
                </li>
                <li>
                    <router-link class="btn active" :to="{name: 'home'}">About</router-link>
                </li>
                <li>
                    <router-link class="btn active" :to="{name: 'gallery', params:{category: 'cat1'}}">Graphs
                    </router-link>
                </li>
                <li>
                    <router-link class="btn active" :to="{name: 'gallery', params:{category: 'cat2'}}">
                        Drawings
                    </router-link>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Gallery
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <router-link class="dropdown-item" :to="{name: 'gallery', params:{category: 'cat1'}}">Graphs
                            </router-link>
                            <router-link class="dropdown-item" :to="{name: 'gallery', params:{category: 'cat2'}}">
                                Drawings
                            </router-link>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </li>
            </uL>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SideNav"
    }
</script>

<style scoped>
    .sidenav {
        height: 100%; /* 100% Full-height */
        /*margin-top:60px;*/
        width: 150px; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1; /* Stay on top */
        top: 0; /* Stay at the top */
        left: 0;
        background-color: #232323; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
    }
</style>