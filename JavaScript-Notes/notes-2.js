

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





// Arrays Methods

let age = [56, 44, 65, 78, 43];

let max = age[0];

for(let i = 0; i < age.length;i++) {
    if(max < age[i]) {
            max = age[i];
    }
}

document.writeln(max);






// Object Methods 












