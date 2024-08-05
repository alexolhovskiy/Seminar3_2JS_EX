
const img = document.querySelector('.img');
const accessKey = 'NNqU6NwYF2naWaXdTgVxjSe_K6AdmUQKg2vogoKAHJc'; 
let button=document.querySelector(".button");
var data;

if((localStorage.length==0)|(localStorage.getItem("liked_photos")===null)|
(JSON.parse(localStorage.getItem("liked_photos")).length==0)){
    button.classList.toggle("d_b");
}else{
    button.classList.toggle("a_b");
}


function putToStorage(data){
    let liked_photos;
    if(localStorage.getItem("liked_photos")===null){
        liked_photos=new Array();
        button.classList.toggle("a_b");
        button.classList.toggle("d_b");
    }else{
        liked_photos=JSON.parse(localStorage.getItem("liked_photos"));
    }
    liked_photos.push({"id":data.id,"key":accessKey,"liked":true});
    localStorage.setItem("liked_photos",JSON.stringify(liked_photos));
}


async function fetchRandomPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
        const data = await response.json();
        console.log(data);
        return data;            
    } catch (error) {
        console.error('Ошибка при получении фото с Unsplash:', error);
    }
}


async function getPhoto(){
    data=await fetchRandomPhoto();
    img.src = data.urls.regular;
    document.getElementById("author").innerHTML=data.user.name;
    document.getElementById("likes_cnt").innerHTML=data.likes;
}



let heart=document.getElementById("heart");
heart.addEventListener("click",()=>{
    if(heart.classList.contains("disactive")){
        data.likes+=1;        
    }else{
        data.likes-=1;
    }
    heart.classList.toggle("disactive");
    heart.classList.toggle("active");
    document.getElementById("likes_cnt").innerHTML=data.likes;
    putToStorage(data);
    
});



button.addEventListener("click",()=>{
    window.location.href="view.html";
})





window.addEventListener('load', getPhoto);

