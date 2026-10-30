


// JavaScript 


// Fetch APi VS AxisOS Fetching 


document.writeln("<br><br><h2>Notes 3</h2><br><br>");

// setTimeout(fn, ms) — run once after a delay (approximate)

// setInterval(fn, ms) — run every ms (not exactly, drifts under load

// async await  

// setTimeout(() => {
//     document.writeln("hello, Akshay !");
// }, 2000);


// setInterval(() => {

// });





// Promises in JS 








// Try , Catch . Finally

// async function safe() {

// setTimeout(() => {
// try {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     data.map(item => {
//             document.writeln(`${item.title}, ${item.price}`);
//         })
// } catch (error) {
//     document.writeln(error);
// }
// finally {
//     document.writeln("cleanup functions")
// }
// }, 5000)

// }
// safe();












// document.writeln("<br>1"); // sync

// setTimeout(() => document.writeln("<br> 2 — macrotask"), 0);

// Promise.resolve().then(() => document.writeln("<br> 3 — microtask"));

// document.writeln("4"); // sync

// Output order:
// 1
// 4
// 3 — microtask
// 2 — macrotask















