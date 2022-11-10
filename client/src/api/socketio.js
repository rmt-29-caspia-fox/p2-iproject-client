import { io } from "socket.io-client";

const socket = io("https://iproject-server-caspia.herokuapp.com")
// const socket = io("http://localhost:3000")

export default socket