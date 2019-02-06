exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table.increments("id").primary();
    table.string("lifestyle");
    table.string("housing");
    table.string("allergies");
    table.integer("age");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
