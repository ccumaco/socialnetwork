<template>
  <div id="app">
      <div id="nav">
          <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
      </div>
      <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>   

  export default {
      name: 'App',
      data() {
          return {
              authenticated: false,
              globalUser: "",
              users: []
          }
      },
      mounted() {
        const users = require("../src/users.json")
        this.users= users.users
          if(!this.authenticated && this.$route.fullPath != "/register") {
              this.$router.replace({ name: "login" });
          }
      },
      methods: {
          setAuthenticated(status) {
              this.authenticated = status;
          },
          logout() {
              this.authenticated = false;
          }
      }
  }
</script>

<style lang='scss' scope>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
    }
</style>