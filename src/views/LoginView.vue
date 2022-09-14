<template>
    <div id="login">
        <div class="container-login">
            <h1>LOGIN</h1>
            <label for="email">email</label>
            <input type="text" name="email" v-model="input.email" placeholder="email" />
            <label for="password">password</label>
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            <button type="button" v-on:click="login()">Login</button>
            <div class="alert">
                {{alert}}
            </div>
            <p>¿no tienes una cuenta?</p>
            <router-link to="/register">Registrate</router-link>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex"
    import axios from "axios"
    
    export default {
        name: 'LoginView',
        data() {
            return {
                alert: "",
                input: {
                    "email": "carloscumaco3@gmail.com",
                    "password": "123123"
                }
            }
        },
        methods: {
            login() {
                if(this.input.email != "" && this.input.password != "") {
                    axios
                    .post(`${this.urlServer}auth/login`, this.input, {"headers": this.headers})
                    .then( (response) => {
                        this.$store.state.user = response.data.data
                        this.$emit("authenticated", true);
                        this.$router.replace({name: "HomeView"})
                        this.alert = "se a creado el usuario correctamente"
                    })
                    .catch((err) => {
                        this.alert = "hubo un error al crear el usuario"
                        console.log(err);
                    })
                } else {
                    this.alert = "A email and password must be present";
                }
            },
        },
        computed: mapState(["urlServer","headers"])
    }
</script>
<style lang="scss">
    @import "@/styles/main.scss";
</style>