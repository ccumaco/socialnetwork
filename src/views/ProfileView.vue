<template>
    <div id="secure">
        <h1>Profile {{user.username}}</h1>
        <p>
            This is a secure area
        </p>
    </div>
</template>

<script>
    export default {
        name: 'ProfileView',
        data() {
            return {
                user: this.$parent.globalUser
            };
        }
    }
</script>

<style scoped>
</style>