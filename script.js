//1

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

console.log("Task1 ============================");
console.log(Object.values(numbers).filter((num) => num >= 3));

//2
console.log("Task2 ============================");
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(`Author: ${post.author}`);
console.log(`Dislikes: ${post.comments[0].rating.dislikes}`);
console.log(`User ID: ${post.comments[1].userId}`);
console.log(`Text: ${post.comments[1].text}`);


//3

console.log("Task3 ============================");
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach((item) => console.table(Object.entries(item)));
products.forEach((item) => item.price -= item.price * 0.15);
console.log("============================");
products.forEach((item) => console.table(Object.entries(item)));

//4
console.log("Task4 ============================");
const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

products2.forEach(item => console.table(Object.entries(item)));

console.log("4.1============================");
console.table(products2.filter(item => item.photos != undefined)
    .filter(item => item.photos.length > 0));


products2.sort((a, b) => a.price - b.price);

console.log("4.2============================");
products2.forEach(item => console.table(Object.entries(item)));

//5
console.log("Task5============================");
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

console.log("Variant 1============================");
let en_ru=en.map((item, index) => {
    let obj = new Object();
    obj[item] = ru[index];
    return obj;
});
en_ru.forEach(item => console.table(Object.entries(item)));

console.log("Variant 2============================");
let en_ru_obj = new Object();
for (let i in en) {
    en_ru_obj[i] = ru[i];
}
console.table(Object.entries(en_ru_obj));

















