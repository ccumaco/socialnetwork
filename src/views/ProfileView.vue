<template>
    <div id="secure">
        <h1>Profile</h1>
        <pre>{{allPost}}</pre>
        <PostCard v-for="(item,index) in allPost.posts" :key="index" :data="item"/>
    </div>
</template>

<script>
    import PostCard from "@/components/postCardComponent/postCard.vue"
    import axios from "axios"
    import { mapState } from "vuex"
    export default {
        name: 'ProfileView',
        data(){
            return{
                allPost: []
            }
        },
        components:{
            PostCard
        },
        mounted() {
            this.loadProfile()
        },
        methods:{
            loadProfile(){
                axios
                .get(`${this.urlServer}users/${this.user._id}`, {"headers": this.headers})
                .then( (response) => {
                    console.log(response);
                    this.allPost = response.data.data
                })
                console.log("aqui cargo");
            }
        },
        computed: mapState(["urlServer","headers","user"])
    }
</script>

<style scoped>
</style>