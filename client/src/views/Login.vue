<script>
    import Button from '../components/button.vue'
    import { mapWritableState, mapActions } from 'pinia'
    import {useCounterStore} from '../stores/counter'
    // import LoginGoogleAuth from '../components/GoogleLogin.vue'
    import LoginGoogleAuth from '../components/GoogleLogin.vue'

    export default{
        components: {
            Button,
            LoginGoogleAuth
        },
        methods: {
            ...mapActions(useCounterStore, ['postLoginStore']),
            async postLogin(){
                const isLogin = await this.postLoginStore(this.loginForm)
                if(isLogin){
                    this.$router.push({ path: '/' })
                    this.$swal('Login Success');
                }
            },
        },
        computed: {
            ...mapWritableState(useCounterStore, ['loginForm'])
        }
    }
</script>

<template>
    <div class="container" >

    <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
        <div class="loginblock">
        <h2>Login</h2>
        <div class="mb-3">
            <router-link to="/">Back to Home</router-link><br />
            <router-link to="/register">or Register</router-link><br />
        </div>
        <form @submit.prevent="postLogin">
            <label>Email (*)</label><br />
            <input
            type="text"
            class="form-control"
            placeholder="Email"
            v-model="loginForm.email"
            required
            /><br />
            <label>Password (*)</label><br />
            <input
            type="password"
            class="form-control"
            placeholder="Pasword"
            v-model="loginForm.password"
            required
            /><br />

            <Button type="submit" class="btn btn-primary" buttonName="Login" />

            <div style="text-align: center">
            -- Or -- <br /><br />
            <div style="margin: 0 auto">
                <LoginGoogleAuth />
            </div>
            </div>
        </form>
        </div>
    </div>

    </div>
</template>