const Datastore = require("../../node_modules/nedb");

const db = new Datastore({
  filename: "./data.db3",
  autoload: true,
});

console.log(db.find({ location: "building 1" }, function (err, docs) {}));
