<script>
import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user';



export default {
    data() {
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
        ...mapActions(useUserStore, ['submitLogin', 'submitRegister']),
        submitLoginLocal() {
            this.submitLogin(this.loginForm)
        },
        submitRegisterLocal(){
            this.submitRegister(this.registerForm)
        }

    }
}
</script>

<template>
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
                        <form @submit.prevent="submitLoginLocal">
                            <div class="text-center mb-3">
                                <p>Sign in with:</p>

                                
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
                        <form @submit.prevent="submitRegisterLocal">
                            <!-- Name input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="registerName">Username</label>
                                <input type="text" v-model="registerForm.username" class="form-control" />
                            </div>

                            <!-- Username input -->
                            <div class="form-outline mb-4">
                                <label class="form-label">Email</label>
                                <input type="email" v-model="registerForm.email" class="form-control" />
                            </div>

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <label class="form-label">Password</label>
                                <input type="password" v-model="registerForm.password" class="form-control" />
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-4">
                                <label class="form-label">Phone Number</label>
                                <input type="number" v-model="registerForm.phoneNumber" class="form-control" />
                            </div>

                            <!-- Repeat Password input -->
                            <div class="form-outline mb-4">
                                <label class="form-label">Address</label>
                                <input type="text" v-model="registerForm.address" class="form-control" />
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

