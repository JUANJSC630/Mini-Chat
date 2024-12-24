class Sockets {
  constructor(io) {
    this.io = io;

    this.socketsEvents();
    // clients = [];
  }

  socketsEvents() {
    // Listen for a connection
    this.io.on("connection", (socket) => {
      // socket.on = listen for an event
      socket.on("client-message", (data) => {
        // io.emit = Send an event to all clients
        this.io.emit("server-message", data);
        console.log(data);
      });
    });
  }
}

module.exports = Sockets;
