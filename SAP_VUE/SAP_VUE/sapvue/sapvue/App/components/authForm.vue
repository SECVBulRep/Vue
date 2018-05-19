<template>

    <form @submit.prevent="auth(model)" >
        <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="email" v-model.lazy="model.email" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" v-model.lazy="model.password" required>
              
            <button type="submit">Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
        </div>

        <div class="container" style="background-color:#f1f1f1">
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
    </form>
</template>

<script>

    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                model: {
                    email: '',
                    password: ''

                }
            }
        },
        methods: {
            ...mapActions(['auth'])
        }
    }
</script>

<style>
</style>