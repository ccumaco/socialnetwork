<template>
    <div id="register">
        <div class="container-register">
            <h1>register</h1>
            <label for="username">Name</label>
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
            <label for="Age">age</label>
            <input type="text" name="Age" v-model="input.age" placeholder="Age" />
            <label for="email">email</label>
            <input type="text" name="email" v-model="input.email" placeholder="email" />
            <label for="password">password</label>
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            <button type="button" v-on:click="register()">register</button>
            <div class="alert">
                {{alert}}
            </div>
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
                    "username": "carlos",
                    "age": 22,
                    "email": "carloscumaco3@gmail.com",
                    "password": "123123"
                }
            }
        },
        methods: {
            register() {
                console.log(this.urlServer);
                if(this.input.username != "" && this.input.password != "") {
                    axios
                    .post(`${this.urlServer}users`, this.input, {"headers": this.headers})
                    .then( () => {
                        this.$router.push("/login")
                        this.alert = "se a creado el usuario correctamente"
                    })
                    .catch((err) => {
                        this.alert = "hubo un error al crear el usuario"
                        console.log(err);
                    })
                    
                } else {
                    this.alert = "A username and password must be present";
                }
            },
            createUserJson(newUser){
                try {
                    this.$parent.users.push(newUser)
                    this.$parent.globalUser = newUser
                    return true
                } catch (error) {
                    this.alert = "user could not be created"
                    return false
                }
            }
        },
        computed: mapState(["urlServer","headers"])
    }
</script>
<style lang="scss">
    @import "@/styles/main.scss";
</style>