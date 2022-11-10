<script>
    import { mapState, mapActions } from 'pinia'
    import {useCounterStore} from '../stores/counter'
    import Navbar from '../components/Navbar.vue'
    export default{
        components: {
            Navbar
        },
        data(){
            return {
                formBuy: {
                    idSubproduct: {
                        id: '',
                        price: ''
                    },
                    phone: ''
                },
                price: ''
            }
        },
        computed: {
            ...mapState(useCounterStore, ['isMember']),

            ...mapState(useCounterStore, ['movie', 'qrCode'])
        },
        methods: {
            ...mapActions(useCounterStore, ['fetchMovieByIdStore']),
            ...mapActions(useCounterStore, ['getqrCode']),
            ...mapActions(useCounterStore, ['postBuy']),
            buyProduct(){
                try {
                    this.postBuy(this.formBuy.idSubproduct.id, this.formBuy.phone)
                    this.$swal('Buy Product Success');
                } catch (err) {
                    this.$swal(err);
                }
            }
        },
        created(){
            this.getqrCode(this.$route.params.id)
            this.fetchMovieByIdStore(this.$route.params.id)
        }
    }
</script>

<template>
    <Navbar />
    <div class="container maincontent">
        <h1 class="text-center">{{movie.name}}</h1>
        <div class="row">
            <div class="col-4">
                <div class="mb-5">
                    <img :src="'/' + movie.imageUrl" style="width: 100%" />
                </div>
                <div class="text-center">
                    <h5>QR COde</h5>
                    <img :src="qrCode" />
                </div>
            </div>
            <div class="col-8">
                <form @submit.prevent="buyProduct">
                    <div class="mb-4">
                        <h5>Description</h5>
                        <p>{{movie.description}}</p>
                    </div>
                    <div class="mb-4">
                        <h5>Masukkan Nomor</h5>
                        <input type="text" class="form-control" style="width: 200px" v-model="formBuy.phone" />
                    </div>
                    <div class="mb-4">
                        <h5>Pilih Produk</h5>
                        <select v-model="formBuy.idSubproduct" class="form-control" style="width: 200px">
                            <option :value="{id: '', price: ''}" disabled>Pilih Harga</option>
                            <option v-for="el in movie.Subproducts" :key="el.id" :value="{id: el.id, price: el.price}">{{el.name}}</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <h5>Harga</h5>
                        <h4>Rp. {{formBuy.idSubproduct.price}}</h4>
                    </div>
                    <span v-if="isMember">
                        <button class="btn btn-primary">Beli</button>
                    </span>
                    <span v-else>
                        <router-link to="/login" class="btn btn-primary">Login Dulu</router-link>
                    </span>
                </form>
            </div>
        </div>
        
        
    </div>
    
</template>