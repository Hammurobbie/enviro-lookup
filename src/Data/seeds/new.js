exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("surveys")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("surveys").insert([
        { id: 1, location: "building 1" },
        { id: 2, location: "building 2" },
        { id: 3, location: "building 3" },
      ]);
    });
};
