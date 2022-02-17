<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign up</h1>
                    <p class="text-xs-center">
                        <a href="">Have an account?</a>
                    </p>

                    <ul class="error-messages">
                        <li>That email is already taken</li>
                    </ul>

                    <form @submit.prevent="submit">
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.username" />
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="user.email" />
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="user.password" />
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { register } from '@/api/auth'
export default Vue.extend({
    name: 'login',
    data() {
        return {
            user: {
                username: '',
                email: '',
                password: '',
            },
        }
    },
    methods: {
        async submit() {
            let params = {
                user: this.user,
            }
            try {
                const data = await register(params)
                console.log(data.user)
            } catch (error) {
                console.log('提交失败：' + error)
            }
        },
    },
})
</script>
