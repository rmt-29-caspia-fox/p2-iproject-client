<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user';

export default {
    data() {
        return {
            loginForm: {
                email: null,
                password: null
            },
            registerForm: {
                username: null,
                email: null,
                password: null,
                latitude: null,
                longitude: null
            }
        }
    },
    methods: {
        ...mapActions(useUserStore, ['login', 'register', 'handleCredentialResponse']),
        loginLocal() {
            this.login(this.loginForm)
        },

        registerLocal() {
            this.register(this.registerForm)
        },
        handleCredentialResponseLocal(response){
            this.handleCredentialResponse(response)
        },
        success(pos) {
            const crd = pos.coords;
            this.registerForm.latitude = crd.latitude
            this.registerForm.longitude = crd.longitude
        },

        error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
    },
    created() {
        const options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(this.success, this.error, options)
    }
}
</script>

<template>
    <!-- Login -->
    <section class="container margin-navbar">
        <div class="row justify-content-center align-content-center">
            <div class="col-6">

                <!-- Pills navs -->
                <ul class="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                    <li class="nav-item active" role="presentation">
                        <a class="nav-link active" id="tab-login" data-bs-toggle="tab" href="#pills-login">Login</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="tab-register" data-bs-toggle="tab" href="#pills-register">Register</a>
                    </li>
                </ul>
                <!-- Pills navs -->

                <!-- Pills content -->
                <div class="tab-content">
                    <div class="tab-pane active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form @submit.prevent="loginLocal">
                            <div class="text-center mb-3">
                                <p>Sign in with:</p>

                                <div>
                                    <GoogleLogin :callback="handleCredentialResponse" />
                                </div>
                            </div>

                            <p class="text-center">or:</p>

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="loginName">Email</label>
                                <input type="email" id="loginName" class="form-control" v-model="loginForm.email" />
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="loginPassword">Password</label>
                                <input type="password" id="loginPassword" class="form-control"
                                    v-model="loginForm.password" />
                            </div>

                            <!-- 2 column grid layout -->
                            <div class="row mb-4">
                                <div class="col-md-6 d-flex justify-content-center">
                                    <!-- Checkbox -->
                                    <div class="form-check mb-3 mb-md-0">
                                        <input class="form-check-input" type="checkbox" value="" id="loginCheck"
                                            checked />
                                        <label class="form-check-label" for="loginCheck"> Remember me </label>
                                    </div>
                                </div>

                                <div class="col-md-6 d-flex justify-content-center">
                                    <!-- Simple link -->
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                            <!-- Register buttons -->
                            <div class="text-center">
                                <p>Not a member? <a href="#!">Register</a></p>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                        <form @submit.prevent="registerLocal">

                            <p class="text-center">or:</p>

                            <!-- Name input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="registerName">Username</label>
                                <input type="text" id="registerName" class="form-control"
                                    v-model="registerForm.username" />
                            </div>

                            <!-- Username input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="registerUsername">Email</label>
                                <input type="email" id="registerUsername" class="form-control"
                                    v-model="registerForm.email" />
                            </div>

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="registerEmail">Password</label>
                                <input type="password" id="registerEmail" class="form-control"
                                    v-model="registerForm.password" />
                            </div>

                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
                        </form>
                    </div>
                </div>
                <!-- Pills content -->
            </div>
        </div>

    </section>
</template>