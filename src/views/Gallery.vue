<template>
    <div>
        <h2>Images</h2>
        <span class="tab"
              :class="{activeTab: selectedTab === tab}"
              v-for="(tab, index) in tabs"
              :key="index"
              @click="changeTab(tab)">
                    {{tab}}
                </span>
        <div v-show="selectedTab==='Graphs'">
            <img alt="Vue logo" src="../assets/logo.png">
            <images-list :category="category"/>
        </div>
        <div v-show="selectedTab==='Drawings'">
            <img alt="Vue logo" src="../assets/logo.png">
            <images-list :category="category"/>
        </div>
        <!--        <nav class="nav-bar navbar navbar-expand-lg navbar-light bg-light">-->
        <!--            <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
        <!--                <uL class="navbar-nav">-->
        <!--                    <li class="nav-item active">-->
        <!--                        <router-link class="nav-link" :to="{name: 'images'}">Graphs</router-link>-->
        <!--                    </li>-->
        <!--                    <li class="nav-item">-->
        <!--                        <router-link class="nav-link" :to="{name: 'home'}">Drawings</router-link>-->
        <!--                    </li>-->
        <!--                </uL>-->
        <!--            </div>-->

        <!--        </nav>-->
        <!--        <router-view></router-view>-->
    </div>
</template>

<script>
    export default {
        name: "Gallery",
        data() {
            return {
                tabs: ['Graphs', 'Drawings'],
                selectedTab: 'Graphs',
                category: 'cat1'
            }
        },
        methods: {
            changeTab(tab) {
                this.selectedTab = tab
                if (tab === 'Graphs')
                    this.category = 'cat1'
                else this.category = 'cat2'
            }
        }
    }
</script>

<style scoped>
    .nav-bar {
        margin-left: 250px;
    }
</style>