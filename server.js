import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleMessage } from './controllers/chatControllers.js';

// Current directory name setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

io.on("connection", (socket) => {
    console.log("A new user connected", socket.id);

    // Listen for 'User-message' event from client
    socket.on("User-message", (message) => {
        console.log("Received message: ", message);

        // Broadcast message to all connected clients
        io.emit("message", message); // Correct broadcasting method
    });
});



const port = 9000;
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
