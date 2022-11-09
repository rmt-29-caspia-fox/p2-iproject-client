import { io } from "socket.io-client";

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(import.meta.env.VITE_SOCKET_ENDPOINT);
    this.socket.emit('my message', 'Hello there from Vue.');
    this.socket.on('my broadcast', (data) => {
      console.log(data);
    });
  }
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
