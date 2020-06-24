exports.up = function (knex) {
  return knex.schema.createTable("samples", (tbl) => {
    tbl.increments();
    tbl.text("sample_number");
    tbl.text("sample_description");
    tbl.text("sample_location");
    tbl.text("results");
    tbl.text("quantity");
    tbl.text("comments");
    tbl.text("image_id");
    tbl.integer("survey_id").unsigned().references("id").inTable("surveys");
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("samples");
};
