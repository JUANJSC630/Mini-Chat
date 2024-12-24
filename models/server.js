const express = require("express");
const http = require("http");
const socket = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");

class Server {
  constructor() {
    // Server Express
    this.app = express();
    this.port = process.env.PORT;

    // Server Socket.io
    this.server = http.createServer(this.app);

    // Configure Socket.io
    this.io = socket(this.server, {
      // configure socket.io
    });
  }

  middleware() {
    // Serve static files
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  ConfigurationSockets() {
    new Sockets(this.io);
  }

  start() {
    this.middleware();

    this.ConfigurationSockets();

    this.server.listen(this.port, () => {
      console.log("Server is listening on port: ", this.port);
    });
  }
}

module.exports = Server;
