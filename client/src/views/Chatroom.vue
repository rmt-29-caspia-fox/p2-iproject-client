<script>
import SocketioService from "../services/socketio.service.js";
import { io } from "socket.io-client";

export default {
  components: {},
  data() {
    return {
      socket: "",
    };
  },
  created() {
    SocketioService.setupSocketConnection();
    this.socket = io(import.meta.env.VITE_SOCKET_ENDPOINT);
    this.socket.on("my broadcast", (data) => {
      console.log(data);
    });
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
};
</script>

<template>
  <div class="grid grid-cols-4 justify-items-center" >
    <h1 class="col-start-2 col-span-2 text-3xl font-bold underline">Ini Chatroom</h1>
    <div class="col-start-2 col-span-2 w-80 h-80 bg-slate-400" >

    </div>
  </div>
  <div></div>
</template>
