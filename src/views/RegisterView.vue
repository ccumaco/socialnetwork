<template>
    <div id="register">
        <div class="container-register">
            <h1>register</h1>
            <label for="name">Name</label>
            <input type="text" name="name" v-model="input.name" placeholder="name" />
            <label for="Age">age</label>
            <input type="text" name="Age" v-model="input.age" placeholder="Age" />
            <label for="email">email</label>
            <input type="text" name="email" v-model="input.email" placeholder="email" />
            <label for="password">password</label>
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            <button type="button" class="btn" v-on:click="register()">register</button>
            <div class="alert">
                {{alert}}
            </div>
            <p>¿Ya tienes una cuenta?</p>
            <router-link to="/login">Login</router-link>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex"
    import axios from "axios"
    export default {
        name: 'RegisterView',
        data() {
            return {
                alert: "",
                input: {
                    "name": "carlos",
                    "age": 22,
                    "email": "carloscumaco3@gmail.com",
                    "password": "123123"
                }
            }
        },
        methods: {
            // function to register user
            register() {
                if(this.input.name != "" && this.input.password != "") {
                    axios
                    .post(`${this.urlServer}auth/register`, this.input, {"headers": this.headers})
                    .then( () => {
                        this.$router.push("/login")
                        this.alert = "se a creado el usuario correctamente"
                    })
                    .catch((err) => {
                        this.alert = "hubo un error al crear el usuario"
                        console.log(err);
                    })
                    
                } else {
                    this.alert = "A name and password must be present";
                }
            }
        },
        computed: mapState(["urlServer","headers"])
    }
</script>
<style lang="scss">
    @import "@/styles/main.scss";
</style>