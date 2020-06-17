exports.up = function (knex, Promise) {
  return knex.schema.createTable("surveys", (tbl) => {
    tbl.increments();
    tbl.text("location").unique().notNullable();
    tbl.text("specs");
    tbl.text("date");
    tbl.text("sample_type");
    tbl.text("analysis");
    tbl.text("drawings");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("surveys");
};
