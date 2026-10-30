

// JavaScript 

document.writeln("<br><br><h2>Notes 4</h2><br><br>");


// Shallow Copy VS Deep Copy 


const original = {
    name: "akshay",
    address: {city: "Mumbai"},
    age: 24,
    hobby: "developer"
}
document.writeln("<br><br>",original.address.city); // Mumbai

const copy = {...original};    // Shallow Copy 

copy.address.city = "Uttarakhand";
document.writeln("<br><br>",copy.address.city); // Uttarakhand
document.writeln("<br><br>",original.address.city); // Uttarakhand


const deep = structuredClone(original);      // Deep Copy

deep.address.city = "Assam";
document.writeln("<br><br>",deep.address.city); // Assam

document.writeln("<br><br>",original.address.city); // Uttarakhnad





document.writeln("hello , i m learning java script !");



// fetch("https://fakestoreapi.com/products")
// .then(res => res.json())
// .then((data) => document.writeln(data[4].title))
















