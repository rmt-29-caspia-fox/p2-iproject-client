<script>
    import Navbar from '../components/Navbar.vue'
    import { mapState, mapActions, mapWritableState } from 'pinia'
    import {useCounterStore} from '../stores/counter'
    import Card from '../components/cards.vue'
    // import Pagination from '../components/pagination.vue'
    export default {
        // props: ['movies'],
        components: {
            Card,
            // Pagination,
            Navbar
        },
        data(){
            return {
                pagenow: '1',
                genreId: '0',
                search: ''
            }
        },
        methods: {
            ...mapActions(useCounterStore, ['fetchMovieStore']),
            // ...mapActions(useCounterStore, ['postWhitelist']),
            // ...mapActions(useCounterStore, ['paginationStore']),
            // ...mapActions(useCounterStore, ['fetchGenreStore']),
            showmore(id){
                this.$router.push(`/product/${id}`)
            },
            addlist(id){
                this.postWhitelist(id)
            },
            changePage(id){
                this.$router.push(`/${id}`)
            },
            getPageNow(){
                if(this.$route.params.id){
                    this.pagenow = this.$route.params.id
                }
            },
            changeGenre(id){
                // console.log(id);
                // this.fetchMovieStore(this.pagenow, id)
                this.$router.push(`?genre=${id}`)
                this.fetchMovieStore(this.pagenow, this.genreId)
            },
            checkFetch() {
                if(this.$route.query.genre){
                    this.genreId = this.$route.query.genre
                }
                if(this.$route.query.search){
                    this.genreId = this.$route.query.search
                }
                this.getPageNow()
                // this.paginationStore()
                this.fetchMovieStore(this.pagenow, this.genreId, this.search)
                // this.fetchGenreStore()
            }
        },
        computed: {
            ...mapState(useCounterStore, ['movies', 'pageData', 'genres']),
            // ...mapWritableState(useCounterStore, ['genreIdStore'])
        },
        created(){
            this.checkFetch()
        }
    }
</script>

<template>

    <Navbar :navbar='navbar' :userData="userData" @changePage="changePage" />

    <div class="container maincontent">

        <h1 class="text-center">Daftar Produk</h1>
        <!-- <Pagination class="d-flex justify-content-center mb-3" :pages="pageData" @changePage="changePage" :pagenow="pagenow" /> -->
        <!-- <div class="d-flex justify-content-center  mb-4">
            <div class="mb-1 text-center">
                <label class="mb-2">Select Genre</label><br />
                <select class="ml-4 form-control" style="width: 200px;" v-model="genreId" @change.prevent="changeGenre(genreId)">
                    <option value="0">All</option>
                    <option v-for="el in genres" :key="el.id" :value="el.id">{{el.name}}</option>
                </select>
            </div>
        </div> -->

        <div v-if="movies.length > 0" class="row">
            <div class="col-3" v-for="el in movies">
                <Card :movie="el" @showmore="showmore" :isList="false" @addlist="addlist" />
            </div>

        </div>
        
        <div v-else>
            <div class="container text-center mt-5">
                <h2>Sorry no data</h2>
            </div>
            
        </div>
    </div>
</template>