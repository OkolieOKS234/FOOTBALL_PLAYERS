##Special commands

<h1>Adding new details to our Database</h1>

<details>

<summary>Adding a new person</summary>
<p>const person1 = new personDetails({</p>

<p>name: "John",</p>
<p>age: 37,</p>
<p>});</p>

<p>const person2 = new personDetails({</p>
<p>name: "David",</p>
<p>age: 22,</p>
<p>});</p>
<br/>
<p>const person3 = new personDetails({</p>
<p>name: "Anna",</p>
<p>age: 3,</p>
<p>});</p>

Tap into our collection and insert

personDetails.insertMany([person1, person2, person3], (err) => {
if (err) {
console.log("It didnt log out the various informations");
} else {
console.log("Success");
}
});

</details>
<details>

<summary>Finding a record of a person</summary>
// find items or a particular item

<p>personDetails.updateOne({ name: "David" }, { name: "David Okolie" }, (err) => {</p>
<p>if(err) {</p>
<p>console.log("There was an error");</p>
<p>}</p>
 <p>else{</p>
<p>console.log("Updated");</p>
<p>}</p>
<p>});</p>
</details>
<details>
<summary>Validation of the database in mongoose using required, min and max<summary>

<p>const personSchema = new mongoose.Schema({</p>
// Validation
<p>name: {</p>
<p>type: String,</p>
<p>min: 1,</p>
<p>max: 20,</p>
<p>required: [true, "Please check your data entry"],</p>
<p>},</p>
<p>age: {</p>
<p>type: Number,</p>
<p>min: 1,</p>
<p>max: 150,</p>
<p>},</p>
<p>});</p>

</details>
