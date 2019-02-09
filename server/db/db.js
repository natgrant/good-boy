const config = require("../../knexfile").development;
const connection = require("knex")(config);

module.exports = {
  getDogs,
  getUsers
};

function getDogs(testDb) {
  const db = testDb || connection;
  return db("dogs").select();
}

function getUsers(testDb) {
  const db = testDb || connection;
  return db("users").select();
}
