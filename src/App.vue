<template>
  <div id="app">
    <headerComponent v-if="authenticated" @logoutUser="logout()"/>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
import headerComponent from "@/components/headerComponent/header";
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      globalUser: "",
      users: [],

    };
  },
  components: {
    headerComponent,
  },
  mounted() {
    const users = require("../src/users.json");
    this.users = users.users;
    if (
      !this.authenticated &&
      this.$route.fullPath != "/register" &&
      this.$route.fullPath != "/login"
    ) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {     
      this.authenticated = false;
    },
  },
};
</script>

<style lang='scss' scope>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
}
</style>