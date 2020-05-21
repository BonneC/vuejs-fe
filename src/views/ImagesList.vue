<template>
    <div class="container-fluid clearfix" id="imagesList">
<!--        <div class="partition-title">LIST OF THE IMAGES FOR {{category}}</div>-->
        <div class="row">
            <div class="col-md-4"
                 v-for="(src, index) in urls"
                 :key="index">
                <div id="imageCard" class="show-image card"
                     @click="() => showImg(index)">
                    <!--                <div class="col-md-4">-->
                    <!--                    <div class="show-image card"-->
                    <!--                         >-->

                    <div class="thumbnail" style="background: black">
                        <img class="card-img-top" :src="src" alt="img">
                    </div>

                    <div class="card-body">
                        <h4>{{images[index].title}}</h4>
                        <p>Deskripshon</p>
                    </div>
                    <!--                    </div>-->
                    <!--                </div>-->
                </div>
            </div>
        </div>
        <vue-easy-lightbox
                :visible="visible"
                :imgs="urls"
                :index="index"
                @hide="handleHide"
        ></vue-easy-lightbox>
    </div>

</template>

<script>
    import ImageService from "@/services/ImageService";
    // import ImageCard from "@/components/ImageCard";
    import VueEasyLightbox from 'vue-easy-lightbox'

    export default {
        name: "ImagesList",
        components: {
            VueEasyLightbox
        },
        props: {
            category: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                images: [],
                urls: [],
                index: 0,
                visible: false
            }

        },
        methods: {
            showImg(index) {
                this.index = index
                this.visible = true
            },
            handleHide() {
                this.visible = false
            },
            getImages() {
                ImageService.getImagesCat(this.category)
                    .then(response => {
                        console.log(response.data)
                        this.images = response.data
                        for (let i = 0; i < this.images.length; i++) {
                            console.log('ImAZH ' + this.images[i].id)
                            this.urls.push('http://localhost:8000/image/' + this.images[i].id)
                        }
                        console.log('URLS ' + this.urls)
                    })
                    .catch(error => {
                        console.log('error:' + error.response)
                    })
            }
        },
        watch: {
            category: function (newVal, oldVal) { // watch it
                console.log('Prop changed: ', newVal, ' | was: ', oldVal)
                this.urls = []
                this.images = []
                this.getImages()
            }
        },
        created() {
            this.getImages()

        }
    }
</script>

<style scoped lang="scss">
    .container {
        #imagesList {
            background: #0f1010;
            padding-bottom: 100px;
            margin-top: 30px;
            box-shadow: 1px 1px 10px #0f1010;
        }

        label {
            font-size: 15px;
        }

        #imageCard {
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

        div.show-image {
            position: relative;
            float: left;
            margin: 5px;
        }

        @mixin clearfix() {
            &::after {
                display: block;
                content: "";
                clear: both;
            }
        }

        // Usage as a mixin
        .element {
            @include clearfix;
        }
    }
</style>