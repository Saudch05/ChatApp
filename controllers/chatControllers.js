// /controllers/chatControllers.js
export function handleMessage(socket, message) {
  console.log("Received message: ", message);
  socket.broadcast.emit("message", message); // Broadcast message to other clients
}
