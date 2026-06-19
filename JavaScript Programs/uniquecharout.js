let string = "aabbccddeff";

let uniquecharout = string.split("").filter((char, index, arr) => 
    arr.indexOf(char) === arr.lastIndexOf(char)
)

document.writeln(uniquecharout);