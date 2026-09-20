


// fetch("https://fakestoreapi.com/products")
// .then(res => res.json())
// .then(data => document.writeln(JSON.stringify(data, 2, null)))


let students = {
    name: "Akshay",
    age: 24,
    hobby: "coding"
} 
const frutis = ["mangos", "apples", "oranges"];
for (const ele of frutis) {
    document.writeln(ele);
}

for(let i in students){
    document.writeln(students[i]);
}



function test(a,b) {
    document.writeln(a + b);
}
test(5,6);

// callback function ....
function callback(test) {
    let a = 78 + 22;
    document.write(a);
     test(a,b);
}


