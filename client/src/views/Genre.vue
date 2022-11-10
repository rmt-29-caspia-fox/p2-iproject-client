<script>
    import Table from '../components/table.vue'
    import Button from '../components/button.vue'
    import { mapState, mapActions } from 'pinia'
    import {useCounterStore} from '../stores/counter'
    export default {
        components: {
            Button,
            Table
        },
        computed: {
            ...mapState(useCounterStore, ['genres'])
        },
        methods: {
            ...mapActions(useCounterStore, ['fetchGenreStore'])
        },
        created() {
            this.fetchGenreStore()
        },
    }
</script>

<template>
    <h1 class="d-flex justify-content-center">Genre</h1>
    <div class="row">
    <div class="col-12 d-flex justify-content-center">
        <div>
        <Table tableType="genre" :tableData="genres"/>
        </div>
    </div>
    </div>
</template>