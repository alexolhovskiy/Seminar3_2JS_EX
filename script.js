console.log("Hello");

//1


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

localStorage.clear();

initialData.forEach((item)=>{
    temp=[];
    item.reviews.forEach((i)=>{
        temp.push(i.text)
    });
    localStorage.setItem(item.product,JSON.stringify(temp));
});



let index=0;
let comment_id=4;

let wrap=document.querySelector(".wrap");
let win=document.querySelector(".window");
let comments=document.querySelector(".comments");
let c_e=document.querySelector("#e_c");


function fillTemplate(){

    win.innerHTML=`<div class="window">${localStorage.key(index)}</div>`
    comments.innerHTML="";
    JSON.parse(localStorage.getItem(localStorage.key(index))).forEach(item=>{
        comments.insertAdjacentHTML("beforeend",`
                <p class="comment">${item}</p>
            `)
    });
}

fillTemplate();

document.getElementById("prev").addEventListener("click",()=>{
    if(index>0){
        index--;
    }else{
        index=localStorage.length-1;
    }
    fillTemplate();
    c_e.innerHTML='';
});


document.getElementById("next").addEventListener("click",()=>{
    if(index<localStorage.length-1){
        index++;
    }else{
        index=0;
    }
    fillTemplate();
    c_e.innerHTML='';
});

document.getElementById("b_c").addEventListener("click",()=>{
    let t=document.getElementById("i_c").value
    // console.log(t);
    try{
        if(t.length<50 || t.length >500){
            throw new Error("God! Are you crazy!? You write too short or too long message!");
        }else{
            c_e.innerHTML='';
            comment_id++;
            let temp=JSON.parse(localStorage.getItem(localStorage.key(index)));
            temp.push(t);
            localStorage.setItem(localStorage.key(index),JSON.stringify(temp));
        }
    }catch(error){
        c_e.innerHTML=error.message;
    }
    fillTemplate();
});


document.getElementById("s_c").addEventListener("click",()=>{
    location.href="./products.html" 
});
