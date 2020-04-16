<template>
    <div>
        <h1>List of The Images for {{category}}</h1>
        <router-link :to="{name: 'image', params:{id: '1'}}">Image 1</router-link>
    </div>

</template>

<script>
    export default {
        name: "ImagesList",
        props: {
            category: {
                type: String,
                required: true
            }
        },
        data() {
            return {

            }

        },
        computed:{
        //     category(){
        //         if(this.cat==='cat1')
        //             return 'Graphs'
        //         else return 'Drawings'
        //     }
        }
    }
</script>

<style scoped>

</style>