<script>
import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user'

export default {
    data() {
        return {
            newName: '',
            newEmail: '',
            newPassword: ''
        }
    },

    created() {
        this.checkAccessToken()
    },

    methods: {
        ...mapActions(useUserStore, ['registerHandler', 'checkAccessToken']),
        registerSubmit() {
            this.registerHandler({
                name: this.newName,
                email: this.newEmail,
                password: this.newPassword
            })
        }

    }
}
</script>

<template class="font-mono bg-gray-400">
		<!-- Container -->
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style="background-image: url('https://source.unsplash.com/K4mSJ7kc0As/600x800')"
					></div>
					<!-- Col -->
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Welcome New User!</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" @submit.prevent="registerSubmit">
                            <div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Fullname
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="name"
                                    v-model="newName"
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Email
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="email"
                                    v-model="newEmail"
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Password
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="password"
                                    v-model="newPassword"
								/>
							</div>
							
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-rose-600 rounded-full hover:bg-rose-700 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Register
								</button>
                                
							</div>
                            <div class="mb-6 text-center">
								<router-link to="/" type="button"
									class="w-full px-4 py-2 font-bold text-black bg-gray-500 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline"
									
								>
									Home
                            </router-link>
                                
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<router-link to="/login"
									class="inline-block text-sm text-rose-500 align-baseline hover:text-rose-800"
									
								>
									Already have an account? Log in
                            </router-link>
							</div>
							
						</form>
					</div>
				</div>
			</div>
		</div>
</template>