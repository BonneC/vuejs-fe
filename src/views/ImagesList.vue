<template>
    <div class="main">
        <!--        <div class="partition-title">LIST OF THE IMAGES FOR {{category}}</div>-->
        <div class="masonry-with-columns" >
            <div class="masonry-item" v-for="(src, index) in urls"
                 :key="index" @click="() => showImg(index)">
                <div class="masonry-content">
                    <div class="image-container"><img :src="src" alt="img"></div>

                    <h3 class="masonry-title">{{images[index].title}}</h3>
                    <p class="masonry-description">Deskripshon</p>

                    <!--                    </div>-->
                    <!--                </div>-->
                </div>
            </div>
        </div>
        <!--        <div class="masonry-with-columns">-->
        <!--            <div-->
        <!--                    v-for="(src, index) in urls"-->
        <!--                    :key="index">-->
        <!--                <div id="imageCard" class="show-image card image-card"-->
        <!--                     @click="() => showImg(index)">-->
        <!--                    &lt;!&ndash;                <div class="col-md-4">&ndash;&gt;-->
        <!--                    &lt;!&ndash;                    <div class="show-image card"&ndash;&gt;-->
        <!--                    &lt;!&ndash;                         >&ndash;&gt;-->

        <!--                    <div class="thumbnail" style="background: black">-->
        <!--                        <img class="card-img-top" :src="src" alt="img">-->
        <!--                    </div>-->

        <!--                    <div class="card-body">-->
        <!--                        <h4>{{images[index].title}}</h4>-->
        <!--                        <p>Deskripshon</p>-->
        <!--                    </div>-->
        <!--                    &lt;!&ndash;                    </div>&ndash;&gt;-->
        <!--                    &lt;!&ndash;                </div>&ndash;&gt;-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
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
                            this.urls.push('http://192.168.0.29/8000/image/' + this.images[i].id)
                            // this.urls.push('http://localhost/image/' + this.images[i].id)
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
    .masonry-with-columns {
        columns: 4 200px;
        column-gap: 1rem;
        .masonry-item {
            width: 150px;
            color: white;
            margin: 0 1rem 1rem 0;
            display: inline-block;
            width: 100%;
            text-align: center;
            font-weight: 900;
            font-size: 2rem;
            overflow: hidden;
            box-shadow: 1px 1px 10px #0f1010;
            border: none;
            background-color: rgba(35, 35, 35, 0.55);
            font-family: "Roboto", sans-serif;
            top: 0;
            transition: top ease 0.5s;
            &:hover{
                top: -10px;
                box-shadow: 5px 5px 10px #000000;
                img{
                    transform: scale(1.5);
                }
            }
            .image-container{
                width: inherit;
                overflow: hidden;
            }

            img{
                max-width: 100%;
                height: auto;
                transition: transform .5s ease;
                overflow: hidden;
                /*&:hover{*/
                /*    transform: scale(1.5);*/
                /*}*/
            }



        }

    }

</style>