//1
function getQub(num) {
    return num * num * num;
}

console.log(getQub(2) + "+" + getQub(3));

//2
let salary = prompt("Enter salary");
//if (isNaN(parseInt(salary))) {
//    console.log("Entrance not correct!");
//} else {
//    salary -= salary * 0.13;
//    console.log(`The amount of wages minus taxes is equal to the value ${salary}`);
//}


let regexp = /\d*[^\d]/;

if (regexp.test(salary)) {
    console.log("Entrance not correct!");
} else {
    salary -= salary * 0.13;
    console.log(`The amount of wages minus taxes is equal to the value ${salary}`);
}

//3
let arr = prompt("Enter three numbers(like 1 2 3)").split(" ");
arr.forEach((item) => console.log(item));
let arrMax = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[max]) {
            max = i;
        }
    }
    return arr[max];
};
console.log("Max value is " + arrMax(arr));


//4

function getSum(num1, num2) {
    return num1 + num2;
}
function getDifference(num1, num2) {
    return num1 >= num2 ? num1 - num2 : num2 - num1;
}

function getMult(num1, num2) {
    return num1 * num2;
}

function getQuotient(num1,num2) {
    return num1 / num2;
}

console.log(`Sum ${getSum(2, 6)}`);
console.log(`Difference ${getDifference(2, 6)}`);
console.log(`Mult ${getMult(2, 6)}`);
console.log(`Division ${getQuotient(2, 6)}`);











