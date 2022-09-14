<template>
  <div class="post-card">
    <div class="post-card__information">
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="">
      <h2 class="post-card__name">
        {{data.author.name ? data.author.name : namePost}}
        <span>
          {{data.date}}
        </span>
      </h2>
    </div>
    <div class="post-card__content">
      {{data.content}}
    </div>
    <div class="post-card__options">
      <button class="post-card__options--option like">
        <img
          src="https://i.pinimg.com/originals/96/a2/71/96a27139e8352b383677452d7dd6edd2.jpg"
          alt=""
          >
        {{data.likes}}
      </button>
      <button class="post-card__options--option comment">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9imhFQVI1oJf6bp_8fDAqhc6sDTm2Oc4SHJO9htIl&s"
          alt=""
          >
        {{data.likes}}
      </button>
      <button class="post-card__options--option share">
        <img
          src="https://img.icons8.com/material-sharp/2x/share.png"
          alt=""
          >
        {{data.likes}}
      </button>
    </div>
    <div class="cotainer-comment">
      <input
        type="text"
        name="comment"
        id="comment"
        placeholder="write your comment"
      >
      <!-- <CommentInPost v-for="(item,index) in data.allComments" :key="index" :data="item"/> -->
    </div>
  </div>
</template>
<script>
// import CommentInPost from "../commentInPostComponent/commentInPost.vue"
import { mapState } from "vuex";
import axios from 'axios';
  export default {
    name: "post-card",
    props: ["data", "namePost"],
    // components: { CommentInPost }
    methods:{
      postComment(){
        axios
        .get(`${this.urlServer}posts`, {"headers": this.headers})
        .then( response => {
          this.allPost = response.data.data
        })
        .catch(err =>{
          console.log(err);
        })

      }
    },
    computed: mapState(["user"])
}
</script>
<style lang="scss" scoped>
@import "postCard";
</style>
