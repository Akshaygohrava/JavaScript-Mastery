


// fetch("https://fakestoreapi.com/products")
// .then(res => res.json())
// .then(data => document.writeln(JSON.stringify(data, 2, null)))





let students = {
    name: "Akshay",
    age: 24,
    hobby: "coding"
} 
const frutis = ["mangos", "apples", "oranges"];

var marks = 12345;


async function safe() {

setTimeout(async () => {
try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    data.map(item => {
            document.writeln(`${item.title}, ${item.price}`);
        })
} catch (error) {
    document.writeln(error);
}
finally {
    document.writeln("cleanup functions")
}
}, 5000)

}
safe();





function test() {
    var name = "Akshay";
    document.writeln(name);
    document.writeln(name);
}
 
test();
var name = "deepesh";

document.writeln(name);