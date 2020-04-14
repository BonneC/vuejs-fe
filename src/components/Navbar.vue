<template>
    <div>
        <nav class="nav-bar navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" width="30" height="30" alt="">MUH PAGE</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Graphs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Drawings</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .nav-bar{
        margin-left: 200px;
    }
</style>