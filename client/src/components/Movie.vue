<script>
    import Button from './button.vue'
    import Table from './table.vue'
    export default {
        props: ['movies'],
        components: {
            Button,
            Table
        },
        data(){
            return {

            }
        },
        methods: {
            addMovie(){
                this.$emit('addMovie', 'addMovie')
            },
            editMovie(val){
                this.$emit('editMovie', val)
            }
        },
    }
</script>

<template>
    <h1 class="d-flex justify-content-center">Movie</h1>
    <div class="row">
    <div class="col-12 d-flex justify-content-center">
        <div>
        <Button buttonName="Add Movie" buttonClass="btn btn-primary mb-4" @click.prevent="addMovie"/>
        <Table tableType="movie" :tableData="movies" @edit="editMovie"/>
        

        </div>
    </div>
    </div>
</template>