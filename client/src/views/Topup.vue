<script>
    import { mapState, mapActions } from 'pinia'
    import {useCounterStore} from '../stores/counter'
    import Navbar from '../components/Navbar.vue'
    export default {
        components: {
            Navbar
        },
        props: [''],
        data(){
            return {
                nominal: 0
            }
        },
        methods: {
            ...mapActions(useCounterStore, ['topup']),
            
        }
    }
</script>

<template>
    <Navbar />

    <div class="container" >
        <div class="d-flex justify-content-center" style="height: 100vh; padding: 200px">
            <div class="loginblock">
                <h2>Isi Saldo</h2>
                <div class="mb-3">
                    <form @submit.prevent="topup(nominal)">
                        <input type="number" class="form-control" v-model="nominal" /><br />
                        <button class="btn btn-primary">Isi Saldo</button>
                    </form>
                </div>
            </div>

        </div>
    </div>


    
</template>