# Mini Chat

This project is a little real-time chat application built with **Node.js**, **Express**, and **Socket.IO**. It allows communication between multiple clients, where sent messages are broadcast to all connected users.

## Features

- **Real-time communication** using WebSockets.
- Simple user interface with Bootstrap.
- Server configured to handle custom Socket.IO events.

---

## Technologies Used

- **Backend**:
  - Node.js
  - Express
  - Socket.IO
- **Frontend**:
  - HTML, CSS (Bootstrap), JavaScript
- **Additional Configuration**:
  - dotenv for environment variables

---

## Project Structure

```
/
├── models/
│   ├── server.js   # Server configuration
│   └── sockets.js  # WebSocket event handling
├── public/
│   └── index.html  # Chat interface
└── index.js        # Application entry point
```

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/JUANJSC630/Mini-Chat.git
   cd Mini-Chat
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add the following configuration:
     ```env
     PORT=8080
     ```

4. **Run the server:**

   ```bash
   npm run dev
   ```

5. **Open the browser:**

   - Navigate to `http://localhost:8080`.

---

## Main Files

### **index.js**

Entry point of the application. Creates and starts the server:

```javascript
const Server = require("./models/server");
require("dotenv").config();
const server = new Server();
server.start();
```

---

### **server.js**

Configures the Express server, Socket.IO, and middleware for serving static files.

Responsibilities:

1. Create the server with Express and HTTP.
2. Configure WebSocket events with `Sockets`.
3. Serve static files from the `public` directory.

---

### **sockets.js**

Handles WebSocket events, including new client connections and broadcasting messages to all connected users.

Example event:

```javascript
this.io.on("connection", (socket) => {
  socket.on("client-message", (data) => {
    this.io.emit("server-message", data);
  });
});
```

---

### **index.html**

User interface for sending and receiving real-time messages.

Includes:

- A text input and a button to send messages.
- A list to display received messages.
- Client-side logic with Socket.IO to interact with the server.

---

## Usage

1. Navigate to `http://localhost:8080` in your browser.
2. Type a message in the input field and press **Send**.
3. See the message appear on your screen and on other connected clients.

---

## Future Improvements

- **Data persistence:** Save messages to a database.
- **User authentication:** Identify users who send messages.
- **Private rooms:** Enable private or group chats.
- **Notifications:** Notify users when someone connects or disconnects.

---

## License

This project is licensed under the [MIT](LICENSE) license. You are free to use, modify, and distribute it with proper attribution.

---

## Author

**Juan Saldarriaga**

If you have any questions or suggestions, feel free to contact me.

