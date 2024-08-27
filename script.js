console.log("Hello");

//1

class Library{
    #book_list=new Map();
    constructor(book_list){
        this.#book_list=book_list;   
    }

    addBook(title,book){
        if(this.#book_list.has(title)){
            throw new Error("Book is already exists!");
        }
        this.#book_list.set(title,book);
    }

    getAllBooks(){
        return this.#book_list;
    }

    removeBook(title){
        if(this.#book_list.has(title)){
            this.#book_list.delete(title);
        }else{
            throw new Error("Book is already removed!");
        }
    }

    hasBook(title){
        if(this.#book_list.has(title)){
            return true;
        }else{
            return false;
        }
    }

    printAllBooks(){
        console.log("++++++++++++++++++++++++++++++++++++++++++");
        this.#book_list.entries().forEach(item=>console.log(`${item[1].title},${item[1].author},${item[1].year}`));
    }
}

let start_list=new Map();
start_list.set("My live",{title:"My live",author:"Sasha",year:"2024"});

const lib = new Library(start_list);
lib.addBook("Goodby",{title:"Goodby",author:"Grisha",year:"1987"});
lib.addBook("Hello",{title:"Hello",author:"Buba",year:"2020"});
lib.addBook("G",{title:"G",author:"Juk",year:"2000"});


lib.printAllBooks();

lib.removeBook("G");

lib.printAllBooks();

if(lib.hasBook("Hello")){
    let otherLib=lib.getAllBooks();
    console.log(otherLib);
}

lib.printAllBooks();

lib.addBook("B",{title:"B",author:"Puk",year:"2001"});

lib.printAllBooks();


//2


const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

let index=0;
let comment_id=4;

let wrap=document.querySelector(".wrap");
let win=document.querySelector(".window");
let comments=document.querySelector(".comments");
let c_e=document.querySelector("#e_c");

function fillTemplate(){
    win.innerHTML=`<div class="window">${initialData[index].product}</div>`
    comments.innerHTML="";
    initialData[index].reviews.forEach(item=>{
        comments.insertAdjacentHTML("beforeend",`
                <p class="comment">${item.text}</p>
            `)
    });
}

fillTemplate();

document.getElementById("prev").addEventListener("click",()=>{
    if(index>0){
        index--;
    }else{
        index=initialData.length-1;
    }
    fillTemplate();
    c_e.innerHTML='';
});


document.getElementById("next").addEventListener("click",()=>{
    if(index<initialData.length-1){
        index++;
    }else{
        index=0;
    }
    fillTemplate();
    c_e.innerHTML='';
});

document.getElementById("b_c").addEventListener("click",()=>{
    let t=document.getElementById("i_c").value
    console.log(t);
    try{
        if(t.length<50 || t.length >500){
            throw new Error("God! Are you crazy!? You write too short or too long message!");
        }else{
            c_e.innerHTML='';
            comment_id++;
            initialData[index].reviews.push({text:t,id:comment_id});
        }
    }catch(error){
        c_e.innerHTML=error.message;
    }
    fillTemplate();
});




















