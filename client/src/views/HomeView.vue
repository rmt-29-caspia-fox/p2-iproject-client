<template>
  <form class="form">
    <input type="text" v-model="query" class="form-control"/>
    <button class="btn btn-primary" @click.prevent="emitSrc">Search</button>
  </form>
</template>

<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

  export default{
    data(){
      return {
        query:""
      }
    },
    methods:{
      ...mapActions(useCounterStore,['searchG']),
      emitSrc(){
        this.searchG(this.query);
      }
    }
  }
</script>