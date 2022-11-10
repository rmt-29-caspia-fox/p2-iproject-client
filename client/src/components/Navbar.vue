<script>
  import { mapState, mapActions, mapWritableState } from 'pinia'
  import {useCounterStore} from '../stores/counter'
  export default{
    computed: {
      ...mapState(useCounterStore, ['isMember', 'userData']),
      ...mapWritableState(useCounterStore, ['pagenow'])
    },
    data(){
      return{
        searchvalue: ''
      }
    },
    methods: {
      ...mapActions(useCounterStore, ['checkToken']),
      ...mapActions(useCounterStore, ['fetchUserStore']),
      ...mapActions(useCounterStore, ['fetchMovieStore']),
      logout(){
          localStorage.removeItem('access_token')
      },
      search(){
        this.$router.push(`/?search=${this.searchvalue}`)
        this.fetchMovieStore(this.pagenow, null, this.searchvalue)
      },
      changePage(){
        this.$router.push(`/`)
        this.fetchMovieStore(1, null, null)
      }
    },
    created(){
      this.checkToken()
      this.fetchUserStore()
      this.fetchMovieStore()
    }
  }
</script>

<template>
  <nav>
    <span class="logo"><router-link to="/" @click="changePage" id="logo" ><img src="../assets/logo.png" style="max-width: 100px;"/></router-link></span>
    
    <!-- <span>
      <router-link to="/">Home</router-link>
      <span v-if="isMember === true">
        <router-link to="/whitelist">Whitelist</router-link>
      </span>
      
    </span> -->

    <span class="d-flex align-items-center">
      <!-- <span class="md-form active-cyan active-cyan-2">
        <form @submit.prevent="search">
          <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="searchvalue">
        </form>
      </span> -->
      <span v-if="isMember === true">
        <router-link to="/login">Halo {{userData.username}}, saldo anda Rp. {{userData.balance}}</router-link>
        <router-link to="/topup">Top Up</router-link>
        <a href="" @click="logout">Logout</a>
      </span>
      <span v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </span>
      
      
    </span>
  </nav>
</template>
