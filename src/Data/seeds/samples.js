exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("samples")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("samples").insert([
        {
          sample_number: "jkhybvsg",
          sample_description: "sfgadfgada",
          sample_location: "dfsgadsgas",
          results: "dfhdsfgds",
          quantity: "dsgfasdg",
          comments: "sdgfgdsaf",
          image_id: "sdgasd",
          survey_id: 1,
        },
        {
          sample_number: "jkhybvsg",
          sample_description: "sfgadfgada",
          sample_location: "dfsgadsgas",
          results: "dfhdsfgds",
          quantity: "dsgfasdg",
          comments: "sdgfgdsaf",
          image_id: "sdgasd",
          survey_id: 1,
        },
        {
          sample_number: "jkhybvsg",
          sample_description: "sfgadfgada",
          sample_location: "dfsgadsgas",
          results: "dfhdsfgds",
          quantity: "dsgfasdg",
          comments: "sdgfgdsaf",
          image_id: "sdgasd",
          survey_id: 2,
        },
        {
          sample_number: "jkhybvsg",
          sample_description: "sfgadfgada",
          sample_location: "dfsgadsgas",
          results: "dfhdsfgds",
          quantity: "dsgfasdg",
          comments: "sdgfgdsaf",
          image_id: "sdgasd",
          survey_id: 2,
        },
      ]);
    });
};
