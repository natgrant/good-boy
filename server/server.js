const path = require("path");
const express = require("express");

// Set up server-side routes e.g. :
const dogs = require("./routes/dogs");

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));

// Set up paths for server.use()

// Server.get index.html?

module.exports = server;
