<script>
    import { mapState, mapActions } from 'pinia'
    import {useCounterStore} from '../stores/counter'
    import Card from '../components/cards.vue'
    export default {
        components: {
            Card
        },
        computed: {
            ...mapState(useCounterStore, ['whitelistData'])
        },
        methods: {
            ...mapActions(useCounterStore, ['getWhitelist']),
            ...mapActions(useCounterStore, ['deletelistStore']),
            showmore(id){
                this.$router.push(`/movie/${id}`)
            },
            deletelist(id){
                this.deletelistStore(id)
            }
        },
        created(){
            this.getWhitelist()
        }
    }
</script>

<template>
    <h1 class="d-flex justify-content-center">Whitelist (or Wishlist)</h1>
    <div class="row">
        <div v-if="whitelistData.length > 0" class="col-3" v-for="el in whitelistData">
            <Card :movie="el.Movie" @showmore="showmore" :isList="true" @deletelist="deletelist" />
        </div>

        <div v-else>
            <div class="container text-center mt-5">
                <h2>No movie(s) in your wishlist</h2>
            </div>
            
        </div>
    </div>
</template>