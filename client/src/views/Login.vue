<script>
import { mapActions} from 'pinia'
import { useGameStore } from '../stores/game'

export default {
	data (){
		return {
			email: '',
			password: ''
		}
	},
	created(){
		
	},
	methods: {
		...mapActions(useGameStore,['loginHandler']),
		formLogin(){
			const payload = {
				email: this.email,
				password: this.password
			}
			this.loginHandler(payload)
		}
	}
}
</script>

<template>
  <section class="container">
    <div>
      <span class="container-label">Masuk</span>
      <form @submit.prevent="formLogin">
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
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
				<span class="no-akun">Tidak punya akun? 
					<a href="" class="no-akun-link">
						Daftar disini	
					</a>
				</span>
				<br>
        <button type="submit" class="btn btn-primary button-submit">Masuk</button>
      </form>
    </div>
  </section>
</template>

<style></style>
