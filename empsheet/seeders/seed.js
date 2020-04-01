const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/emplist", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const empSeed = [
    {
        firstName: "Larry",
        lastName: "Bird",
        email: "Larry@nba.ball",
        role: "dont miss",
        department: "shottas"
    },
    {
        firstName: "Forlan",
        lastName: "Diego",
        email: "Forlan@uru.ball",
        role: "frees",
        department: "dont pass"
    },
    {
        firstName: "Tevez",
        lastName: "Carlitos",
        email: "Carlitos@tought.messi",
        role: "jk",
        department: "Dinho did"
    }
];

db.Employee.deleteMany({})
  .then(() => db.Employee.collection.insertMany(empSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});