<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import CardList from '../components/CardList.vue'
import CardCompare from '../components/CardCompare.vue'

export default {
  components: {
    Navbar,
    Sidebar,
    CardList,
    CardCompare
  }
}
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>

</style>