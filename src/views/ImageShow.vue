<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="image.url" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{image.title}}</h5>
                <p class="card-text">{{image.description}}</p>
            </div>
        </div>
    </div>
<!--    <div class="card">-->
<!--        <div class="card-body">-->
<!--            <p class="card-title">{{image.title}}</p>-->
<!--            <img class="card-img" >-->
<!--            <p class="card-text">{{image.description}}</p>-->
<!--        </div>-->
<!--    </div>-->

</template>

<script>
    export default {
        name: "ImageShow",
        props: {
            id: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                image: {
                    url: 'https://miro.medium.com/max/989/1*k3PsTP1ibp4CTLJ3ofVlqg.jpeg',
                    title: 'pandas',
                    description: 'this is where i describe the pandas'
                }
            }

        }
    }
</script>

<style scoped>
    .card {
        margin-left: 300px;
    }
</style>