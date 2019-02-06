exports.up = function(knex, Promise) {
  return knex.schema.createTable("dogs", function(table) {
    table.increments("id").primary();
    table.string("breed");
    table.string("origin");
    table.string("characteristics");
    table.string("exercise");
    table.string("coat");
    table.string("space_requirements");
    table.string("image_url");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("dogs");
};
