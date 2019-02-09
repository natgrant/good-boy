const environment = process.env.ENVIRONMENT || "development";
const config = require("../knexfile.js")[environment];
module.exports = require("knex")(config);

// Consider to move (i.e. to server folder)
