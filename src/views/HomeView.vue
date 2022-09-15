<template>
  <div class="home container">
    <MakePost  @loadNewPost="loadData()"/>
    <h1 class="title-home">Ver todos los post</h1>
    <postCard v-for="(item,index) in allPost" :key="index" :data="item" @loadData="loadData"/>
  </div>
</template>

<script>
  import postCard from "@/components/postCardComponent/postCard.vue"
  import MakePost from "@/components/MakePostComponent/MakePost.vue"
  import axios from "axios"
  import { mapState } from "vuex"

export default {
  name: 'HomeView',
  data  () {
    return{
      allPost: []
    }
  },
  components: {
    postCard,
    MakePost
  },
  mounted() {
    this.loadData()
  },
  methods:{
    loadData(){
      // load all post of all users by date
      axios
      .get(`${this.urlServer}posts`, {"headers": this.headers})
      .then( (response) => {
        this.allPost = response.data.data
      })
    }
  },
  computed: mapState(["urlServer","headers"])
}
</script>
