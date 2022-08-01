// using the mongodriver
// const { MongoClient } = require("mongodb");
const { default: mongoose } = require("mongoose");

// this is to do with testing of data entry and connection to mongod

const url = "mongodb://localhost:27017";
mongoose.connect("mongodb://localhost:27017/footbal");

// create new schema to be able to save data into the database
// create a structure
const footballSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
  nationality: String,
});
// Creating the model
const footballPlayers = mongoose.model("footballPlayers", footballSchema);

const football = new footballPlayers({
  name: "Christiano Ronaldo",
  rating: 91,
  review: "A very good player that is proficient using his head to score",
  nationality: "Portugal",
});
// football.save();
