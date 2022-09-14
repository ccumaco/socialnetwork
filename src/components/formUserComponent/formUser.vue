<template>
    <div class="form-container">
        <h1>¿ Deseas actualizar tu perfil? </h1>
        <label for="name">Name</label>
        <input type="text" name="name" v-model="user.name" placeholder="name" />
        <label for="Age">age</label>
        <input type="text" name="Age" v-model="user.age" placeholder="Age" />
        <label for="email">email</label>
        <input type="text" name="email" v-model="user.email" placeholder="email" />
        <label for="role">role</label>
        <input type="text" name="role" v-model="user.role" placeholder="role" />
        <button @click="updateProfile">update profile</button>
        <p>{{alert}}</p>
    </div>
</template>
<script>
    import axios from "axios"
    import { mapState } from "vuex"
    export default {
        name: 'formUser',
        data(){
            return{
                alert: ""
            }
        },
        methods:{
            updateProfile(){
                axios
                .patch(`${this.urlServer}users/${this.user._id}`, this.user,{"headers": this.headers})
                .then( (response) => {
                    console.log(response);
                    this.alert = "actualizado correctamente"
                })
            }
        },
        computed: mapState(["urlServer","headers","user"])
    }
</script>
<style lang='scss'>
    @import "formUser.scss";
</style>