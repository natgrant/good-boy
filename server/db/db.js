const config = require("../../knexfile").development;
const connection = require("knex")(config);

module.exports = {
  getUsers,
  getDogs
};

function getUsers(testDb) {
  const db = testDb || connection;
  return db("users").select();
}

function getDogs(testDb) {
  const db = testDb || connection;
  return db("dogs").select();
}

//TODO: Add more functionality: basic functions setup to get data from table
