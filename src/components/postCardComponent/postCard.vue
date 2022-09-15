<template>
  <div class="post-card">
    <div class="post-card__information">
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
      <h2 class="post-card__name">
        {{ data.author ? data.author.name : namePost }}
        <span>
          {{ data.date }}
        </span>
      </h2>
    </div>
    <div class="post-card__content">
      {{ data.content }}
    </div>
    <div class="post-card__options">
      <button class="post-card__options--option like">
        <img
          src="https://i.pinimg.com/originals/96/a2/71/96a27139e8352b383677452d7dd6edd2.jpg"
          alt=""
        />
        {{ data.likes }}
      </button>
      <button
        @click="showComments"
        class="post-card__options--option comment"
        >
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9imhFQVI1oJf6bp_8fDAqhc6sDTm2Oc4SHJO9htIl&s"
        alt=""
        />
        {{flagComment ? "ocultar comentarios" : "mostrar comentarios"}} 
        {{ data.comments.length }}
      </button>
    </div>
    <div class="cotainer-comment">
      <input
        type="text"
        name="comment"
        id="comment"
        placeholder="write your comment"
        v-model="comment"
        v-on:keyup.enter.prevent="createComment()"
      />
      <button @click="createComment()">Comentar</button>
      <CommentsPost
        v-show="flagComment"
        v-for="(item, index) in data.comments"
        :key="index"
        :comments="item"
      />
    </div>
  </div>
</template>
<script>
import CommentsPost from "../commentInPostComponent/commentInPost";
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "post-card",
  props: ["data", "namePost"],
  components: { CommentsPost },
  data() {
    return {
      comment: "",
      flagComment: false
    };
  },
  methods: {
    showComments(){
      this.flagComment = !this.flagComment
    },
    createComment() {
        // create comment in the post
        axios
        .post(`${this.urlServer}posts/comment`, 
            {
                "comment": this.comment,
                "author": this.user._id,
                "postId": this.data._id
            }
            , {"headers": this.headers})
        .then( () => {
          this.$emit("loadData")
        })
    },
  },
  computed: mapState(["user", "urlServer", "headers"]),
};
</script>
<style lang="scss" scoped>
@import "postCard";
</style>
