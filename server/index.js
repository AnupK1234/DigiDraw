const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:5173/" }));

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: "http://localhost:5173/" });

io.on("connection", (socket) => {
  console.log("Server connected");
});

httpServer.listen(5000);
