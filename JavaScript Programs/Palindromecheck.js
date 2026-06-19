document.writeln("The Palindrome Check !");

function palindromecheck(string) {
    let reverse = string.split("").reverse().join("");
    if (string === reverse) {
        document.writeln(`The Text ${string} is Palindrome !`);
    } else {
        document.writeln(`The Text ${string} is Not Palindrome !`);
    }
}
palindromecheck("MOM");