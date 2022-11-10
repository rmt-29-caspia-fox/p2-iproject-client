<script>
    import Table from './table.vue'
    export default {
        props: ['logs'],
        components: {
            Table
        },
        data(){
            return {

            }
        },
        methods: {
            
        }
    }
</script>

<template>
    <h1 class="d-flex justify-content-center">Logs</h1>
    <div class="row">
    <div class="col-12 d-flex justify-content-center">
        <div>
        <!-- <table>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            </tr>
            <tr v-for="el in logs" :key="el.id">
            <td>{{ el.id }}</td>
            <td>{{ el.title }}</td>
            <td>{{ el.description }}</td>
            <td>{{ el.createdAt }}</td>
            </tr>
        </table> -->
        <Table tableType="logs" :tableData="logs"/>
        </div>
    </div>
    </div>
</template>