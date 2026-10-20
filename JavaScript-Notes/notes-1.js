
// JavaScript Notes For Revision 
// From Basic to Advance - Octomber 2026


// Basic Of JavaScript 

let a = 12;
let b = 3;
document.write("addition of ",a + b);
document.write("subtraction of " , a - b);



// LET ,VAR , CONST

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


document.writeln("<br><br> Functions In JS !");
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



// Promises In js

document.writeln("<br><br> Promises In JS ! <br><br>");


const MyPromise = new Promise((resolve, reject,fulfiled) => {
    
    let succes = true;

    if (succes) {
        resolve("Promise resolve !");
    } else {
        reject("Promise Not resolve")
    }
})
.then(() => document.writeln("Promise has been resolve !"))
.catch((error) => document.writeln(error))
.finally(() => document.writeln("this is finaly block !"))



document.writeln("<br><br> APi Fetching In JS ! <br><br>");


// fetch("https://fakestoreapi.com/products")
// .then(res => res.json())
// .then(data => document.writeln(data[0].id, data[0].title, data[0].price))


async function fetching() {
    try {
        let url = await fetch("https://fakestoreapi.com/products");
        let data = await url.json();
    
        document.writeln(
            data.map(item => {
                document.writeln(item.id, item.title, item.price, null , 2);
                 
            })
        );

    } catch (error) {
        Document.writeln(error);
    }
}
// fetching();





document.writeln("<br><br> Closures In JS ! <br><br>");


let count = 0;
function outter() {
    function inner() {
        count++;
        return count;
    }
    inner();
    document.writeln("count : ", count);
}

outter();
outter();
outter();
outter();
outter();



document.writeln("<br><br> DataTypes In JS ! <br><br>");

var name = "Akshay";
var agee = 24;
let love = true;
let none = null;
let abc;
let bignum = 1234567;

document.writeln(name, age, love, none, abc, bignum);




document.writeln("<br><br> Operators In JS ! <br><br>");


let x = 5;
let p = 5;
let y = 8;
let o = "8";

document.writeln(x == p); // true
document.writeln(y == o); // true
document.writeln(y === o); // false
document.writeln(x == y); // false

document.writeln(x == p && x == y); // false,  all needs to be true 

document.writeln(x == p || x == y); // true, any one true, then true




document.writeln("<br><br> Scopes In JS ! <br><br>");


// Scope = where a variable is accessible.

// Global — accessible everywhere

// Function — inside a function only

// Block — inside {} for let/const


document.writeln("<br><br> Hoisting In JS ! <br><br>");

document.writeln(cc);
var cc = "akshay";


document.writeln(ac);
let ac = "akshay";

document.writeln(bc);
const bc = "akshay";

test(5,8);
function test(a,b) {
    return a * b;
}





















// If vscode dont live preview then , use Antigravity ! for live preview