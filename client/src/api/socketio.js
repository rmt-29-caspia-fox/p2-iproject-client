import { io } from "socket.io-client";

const socket = io("https://iproject-server-caspia.herokuapp.com/")

export default socket