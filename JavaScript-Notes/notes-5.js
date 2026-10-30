
document.writeln("<br><br><h2>Notes 5</h2><br><br>");


// DOM Manuplation 


document.writeln("<br><br> DOM Manuplation !");


const ele = document.createElement("h3");
ele.textContent ="Hello, This is Create element !";


const body = document.getElementById("body");
body.append(ele);


const data1 = document.querySelector("#text");
const data2 = document.querySelectorAll(".text2");










// Events — Bubbling, Capturing, Delegation







// LocalStorage and SessionStorage 



localStorage.setItem("name", "akshay");

localStorage.getItem("name"); // akshay
document.writeln("<br><br> ", localStorage.getItem("name"));

localStorage.removeItem("name");




sessionStorage.setItem("session", "data");

sessionStorage.getItem("session");










// AddEvent Listner 

window.addEventListener("onClick",() => {
    const ele2 = document.createElement("p");
    ele2.textContent = "hello this is event listner !";

    body.append(ele2);
})


