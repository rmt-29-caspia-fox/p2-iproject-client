<script>
import { mapState, mapWritableState } from 'pinia';
import { useAdminStore } from '../stores/admin';


export default {
  emit:['searchStatus'],
  data() {
    return {
      search: this.state ? this.state : 'request'
    };
  },
  computed:{
    ...mapWritableState(useAdminStore,['state'])
  },
  watch:{
    search(newValue,oldValue){
      if(newValue!==oldValue){
        this.changeStatus()
        // this.state = this.search
      }
      // else if(this.state){
      //   this.search = this.state
      // }
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/admin/login");
    },
    changeStatus() {
      this.$emit('searchStatus',this.search)
      // this.search = 'request'
    },
  },
};
</script>

<template>
  <nav class="navbar-sidebar bg-linier-1 text-light" id="nav">
    <div class="nav-items">
      <div class="item-list mb-2">
        <select
          class="form-select form-select-sm text-uppercase"
          v-if="this.$route.name === 'cms-table'"
          style="width: 100%"
          v-model="search"

        >
          <option value="">All</option>
          <option value="request">request</option>
          <option value="waiting">waiting</option>
          <option value="onprogres">onprogres</option>
          <option value="done">done</option>
        </select>
      </div>

      <div class="border-bottom border-top">
        <a class="logout" @click.prevent="logout">
          <div class="icons me-1">
            <i class="fas fa-sign-out-alt"></i>
          </div>
          <span class="text-light">Logout</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
