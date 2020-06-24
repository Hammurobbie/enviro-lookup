exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("surveys")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("surveys").insert([
        {
          location: "building 1",
          specs: "dgssdv",
          date: "jyhbasdfbvad",
          sample_type: "sdfgadsgadfg",
          analysis: "fdhdfggf",
          drawings: "fgdfgadfg",
        },
        {
          location: "building 2",
          specs: "dgssdv",
          date: "jyhbasdfbvad",
          sample_type: "sdfgadsgadfg",
          analysis: "fdhdfggf",
          drawings: "fgdfgadfg",
        },
        {
          location: "building 3",
          specs: "dgssdv",
          date: "jyhbasdfbvad",
          sample_type: "sdfgadsgadfg",
          analysis: "fdhdfggf",
          drawings: "fgdfgadfg",
        },
      ]);
    });
};
