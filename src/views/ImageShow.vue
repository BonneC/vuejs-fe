<template>
    <div>
        <div class="card" style="width: 50rem;">
            <img class="card-img-top" :src="image_url" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{image.title}} with id {{id}}</h5>
                <p class="card-text">{{image.category}}</p>
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
    import ImageService from "@/services/ImageService";

    export default {
        name: "ImageShow",
        props: {
            id: {
                required: true
            }
        },
        data() {
            return {
                image: {},
                image_url: ''
            }

        },
        created() {
            ImageService.getImage(this.id)
                .then(response => {
                    console.log(response.data)
                    this.image = response.data
                })
                .catch(error => {
                    console.log('Error: ', error.response)
                })
            this.image_url = 'http://localhost:8000/image/' + this.id
        }
    }
</script>

<style scoped>
    .card {
        margin-left: 300px;
    }
</style>