const socket = io();

const sendBtn = document.getElementById("sendButton");
const messageInput = document.getElementById("message");
const allMessages = document.getElementById("messages");

// Debug: Check if socket connection is established
socket.on("connect", () => {
    console.log("Socket.IO connected with ID:", socket.id);
});

// Listen for messages from server
socket.on("message", (message) => {
  console.log("Message received from server:", message); // Debug log

  // Create a new <p> element to display the message
  const p = document.createElement("p");
  p.innerText = message;  // Display received message

  // Ensure this line executes
  allMessages.appendChild(p);  // Add message to the chat window
});


// Send message to server
sendBtn.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message !== "") {
        console.log("Sending message to server:", message); // Debug log
        socket.emit("User-message", message); // Emit message to server
        messageInput.value = ""; // Clear input field
    }
});
