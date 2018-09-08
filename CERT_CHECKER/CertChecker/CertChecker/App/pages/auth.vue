<template>


    <div class="container" style="margin-top:40px">
        <div class="row">
            <div class="col-sm-6 col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <strong> Sign in to continue</strong>
                    </div>
                    <div class="panel-body">
                        <form  role="form" action="#" method="POST" v-on:submit.prevent>
                            <fieldset>
                                <div class="row">
                                    <div class="center-block">
                                        <img class="profile-img"
                                             src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-10  col-md-offset-1 ">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="glyphicon glyphicon-user"></i>
                                                </span>
                                                <input class="form-control" placeholder="email" name="email" type="text" autofocus v-model.lazy="model.email">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="glyphicon glyphicon-lock"></i>
                                                </span>
                                                <input class="form-control" placeholder="password" name="password" type="password" v-model.lazy="model.password">
                                            </div>
                                        </div>

                                        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                                            <label class="form__label">Name</label>
                                            <input class="form__input" v-model.trim="$v.name.$model" />
                                        </div>
                                        <div class="error" v-if="!$v.name.required">Field is required</div>
                                        <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>



                                        <div class="form-group">
                                            <input type="submit" class="btn btn-lg btn-primary btn-block" value="Sign in" v-on:click="submitAuth()">
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div class="panel-footer ">
                        Don't have an account! <a href="#" onClick=""> Sign Up Here </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import { mapActions } from 'vuex';
    import loginValidator from "../system/validators/loginValidator"
    import { debug } from 'util';
    import { required, minLength, between } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                model: {
                    email: '',
                    password: '',
                    name:''
                }
            }            
        },
        methods: {
            ...mapActions(['auth']),
            submitAuth() {
                let v = loginValidator(this.model);
                debugger;

            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(4)
            }
        }
    }
</script>

<style scoped>
    .panel-heading {
        padding: 5px 15px;
    }

    .panel-footer {
        padding: 1px 15px;
        color: #A0A0A0;
    }

    .profile-img {
        width: 96px;
        height: 96px;
        margin: 0 auto 10px;
        display: block;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }
</style>