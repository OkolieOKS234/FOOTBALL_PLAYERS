##Special commands

Adding new details to our Database
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

// Tap into our collection and insert

// personDetails.insertMany([person1, person2, person3], (err) => {
//   if (err) {
//     console.log("It didnt log out the various informations");
//   } else {
//     console.log("Success");
//   }
// });

// find items or a particular item