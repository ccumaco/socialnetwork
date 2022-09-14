<template>
    <div>
        Hacer un post
        <input type="text" v-model="content" >
        <button @click="createPost">crear Post</button>
        <pre>{{user}}</pre>
    </div>
</template>
<script>
    import axios from 'axios';
    import { mapState } from 'vuex'
    export default{
        name:"MakePost",
        data(){
            return{
                content: "",
            }
        },
        computed: mapState(["urlServer","headers", "user"]),
        methods:{
            createPost(){
                axios
                .post(`${this.urlServer}posts`, 
                    {
                        "content": this.content,
                        "author": this.user._id
                    }
                    , {"headers": this.headers})
                .then( (response) => {
                    console.log(response);
                    this.allPost = response.data.data
                })
            }
        }
    }
</script>