<script>
    import Button from '../components/button.vue'
    import { mapWritableState, mapActions, mapState } from 'pinia'
    import {useCounterStore} from '../stores/counter'
    // import Form from '../components/form.vue'

    export default{
        components: {
            Button
        },
        data(){
            return{
                
            }
        },
        methods: {
            ...mapActions(useCounterStore, ['postRegisterStore']),
            ...mapActions(useCounterStore, ['fetchApiProvince']),
            ...mapActions(useCounterStore, ['fetchApiCity']),
            ...mapActions(useCounterStore, ['fetchApiDistrict']),
            ...mapActions(useCounterStore, ['fetchApiVillage']),
            async postRegister(){
                this.registerForm.address = 'PROVINSI ' + this.alamat.provinsi.name + ', ' + this.alamat.kota.name + ', KECAMATAN ' + this.alamat.kecamatan.name + ', ' + this.alamat.kelurahan.name
                let form = await this.postRegisterStore(this.registerForm)
                if(form){
                    this.$router.push({ path: '/?status="please check your email to verify your email"' })
                }
            },
            changeProvinsi(){
                this.fetchApiCity()
            },
            changeCity(){
                this.fetchApiDistrict()
            },
            changeDistrict(){
                this.fetchApiVillage()
            },
            changeVillage(){
                
            }
        },
        computed: {
            ...mapState(useCounterStore, ['address', 'alamat']),
            ...mapWritableState(useCounterStore, ['registerForm'])
        },
        created(){
            this.fetchApiProvince()
            // this.fetchApiCity()
        }
    }
</script>

<template>
        <div class="container">
        <div class="d-flex justify-content-center align-items-center" style="height: 100vh" >
            <div class="loginblock">
            <h2>Register</h2>
            <div class="mb-3">
                <router-link to="/">Back to Home</router-link><br />
                <router-link to="/login">or Login</router-link><br />
            </div>
            

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

                <label>Phone</label><br />
                <input
                type="text"
                class="form-control"
                placeholder="Phone"
                v-model="registerForm.phone"
                required
                /><br />

                <label>Provinsi</label><br />
                <select class="form-control" v-model="alamat.provinsi" @change.prevent="changeProvinsi">
                    <option value="0" disabled>Pilih Provinsi</option>
                    <option v-for="el in address.provinces" :key="el.id" :value="{id: el.id, name: el.name}">{{el.name}}</option>
                </select>
                <br />

                <label>Kota</label><br />
                <select class="form-control" v-model="alamat.kota" @change.prevent="changeCity">
                    <option value="0" disabled>Pilih Kota</option>
                    <option v-for="el in address.cities" :key="el.id" :value="{id: el.id, name: el.name}">{{el.name}}</option>
                </select>
                <br />

                <label>Kecamatan</label><br />
                <select class="form-control" v-model="alamat.kecamatan" @change.prevent="changeDistrict">
                    <option value="0" disabled>Pilih Kecamatan</option>
                    <option v-for="el in address.districts" :key="el.id" :value="{id: el.id, name: el.name}">{{el.name}}</option>
                </select>
                <br />

                <label>Kelurahan</label><br />
                <select class="form-control" v-model="alamat.kelurahan" @change.prevent="changeVillage">
                    <option value="0" disabled>Pilih Kelurahan</option>
                    <option v-for="el in address.villages" :key="el.id" :value="{id: el.id, name: el.name}">{{el.name}}</option>
                </select>
                <br />

                <Button type="submit" class="btn btn-primary" buttonName="Register" />
                
            </form>
            </div>
        </div>
        </div>
</template>