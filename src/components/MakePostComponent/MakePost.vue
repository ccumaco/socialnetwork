<template>
  <div class="container-create-post">
    <label for="post">¿QUE ESTAS PENSANDO?</label>
    <input
      type="text"
      v-model="content"
      name="post"
      placeholder="Cuentanos algo"
      v-on:keyup.enter="createPost()"
    />
    <button class="btn" @click="createPost" :disabled="content.length < 3">
      Crear publicación
    </button>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "MakePost",
  data() {
    return {
      content: "",
    };
  },
  computed: mapState(["urlServer", "headers", "user"]),
  methods: {
    createPost() {
      axios
        .post(
          `${this.urlServer}posts`,
          {
            content: this.content,
            author: this.user._id,
          },
          { headers: this.headers }
        )
        .then((response) => {
          this.allPost = response.data.data;
          this.$emit("loadNewPost");
        });
    },
  },
};
</script>
<style lang='scss'>
@import "./MakePost.scss";
</style>