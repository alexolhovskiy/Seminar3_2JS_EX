//alert("Hello");
//let first = prompt("Enter your name");
//if (confirm("is this your real name?")) {
//    alert("OK! Yuor name is "+first);
//} else {
//    alert("NOT OK!");
//}

//1
let num1 = prompt("Enter num1");
let num2 = prompt("Enter num2");

alert(`${num1<=1?"Yes num1<=1":"No num1>1"}`);
alert(`${num2 >= 3 ? "Yes num2>=3" : "No num2<3"}`);

//2
let test = true;
//if (test === true) {
//    console.log('+++');
//} else {
//    console.log('---');
//}

test ? console.log('+++') : console.log('---');

//3
let day = Math.floor( 1 + Math.random() * 30);
console.log("Our number is "+day);
if (day > 1 && day < 11) {
    console.log("First decade");
} else {
    if (day > 10 && day < 21) {
        console.log("Second decade");
    } else {
        console.log("Third decade");
    }
}

//4
let num = prompt("Enter number");
let hundreds = Math.floor(num / 100) % 10;
let tens = Math.floor(num / 10) % 10;
let units = num % 10;
console.log(`In the number ${num} there are hundreds: ${hundreds}, tens: ${tens}, units: ${units}`);
