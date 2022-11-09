<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import socket from './api/socketio'

export default {
  components: {
    Navbar,
  },
  created() {
    // socket.on('connect',()=>{
    //   console.log(`you connected with server ${socket.id}`)
    // })
    // socket.emit('test','hai dari client<<<<<<')
  },
};
</script>

<template>
  <Navbar/>
  <RouterView />
</template>

<style>
.pointer {
  cursor: pointer;
}
</style>
