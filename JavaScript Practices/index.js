


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


async function test() {
    let url = await fetch("https://fakestoreapi.com/products");
    let data = await url.json();

    document.writeln(
        data.map(item => {
            document.writeln(`${item.id, item.title}`)
        })
    );
}

test();
 