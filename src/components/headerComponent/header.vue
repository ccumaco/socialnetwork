<template>
    <nav>
        <router-link to="/" v-if="user">Home</router-link>
        <router-link to="/profile" v-if="user">Profile</router-link>
        <router-link to="/register" v-if="!user">Registro</router-link>
        <router-link to="/login" v-if="!user">Login</router-link>
        <router-link
            class="logout"
            to="/login"
            v-on:click.native="$emit('logoutUser')"
            replace
            >Logout</router-link
        >
    </nav>
</template>
<script>
    import { mapState } from "vuex"
    export default {
        name:"headerComponent",
        computed: mapState(["urlServer","headers","user"])
    }
</script>
<style lang='scss'>
    @import "./header.scss";
</style>