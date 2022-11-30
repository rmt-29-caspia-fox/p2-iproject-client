<script>
import Navbar from "../components/Navbar.vue";
import SocketioService from "../services/socketio.service.js";
import { mapState } from "pinia";
import { useUserStore } from "../stores/user";
import { io } from "socket.io-client";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      socket: "",
      messages: [],
      text: "",
      index: 1
    };
  },
  computed: {
    ...mapState(useUserStore, ["username"]),
  },
  created() {
    SocketioService.setupSocketConnection();
    this.socket = io(import.meta.env.VITE_SOCKET_ENDPOINT);
    this.socket.on(`broadcast room ${this.$route.params.id}`, (data) => {
      this.messages = this.messages.concat(data);
    }); 
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  methods: {
    sendMessage() {
      const message = {
        id: this.index,
        text: this.text,
        user: this.username
      } 
      this.socket.emit(`room ${this.$route.params.id}`, message);
      this.text = "";
      this.index++
    },
  },
};
</script>

<template>
  <Navbar />
  <div class="fixed -z-10">
    <div
      class="bg-gray-700 bg-opacity-80 w-screen h-screen z-10 absolute top-0 left-0"
    ></div>
    <div class="grid grid-cols-4 justify-items-center">
      <img
        src="../assets/Street_Fighter_6_Battle_Hub.jpg"
        alt=""
        class="w-screen h-screen object-cover col-span-4"
      />
    </div>
  </div>
  <div class="grid grid-cols-4 justify-items-center">
    <h1 class="col-start-2 col-span-2 text-3xl font-bold text-white my-8">
      Chatroom
    </h1>
    <div class="rounded-md col-start-2 col-span-2 w-5/6 h-96 bg-blue-600">
      <p class="text-white text-center"><strong>room id:</strong> {{ this.$route.params.id }}</p>
      <div
        class="overflow-auto drop-shadow-lg rounded-md col-start-2 col-span-2 w-11/12 h-96 ml-8 mt-6 mb-6 bg-slate-100 px-2"
      >
        <div v-for="(message,index) in messages" :key="index">
          <p><strong>{{message.user}}</strong></p>
          <p>{{message.text}}</p>
        </div>
        
      </div>
    </div>
    <div class="z-10 col-start-2 col-span-2 w-5/6 h-20">
      <label for="chat" class="sr-only">Your message</label>
      <div class="flex items-center py-2 px-3 bg-gray-50 rounded-lg">
        <textarea
          @keyup.enter="sendMessage"
          v-model="text"
          rows="1"
          class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
      </div>
    </div>
  </div>
</template>
