const path = require("path");
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
// Set up server-side routes e.g. :
const routes = require("./routes/main");

server.use(bodyParser.json());
server.use(express.json());
server.use(express.static(path.join(__dirname, "../public")));

// Set up paths for server.use()
server.use("/api", routes);

module.exports = server;
