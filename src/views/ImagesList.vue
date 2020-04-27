<template>
    <div class="container">
        <h1>List of The Images for {{category}}</h1>
        <!--        <ImageCard v-for="image in images" :key="image.id" :image="image"></ImageCard>-->
<!--        <div class="container-fluid p-md-0 ">-->
<!--            <div class="row portfolios-area">-->
<!--                <div class="mix col-lg-6 col-md-6 web"-->
<!--                     v-for="(src, index) in urls"-->
<!--                     :key="index"-->
<!--                     @click="() => showImg(index)"-->
<!--                >-->
<!--                    <img class="portfolio-item set-bg" :src="src">-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <section class="sonar-projects-area" id="projects">
            <div class="container-fluid">
                <div class="row sonar-portfolio">
                    <div class="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes studio wow fadeInUpBig"
                         data-wow-delay="300ms"
                         v-for="(src, index) in urls"
                         :key="index"
                         @click="() => showImg(index)">
<!--                        <a class="gallery-img" :href="src">-->
                            <img class="portfolio-item set-bg" :src="src">
<!--                        </a>-->
                        <div class="gallery-content">
                            <h4>{{images[index].title}}</h4>
                            <p>Deskripshon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
            // ImageCard
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

<style scoped>
 .container{
     margin-left: 150px;
 }
</style>