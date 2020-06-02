const Datastore = require("nedb");

const db = new Datastore({
  filename: "./SurveyData/SurveyDataArr",
  autoload: true,
});

// const nbdb = [
//   {
//     id: 1,
//     location: "Building 100",
//     specs: "250ft x 320ft built in 1916",
//     date: "April 1, 2020",
//     sample_type: "Bulk Asbestos",
//     analysis: "PLM",
//     samples: [
//       {
//         id: 1,
//         sample_number: "FD-01",
//         sample_description: "12x12 White Speckled Floor Tile",
//         sample_location: "NE corner of SE room",
//         results: "3% Chrysotile",
//         quantity: "15 ft2",
//         comments: "",
//         image_id: "",
//       },
//       {
//         id: 2,
//         sample_number: "FD-02",
//         sample_description: "12x12 White Speckled Floor Tile",
//         sample_location: "SE corner of SE room",
//         results: "Trace Chrysotile",
//         quantity: "15 ft2",
//         comments: "",
//         image_id: "",
//       },
//       {
//         id: 3,
//         sample_number: "FD-03",
//         sample_description: "12x12 White Speckled Floor Tile",
//         sample_location: "SW corner of SE room",
//         results: "None Detected",
//         quantity: "15 ft2",
//         comments: "",
//         image_id: "",
//       },
//     ],
//   },
//   {
//     id: 2,
//     location: "Building 200",
//     specs: "400ft x 550ft built in 1935",
//     date: "April 3, 2020",
//     sample_type: "Bulk Asbestos",
//     analysis: "PLM",
//     samples: [
//       {
//         id: 4,
//         sample_number: "MS-01",
//         sample_description: "White Pipe Insulation",
//         sample_location: "NE corner of main room",
//         results: "3% Chrysotile",
//         quantity: "5 ft2",
//         comments: "",
//         image_id: "",
//       },
//       {
//         id: 5,
//         sample_number: "MS-02",
//         sample_description: "White Pipe Insulation",
//         sample_location: "SE corner of SE room",
//         results: "Trace Chrysotile",
//         quantity: "5 ft2",
//         comments: "",
//         image_id: "",
//       },
//       {
//         id: 6,
//         sample_number: "MS-03",
//         sample_description: "White Pipe Insulation",
//         sample_location: "NW corner of SW room",
//         results: "None Detected",
//         quantity: "5 ft2",
//         comments: "",
//         image_id: "",
//       },
//       {
//         id: 7,
//         sample_number: "FR-01",
//         sample_description: "White popcorn ceiling",
//         sample_location: "NW corner of SW room",
//         results: "None Detected",
//         quantity: "200 ft2",
//         comments: "",
//         image_id: "",
//       },
//       {
//         id: 8,
//         sample_number: "FR-02",
//         sample_description: "White popcorn ceiling",
//         sample_location: "NW corner of SW room",
//         results: "None Detected",
//         quantity: "200 ft2",
//         comments: "",
//         image_id: "/img/back_icon.png",
//       },
//       {
//         id: 9,
//         sample_number: "FR-03",
//         sample_description: "White popcorn ceiling",
//         sample_location: "NW corner of SW room",
//         results: "None Detected",
//         quantity: "200 ft2",
//         comments: "Removed",
//         image_id: "",
//       },
//     ],
//   },
// ];

// db.insert(nbdb, function (err, newDocs) {
//   // Two documents were inserted in the database
//   // newDocs is an array with these documents, augmented with their _id
// });

console.log(db.find({}, function (err, docs) {}));
