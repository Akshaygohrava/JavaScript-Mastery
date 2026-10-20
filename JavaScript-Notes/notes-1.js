
// JavaScript Notes For Revision 
// From Basic to Advance - Octomber 2026


// Basic Of JavaScript 

let a = 12;
let b = 3;
document.write("addition of ",a + b);
document.write("subtraction of " , a - b);




// let vs var vs const
function test() {
    // let can be resiign but cannot redeclare - Block Scope 
let a = 12345;
a = 12354;
document.write(a);
// let a = 123321;  this gives an errror


// var can be redeclare and reassigned !  - Function Scope
var b = "akshay";
var b = "gohrava";
document.write(b);

// const cannot be redeclare or reassigned   - Block Scope 
const c = "hello world";
// const c = " i m software dev";
// c = "hello akshay";
document.write(c);
}
test();





document.writeln("hello world ", "<br><br>Loops in JS <br><br>");

let z = 10;

// Loops In JS 

for(let i = 1; i <= 10; i++) {
    document.writeln(i);
}


let n = 1;
while(n<10) {
    document.writeln(n);
    n++;
}

do {
    document.writeln(n);
    n++;
} while (n < 10);

document.writeln("<br><br>");


for(let i = 1; i <= 15;i++) {
    if (i == 6) {
        break;
    }
    document.writeln(i);
}


document.writeln("<br><br>", "table of 7", "<br><br>");


for(var i = 1; i <= 10;i++) {
    document.writeln("7 * ", i, " = ", 7*i, "<br>");
}


document.writeln("<br><br>");

var num = [34, 65, 45, 67, 77];

var obj = {
    name:"Akshay",
    age:24,
    height: 7.3
}


for (const i of num) {
    document.writeln(i, "<br>");
}

for(const i in obj) {
    document.writeln(i, "<br>")
    document.writeln(obj[i]);
}



// Types Of functions In JavaScript

document.writeln("<br><br>")
function add(a,b) {
     document.writeln(a + b);
}

add(45,65);

const age = (a,b) => {
    document.writeln(a * b);

    return b;
}
age(33,44);

function fun1(callback) {
    document.writeln("<br>","this is a first function");
    callback();
}

fun1(() => document.writeln(" <br><br>","this is a callback function"));


const ages = function age() {
    document.writeln("My Age is ");
}
document.writeln(ages);


(function () {
    document.writeln("<br> This Is Anonomous Function");
}());





























// If vscode dont live preview then , use Antigravity ! for live preview