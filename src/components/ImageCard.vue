<template>
    <div id="imageCard">
        <div class="col-md-4">
            <div class="show-image card">
                <div class="thumbnail" style="background: black">
                    <img class="card-img-top" :src="image_url" alt="image">
                </div>
                <div class="card-body">
                    <div class="img-title">{{image.title}} with id {{image.id}}</div>
                    <div class="catStyle">Category: {{image.category}}</div>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    export default {
        name: "ImageCard",
        props: {
            image: Object
        },
        data() {
            return {
                image_url: ''
            }
        },
        created() {
            this.image_url = 'http://localhost:8000/image/' + this.image.id
        }
    }
</script>

<style scoped lang="scss">
    #imageCard{
    }
    .card-body {
        padding: 0;
    }

    .img-title {
        font-family: "Roboto";
        letter-spacing: 1px;
        font-size: 20px;
        font-weight: 500;
    }

    .thumbnail {
        position: relative;
        width: 200px;
        height: 200px;
        overflow: hidden;
    }

    .thumbnail img {
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100%;
        width: auto;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .thumbnail img.portrait {
        width: 100%;
        height: auto;
    }

</style>