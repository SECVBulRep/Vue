<template>
    <div>
        <notifications group="auth-notification" position="bottom right"> </notifications>
        <form @submit.prevent="submit()">
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="email" v-model.lazy="model.email">

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" v-model.lazy="model.password">

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
    </div>
</template>

<script>

    import { mapActions } from 'vuex'
    import valid from '../system/validators'


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
            ...mapActions(['auth']),
            submit() {

                let v = valid(this.model);

                if (v.isValid) {
                    this.auth(this.model);
                } else {
                  
                    let text = "Неизвестная ошибка";
                    switch (v.errors.status) {
                        case 1:
                            text = v.errors.email;
                            break;
                        case 2:
                            text = v.errors.email;
                            break;
                        case 3:
                            text = v.errors.password;
                            break;
                    }
                    this.$notify({
                        group: 'auth-notification',
                        title: 'Внимание',
                        text: text,
                        type: "warning"
                    });
                }
            }
        }
    }
</script>

<style>
</style>