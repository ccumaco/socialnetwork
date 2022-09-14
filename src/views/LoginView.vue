<template>
    <div id="login">
        <div class="container-login">
            <h1>LOGIN</h1>
            <label for="username">username</label>
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
            <label for="password">password</label>
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            <button type="button" v-on:click="login()">Login</button>
            <div class="alert">
                {{alert}}
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'LoginView',
        data() {
            return {
                alert: "",
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    // const userLogin = {
                    //     "username": this.input.username,
                    //     "password": this.input.password
                    // }
                    // login


                } else {
                    this.alert = "A username and password must be present";
                }
            },
            searchInJson(userLogin){
                let userFinded = false
                this.$parent.users.forEach(user => {
                    if (user.username == userLogin.username && user.password == userLogin.password) {
                        this.$parent.globalUser = userLogin
                        userFinded = true
                    }
                });
                return userFinded
            }
        }
    }
</script>
<style lang="scss">
    @import "@/styles/main.scss";
</style>