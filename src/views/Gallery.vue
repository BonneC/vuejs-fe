<template>
    <div>
        <h2>Images</h2>
        <!--        <span class="tab"-->
        <!--              :class="{activeTab: selectedTab === tab}"-->
        <!--              v-for="(tab, index) in tabs"-->
        <!--              :key="index"-->
        <!--              @click="selectedTab=tab">-->
        <!--            {{tab}}-->
        <!--        </span>-->
        <!--        <app-navbar v-show="selectedTab==='Graphs'"></app-navbar>-->
        <!--        <div v-show="selectedTab==='Drawings'">-->
        <!--            <img alt="Vue logo" src="./assets/logo.png">-->
        <!--            <hello-world msg="Welcome to Your Vue.js App"/>-->
        <!--        </div>-->
        <nav class="nav-bar navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <uL class="navbar-nav">
                    <li class="nav-item active">
                        <router-link class="nav-link" :to="{name: 'images'}">Graphs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'home'}">Drawings</router-link>
                    </li>
                </uL>
            </div>

        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Gallery.vue",
        data() {
            return {
                tabs: ['Graphs', 'Drawings'],
                selectedTab: 'Graphs'
            }
        }
    }
</script>

<style scoped>
    .nav-bar{
        margin-left: 250px;
    }
</style>