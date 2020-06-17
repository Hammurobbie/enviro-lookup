const Datastore = require("./node_modules/nedb");

const db = new Datastore({
  filename: "./SurveyData/SurveyDataArr",
  autoload: true,
});

console.log(db.find({}, function (err, docs) {}));
