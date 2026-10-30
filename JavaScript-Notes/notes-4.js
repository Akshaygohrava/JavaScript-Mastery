

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




// typeof
document.writeln(typeof "x");       // "string"
document.writeln(typeof null);      // "object" (historic bug)
document.writeln(typeof []);        // "object"
document.writeln(typeof undefined); // "undefined"

// instanceof
document.writeln([] instanceof Array);  // true
document.writeln(new Date() instanceof Date); // true




// Bubbling
parent.addEventListener("click", () => console.log("parent"));
child.addEventListener("click", () => console.log("child"));
// click on child → "child" then "parent"

// Capturing
parent.addEventListener("click", () => console.log("capture"), true);
// → "capture" fires before target

// preventDefault + stopPropagation
form.addEventListener("submit", (e) => {
  e.preventDefault();     // don't reload page
  e.stopPropagation();    // don't bubble
  submitViaFetch();
});

// Delegation — one listener for all <li>s
ul.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  console.log("clicked item id:", li.dataset.id);
});






