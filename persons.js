const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/people");

// Creating our schema file
const personSchema = new mongoose.Schema({
  //  Validation
  name: {
    type: String,
    min: 1,
    max: 20,
    required: [true, "Please check your data entry"],
  },
  age: {
    type: Number,
    min: 1,
    max: 150,
  },
});

// create a new collection
const personDetails = new mongoose.model("personDetails", personSchema);

// const person = new personDetails({
//   age: 15,
// });

// person.save();

// Finding a record
// personDetails.find(function (err, persona) {
//   if (err) {
//     console.log("it was unsucessful");
//   } else {
//     mongoose.connection.close();
//     persona.forEach((personal) => {
//       console.log(personal.name);
//     });
//   }
// });

personDetails.updateOne({ name: "David" }, { name: "David Okolie" }, (err) => {
  if (err) {
    console.log("There was an error");
  } else {
    console.log("Updated");
  }
});

// save a record
