//1

function simpleCicle(cicles) {
    console.log("=======================");
    console.log("Task 1");
    for (let i = 0; i < cicles; i++) {
        if (i == 0) {
            console.log("it is 0");
        } else {
            if (i % 2 == 0) {
                console.log("it is even values");
            } else {
                console.log("it is odd values");
            }
        }
        
    }
    console.log("=======================");
}

simpleCicle(prompt("Enter number"));

//2
let myArr = [1, 2, 3, 4, 5, 6, 7];
console.log("=======================");
console.log("Task 2");
console.log("Primery array");
myArr.forEach(i => console.log(i));
myArr.splice(3, 2);
console.log("Secondary array");
myArr.forEach(i => console.log(i));
console.log("=======================");


////////////////ѕопытка более интерактивного решени€//////////////////////
let arr = new Array();

function arrDeleteEl() {
    console.log("Now are present those elements:");
    arr = document.getElementsByClassName("block");
    let width = 100 / arr.length;
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.cssText = "width:" + width + "%;";
        console.log(`Under number ${i} is ${arr[i].textContent}`);
    }
}
function createArr(count) {
    for (let i = 0; i < count; i++) {
        let box = document.createElement("div");
        box.className = "block";
        box.innerHTML = i;
        let width = 100 / count;
        box.style.cssText = "width:" + width + "%;";
        let container = document.getElementsByClassName("container")[0];
        container.append(box);
        box.addEventListener("click", function () {
            box.remove();
            arrDeleteEl();
        });
    }
}

createArr(prompt("Enter number of elements"));
//////////////////////////

//3
console.log("=======================");
console.log("Task 3");
let arrayTask3 = new Array();
function getRandomArray(count) {
    for (let i = 0; i < count; i++) {
        arrayTask3.push(Math.round(Math.random() * 9));
    }
}
getRandomArray(5);
arrayTask3.forEach(i => console.log(i));
console.log(`Sum of elements is ${arrayTask3.reduce((sum, item) => sum += item)}`);
arrayTask3.sort((a, b) => a - b);
console.log(`Min element is ${arrayTask3[0]}`);
arrayTask3.includes(3,0) ? console.log("Yes 3 is present") : console.log("There is no 3");
console.log("=======================");



//*

for (let i = 0; i < 20; i++) {
    let str="*";
    for (let j = 0; j<i; j++) {
        str += "*";
    }
    console.log(str);
}
















