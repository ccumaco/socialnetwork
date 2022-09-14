<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/register">Registro</router-link>
        <router-link to="/login">Login</router-link>
    </nav>
</template>
<script>
    export default {
        name:"headerComponent"
    }
</script>
<style lang='scss'>
    @import "./header.scss";
</style>