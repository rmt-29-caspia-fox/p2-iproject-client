<script>
    import Button from './button.vue'
    import LoginGoogleAuth from './GoogleLogin.vue'
    import Form from './form.vue'

    export default{
        components: {
            Button,
            LoginGoogleAuth
        },
        data(){
            return {
                loginForm: {
                    email: '',
                    password: ''
                },
                registerForm: {
                    username: '',
                    email: '',
                    password: '',
                    phoneNumber: '',
                    address: ''
                }
            }
        },
        methods: {
            postLogin(){
                this.$emit('postLogin', this.loginForm)
            },
            postRegister(){
                this.$emit('postRegister', this.registerForm)
            },
            loginGoogle(val){
                console.log("meong meong");
            }
        }
    }
</script>

<template>
        <h1 class="d-flex justify-content-center">Login or Register</h1>
        <div class="row">
        <div
            class="col-12 col-md-6 loginblock d-flex justify-content-center"
        >
            <div>
            <h2>Login</h2>
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

                <!-- <button class="btn btn-primary btn-md" type="submit">
                 Login
                </button> -->
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
        <div
            class="col-12 col-md-6 loginblock d-flex justify-content-center"
            style="border-left: 1px solid #000"
        >
            <div>
            <h2>Register</h2>
            <form @submit.prevent="postRegister">
                <label>Username</label><br />
                <input
                type="text"
                class="form-control"
                placeholder="Username"
                v-model="registerForm.username"
                /><br />

                <label>Email</label><br />
                <input
                type="email"
                class="form-control"
                placeholder="Email"
                v-model="registerForm.email"
                required
                /><br />

                <label>Password</label><br />
                <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="registerForm.password"
                required
                /><br />

                <label>Phone Number</label><br />
                <input
                type="text"
                class="form-control"
                placeholder="Phone"
                v-model="registerForm.phoneNumber"
                /><br />

                <label>Address</label><br />
                <textarea
                class="form-control"
                placeholder="Address"
                v-model="registerForm.address"
                ></textarea
                ><br />

                <!-- <button class="btn btn-primary btn-md" type="submit">
                Register
                </button> -->
                <Button type="submit" class="btn btn-primary" buttonName="Register" />
                
            </form>
            </div>
        </div>
        </div>
</template>