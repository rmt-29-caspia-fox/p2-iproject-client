<script>
    import { mapState, mapActions, mapWritableState } from 'pinia'
    import {useCounterStore} from '../stores/counter'
    import Button from './button.vue'
    import axios from 'axios'
    export default {
        components: {
            Button
        },
        props: ['movie', 'isList'],
        data(){
            return {
                isUser: false,
                qrCode: 'halo'
            }
        },
        computed: {
            ...mapState(useCounterStore, ['clientUrl']),
        },
        methods: {
            showmore(val){
                this.$emit('showmore', val)
            },
            addlist(val){
                this.$emit('addlist', val)
            },
            deletelist(val){
                this.$emit('deletelist', val)
            },
            checkToken(){
                // this.getqrCode(this.movie.id)
                if(localStorage.access_token){
                    this.isUser = true
                }
            },
            async getqrCode(id){
                try {
                    const result = await axios({
                        method: 'get',
                        url: "https://api.happi.dev/v1/qrcode",
                        params: {
                            data: this.clientUrl + "/product/" + id,
                            apikey: "df0580CbdB0ktn5dnTHdeQsWknArCwi8smdVYZKb0DBjYWLpQ9FsLLd1",
                            dots: '000000',
                            bg: 'FFFFFF',
                            width: '20'
                        },
                    });

                    this.qrCode = result.data.qrcode
                } catch (err) {
                    console.log(err);
                }
            }
        },
        created(){
            this.getqrCode(this.movie.id)
            this.checkToken()
        }
    }
</script>

<template>
        <div class="card">
            <a href="" @click="showmore(movie.id)" >
                <img class="card-img-top" :src="movie.imageUrl" alt="">
            </a>
            <div class="card-body">
                <h3 class="card-title mb-3 text-center">{{movie.name}}</h3>
                <div style="display: flex; justify-content: space-around">
                    <Button buttonName="Show More" buttonClass="btn btn-primary btn-md" @click="showmore(movie.id)"/>
                    
                </div>
                <div class="d-flex-column justify-content-center align-items-center text-center mt-3">
                    <h5>QR Code</h5>
                    <img style="50px" :src="qrCode" />
                </div>
            </div>
        </div>
</template>