"use strict";

document.writeln("<br>");
// Every thing About String and Arrays and Objects in JavaScript 



var name = "Akshay Gohrava";

let marks = [45, 67, 76, 87, 66, 76];

let address = {
    city: "MUMBAI",
    pin: 400091,
    street: "charni road",
    landmark: "Malabar hill"
}

document.writeln(name);
document.writeln(marks);
document.writeln(address.city);

// String Methods 

document.writeln("<br> ", name.charAt(5));
document.writeln("<br> ", name.indexOf("y"));



for(let i = 0; i < name.length; i++) {
    document.writeln(name.charAt(i));
}
for(let i = name.length; i >= 0;i--) {
    document.writeln(name.charAt(i));
}





// Arrays Methods

document.writeln("<br><br>  Arrays In JS <br><br>");

let age = [56, 44, 65, 78, 43];

let max = age[0];

for(let i = 0; i < age.length;i++) {
    if(max < age[i]) {
            max = age[i];
    }
}

document.writeln(max);


const ages = [46, 78, 56, 93, 56];
document.writeln(ages);
ages.pop();
document.writeln(ages);
ages.push(41);
document.writeln(ages);
ages.shift(51);
document.writeln(ages);
ages.unshift();






// Object Methods 
document.writeln("<br><br> Object and Object Methods <br><br>");


let details = {
     name: "this is Object fun",
     age: 24,
     address: function() {
        return this.name;
     }
}

document.writeln(details.address());


const detail = {
    name: "allen",
    age: 45,
    address: "newyork"
}
document.writeln(detail.age);
document.writeln(detail.address);
document.writeln(detail["name"]);
detail.name = "akshay";

document.writeln(Object.keys(detail));
document.writeln(Object.values(detail));
document.writeln(Object.entries(detail))

document.writeln(Object.seal(detail));
document.writeln(Object.isSealed(detail));

document.writeln(Object.freeze(detail));
document.writeln(Object.isFrozen(detail));

// Arrays and Array Methods ..........

document.writeln("<br><br> Arrays and Arrays Methods <br><br>");

let mark = [56, 76, 45, 89, 42];

var fruits = ["Mango", "Apple", "Oranges", "Banana"];

document.writeln(fruits[2]);


const num = [1, 2, 3, 4, 5, 6];

const arr = [1, 4, [2, 3, 6]];

document.writeln(num.map(n => n * 2));

document.writeln(filter((p) => p > 5)); 

document.writeln(find((p) => p > 3)); 
document.writeln(some((p) => p > 5)); 
document.writeln(every((p) => p > 5)); 

document.writeln(arr.flat()); 



// Spread and Rest Operator In Javascript !

document.writeln("<br><br> Spread and Rest Operator  <br><br>");

const num1 = [1,2,3];
const num2 = [4,5,6];

document.writeln(...num1, num2);






// Array and Object Destructuring 


var num3 = [1,2,3];
const [first, second, third] = num3;
document.writeln(second);




const obj = {
    name: "vivek",
    age: 25,
    address: "mankhurd"
}

const copy = { ...obj };

document.writeln(copy);


const update = {
    ...copy,
    address: "munbai",
    locate: "india"
}



// Template Litrals 

const school = "S.I.W.S";

const collage = "Keerti Clg";

document.writeln(`My Name is Akshay , My School is ${school} My Collage is ${collage}`)




