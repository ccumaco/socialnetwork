<template>
  <div class="home container">
    <h1>VER TODOS LOS POST</h1>
    <postCard v-for="(item,index) in allPost" :key="index" :data="item"/>
  </div>
</template>

<script>
  import postCard from "@/components/postCardComponent/postCard.vue"
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
    postCard
  },
  async mounted() {
    this.loadData()
  },
  methods:{
    loadData(){
      axios
      .get(`${this.urlServer}posts`, {"headers": this.headers})
      .then( (response) => {
        console.log(response);
        this.allPost = response.data.data
      })
    }
  },
  computed: mapState(["urlServer","headers"])
}
</script>
