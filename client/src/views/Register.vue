<script>
import { mapActions} from 'pinia'
import { useGameStore } from '../stores/game'

export default {
	data(){
		return {
			userName: '',
			email: '',
			password: '',
			phoneNumber: ''
		}
	},
	methods: {
		...mapActions(useGameStore,['registerHandler']),
		formRegister(){
			const payload = {
				userName: this.userName,
				email: this.email,
				password: this.password,
				phoneNumber: this.phoneNumber
			}
			this.registerHandler(payload)
		}
	}
}
</script>

<template>
	<section class="container form">
    <div>
      <span class="container-label">Sign Up</span>
      <form @submit.prevent="formRegister">
				<div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Username</label
          >
          <input 
						v-model="userName"
						type="text" class="form-control" id="exampleInputEmail1" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input 
						v-model="email"
						type="email" class="form-control" id="exampleInputEmail1" />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
						v-model="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
				<div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Phone Number</label
          >
          <input 
						v-model="phoneNumber"
						type="number" class="form-control" id="exampleInputEmail1" />
        </div>
				<br>
        <button type="submit" class="btn btn-primary button-submit">Sign Up</button>
      </form>
    </div>
  </section>
</template>