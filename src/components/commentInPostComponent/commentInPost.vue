<template>
    <div class="comment-container">
        {{comments.comment}}
    </div>
</template>
<script>
    export default {
        name: "CommentInPost",
        props: ["comments"]
    }
</script>
<style>
    @import "./commentInPost.scss";
</style>