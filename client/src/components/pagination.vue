<script>
    export default {
        props: ['pages', 'pagenow'],
        data(){
            return {
                
            }
        },
        methods: {
            changePage(id){
                this.$emit('changePage', id)
            }
        }
    }
</script>

<template>
    <div>
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="" @click="changePage(+pagenow - 1)">Previous</a></li>
            <li class="page-item" v-for="el in pages" :key="el">
                <span v-if="el === +pagenow">
                    <a href="" @click="changePage(el)" class="page-link selected-page">{{el}}</a>
                </span>
                <span v-else>
                    <a href="" @click="changePage(el)" class="page-link">{{el}}</a>
                </span>
            </li>
            <li class="page-item"><a class="page-link" href="" @click="changePage(+pagenow + 1)">Next</a></li>
        </ul>
    </div>
</template>

<style>
    a.selected-page, a.selected-page:hover {
        color: white;
        background-color: blue;
    }
</style>