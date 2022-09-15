<template>
    <div class="form-container">
        <h1>¿ Deseas actualizar tu perfil? </h1>
        <label for="name">Name</label>
        <input @change="avalibleSend()" type="text" name="name" v-model="user.name" placeholder="name" />
        <label for="Age">age</label>
        <input @change="avalibleSend()" type="number" name="Age" v-model="user.age" placeholder="Age" />
        <label for="email">email</label>
        <input @change="avalibleSend()" type="email" name="email" v-model="user.email" placeholder="email" />
        <label for="role">role</label>
        <input @change="avalibleSend()" type="text" name="role" v-model="user.role" placeholder="role" />
        <button @click="updateProfile" :disabled='avalibleSend()'>update profile</button>
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
            avalibleSend(){
                if (this.user.email.length > 10 && this.user.age < 18 && this.user.name.length > 4 && this.user.role.length > 4) {
                    return true
                }
                return false
            },
            updateProfile(){
                axios
                .patch(`${this.urlServer}users/${this.user._id}`, this.user,{"headers": this.headers})
                .then( () => {
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