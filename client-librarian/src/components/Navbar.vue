<script>
// import { mapActions, mapState, mapWritableState } from 'pinia';
// import { useCustomerStore } from '../stores/customer';
// import { useProductStore } from '../stores/product';

//  export default {
//   computed: {
//     ...mapState(useCustomerStore, ['isLogin']),
//     ...mapWritableState(useProductStore, ['filter'])
//   },
//   methods: {
//     ...mapActions(useCustomerStore, ['logoutCustomer'])
//   }
//  }
</script>
<template>
  <nav class="justify-between px-32 py-4 w-full bg-white items-center flex pt-4 sticky z-10 top-0" style="border-bottom: solid black 0.75px">
    <div class="font-bold text-3xl align-middle"> <router-link to="/">Uniklo</router-link></div>
    <div class="gap-6 flex justify-end items-center">
      <!-- <div class="">
        <form action="" class="px-2 flex items-center" style="border: solid black 0.75px">
          <input type="text" placeholder="search product by name"
            class="border-black align-middle px-2 focus:outline-none text-sm"
            style="padding-bottom: 4px; padding-top: 4px" />
          <a href=""><i class="iconoir-search text-3xl align-middle"></i></a>
        </form>
      </div> -->
      <div class="gap-8 align-middle flex">
        <router-link to="" class="flex gap-1"><i class="iconoir-home text-2xl align-middle"></i> Home </router-link>
        <router-link to="" class="flex gap-1"><i class="iconoir-book text-2xl align-middle"></i> Collections </router-link>
        <router-link to="" class="flex gap-1"><i class="iconoir-refresh-circular text-2xl align-middle"></i> Circulation </router-link>
        <router-link to="" class="flex gap-2"><i class="iconoir-group text-2xl align-middle"></i> Events </router-link>
        <div style="border-left: solid black 0.75px"></div>
        <router-link to="" class="flex gap-1"><i class="iconoir-log-out text-2xl align-middle"></i> Logout </router-link>

      </div>
    </div>
  </nav>
</template>
