const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/people");

// Creating our schema file
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 1,
    max: 20,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 150,
  },
});

// create a new collection
const personDetails = new mongoose.model("personDetails", personSchema);

personDetails.find(function (err, persona) {
  query = { name: "john" };
  if (err) {
    console.log("it was unsucessful");
  } else {
    mongoose.connection.close();
    persona.forEach((personal) => {
      console.log(personal.name);
    });
  }
});
// save a record
