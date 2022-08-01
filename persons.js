const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/people");

// Creating our schema file
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// create a new collection
const personDetails = new mongoose.model("personDetails", personSchema);

const person1 = new personDetails({
  name: "John",
  age: 37,
});

const person2 = new personDetails({
  name: "David",
  age: 22,
});
const person3 = new personDetails({
  name: "Anna",
  age: 3,
});

personDetails.insertMany([person1, person2, person3], (err) => {
  if (err) {
    console.log("It didnt log out the various informations");
  } else {
    console.log("Success");
  }
});
// save a record
