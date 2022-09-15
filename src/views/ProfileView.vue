<template>
    <div id="secure" class="container">
        <h1>¡Hola de vuelta {{allPost.name}}!</h1>
        <FormUser v-if="editProfile"/>
        <PostCard  v-for="(item,index) in allPost.posts" :key="index" :data="item" :namePost="allPost.name"/>
    </div>
</template>

<script>
    import FormUser from "@/components/formUserComponent/formUser"
    import PostCard from "@/components/postCardComponent/postCard"
    import axios from "axios"
    import { mapState } from "vuex"
    export default {
        name: 'ProfileView',
        data(){
            return{
                allPost: [],
                editProfile: true
            }
        },
        components:{
            PostCard,
            FormUser
        },
        mounted() {
            this.loadProfile()
        },
        methods:{
            // load all post of profile
            loadProfile(){
                axios
                .get(`${this.urlServer}users/${this.user._id}`, {"headers": this.headers})
                .then( (response) => {
                    this.allPost = response.data.data
                })
            }
        },
        computed: mapState(["urlServer","headers","user"])
    }
</script>

<style scoped>
</style>