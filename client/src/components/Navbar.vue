<script>
import {mapWritableState} from 'pinia'
import {useIndexStore} from '@/stores/index'
import {getAuth} from 'firebase/auth'
export default {
  computed: {
    ...mapWritableState(useIndexStore, ['isLogin'])
  },
  methods: {
    logoutHandler() {
      getAuth().signOut()
      localStorage.clear()
      this.navigate('/login')
      this.isLogin = false
      Swal.fire({
          title: "Success",
          text: "Logout Success",
          icon: "success",
        });
    },
    navigate(page) {
      this.$router.push(page) 
    }
  }
}

</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="bg-gray-800">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex justify-between">
          <div
            class="mx-w-10 text-2xl font-bold capitalize text-white flex items-center"
          >
            HackNews
          </div>

          <div class="flex flex-row">
            <!-- nav menu -->
            <ul
              class="navbar hidden lg:flex lg:flex-row text-white text-sm items-center font-bold"
            >
              <li
                class="active relative border-l border-gray-800 hover:bg-gray-900"
              >
                <a
                  @click.prevent="navigate('/')"
                  class="block py-3 px-6 border-b-2 border-transparent"
                  href="index.html"
                  >Home</a
                >
              </li>
              <li
                class="dropdown relative border-l border-gray-800 hover:bg-gray-900"
              >
                <a
                  @click.prevent="navigate('/covid')"
                  class="block py-3 px-6 border-b-2 border-transparent"
                  href="#"
                  >Covid Statistic</a
                >
              </li>
              <li
                class="dropdown relative border-l border-gray-800 hover:bg-gray-900"
              >
                <a
                  @click.prevent="navigate('/room')"
                  class="block py-3 px-6 border-b-2 border-transparent"
                  href="#"
                  >Discuss</a
                >
              </li>
              <li class="relative border-l border-gray-800 hover:bg-gray-900">
                <a
                  @click.prevent="logoutHandler"
                  class="block py-3 px-6 border-b-2 border-transparent"
                  href="#"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
