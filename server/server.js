const path = require("path");
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const request = require("superagent");
// Set up server-side routes e.g. :
const routes = require("./routes/main");

server.use(bodyParser.json());
server.use(express.json());
server.use(express.static(path.join(__dirname, "../public")));

// Internal API
server.use("/api", routes);

// External API
// server.get("/api/dogparks/:name", (req, res) => {
//   const apiEndPoint =
//     "http://data-wcc.opendata.arcgis.com/datasets/ce44eb0d60be45dfbebcc49bcc5ef275_0.geojson";
//   request.get(apiEndPoint + req.params).then(apiRes => {
//     console.log(apiRes);
//     res.json(apiRes.body);
//   });
// });

module.exports = server;
