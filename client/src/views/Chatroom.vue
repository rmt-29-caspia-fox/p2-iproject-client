<script>
import SocketioService from "../services/socketio.service.js";
export default {
  components: {},
  created() {
    SocketioService.setupSocketConnection();
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
};
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">Ini Chatroom</h1>
  </div>
  <div></div>
</template>
