<template>
    <div id="mySidenav" class="sidenav">
        <uL>
            <li>
                <router-link :to="{name: 'image', params:{id: '1'}}">Image</router-link>
            </li>
            <li>
                <router-link :to="{name: 'home'}">About</router-link>
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
        background-color: #111; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
    }

    /* The navigation menu links */
    .sidenav li {
        padding: 8px 8px 8px 8px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    /* When you mouse over the navigation links, change their color */
    .sidenav a:hover {
        color: #f1f1f1;
    }

    /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
    @media screen and (max-height: 450px) {
        .sidenav {
            padding-top: 15px;
        }

        .sidenav a {
            font-size: 18px;
        }
    }
</style>