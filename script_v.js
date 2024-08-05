console.log("Hi!")

let arr=JSON.parse(localStorage.getItem("liked_photos"));
console.log(arr);
console.log(arr[0].key);

let num=arr.length,frame=5;
if(num<frame){
    frame=num;
}
let img=document.querySelector(".img");

let slider=document.querySelector(".slider");
var id=0,index=0;


async function fetchPhoto(photoId,key) {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/${photoId}`, {
        headers: {
            Authorization: `Client-ID ${key}`
        }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при получении фото с Unsplash:', error);
    }
}


let heart=document.getElementById("heart");
async function getPhoto(index){
    let data=await fetchPhoto(arr[index].id,arr[index].key);
    img.src = data.urls.regular;
    document.getElementById("author").innerHTML=data.user.name;
    
    if(arr[index].liked){
        document.getElementById("likes_cnt").innerHTML=data.likes+1;
        if(heart.classList.contains("disactive")){
            heart.classList.toggle("disactive");
            heart.classList.toggle("active");
        }
    }else{
        document.getElementById("likes_cnt").innerHTML=data.likes;
        if(heart.classList.contains("active")){
            heart.classList.toggle("disactive");
            heart.classList.toggle("active");
        }
    }
}

getPhoto(0);


function addPoints(){
    slider.insertAdjacentHTML('beforeend',`<img id="5" class="pointer" src="__2208.png"></img>`);
    slider.insertAdjacentHTML('beforeend',`<div id="${0}" class="pointer selection">${1}</div>`);
    for (let i = 1; i < frame; i++) {
        slider.insertAdjacentHTML('beforeend',`<div id="${i}" class="pointer">${i+1}</div>`);
    }
    slider.insertAdjacentHTML('beforeend',`<img id="6" class="pointer" src="__2207.png"></img>`);
}

addPoints();

function sliderShift(shift){
    for(var i=0;i<slider.children.length;i++){
        if(Number(slider.children[i].getAttribute("id"))<5){
            slider.children[i].textContent=+(Number(slider.children[i].textContent)+shift);
        }
    }
}

function idShift(oldId,newId){
    document.querySelector("#"+CSS.escape(oldId)).classList.toggle("selection");
    document.querySelector("#"+CSS.escape(newId)).classList.toggle("selection");
    id=newId;
}


slider.addEventListener("click",async (e)=>{
    switch(e.target.getAttribute("id")){
        
        case "0":idShift(id,0);break;
        case "1":idShift(id,1);break;
        case "2":idShift(id,2);break;
        case "3":idShift(id,3);break;
        case "4":idShift(id,4);break;
        case "5":
            if(num>frame){
                if(id>2){
                    idShift(id,id-1);
                }else{
                    if(index>0){
                        index--;
                        sliderShift(-1);
                    }else{
                        if(id>0){
                            idShift(id,id-1);
                        }else{
                            sliderShift(num-frame);
                            index=num-frame;
                            idShift(id,(frame-1));
                        }
                    }
                }
            }else{
                if(id>0){
                    idShift(id,id-1);
                }else{
                    idShift(id,(frame-1));
                }
            }
            break;

        case "6":
            if(num>frame){
                if(id<2){
                    idShift(id,id+1);
                }else{
                    if(index<(num-frame)){
                        index++;
                        sliderShift(1);
                    }else{
                        if(id<(frame-1)){
                            idShift(id,id+1);
                        }else{
                            sliderShift(-index);
                            index=0;
                            idShift(id,0);
                        }
                    }
                }
            }else{
                if(id<(frame-1)){
                    idShift(id,id+1);
                }else{
                    idShift(id,0);
                }
            }
            break;
    }
    await getPhoto(index+id);
});

document.querySelector(".button").addEventListener("click",()=>{
    arr=arr.filter((item)=>item.liked);
    localStorage.setItem("liked_photos",JSON.stringify(arr));
    window.location.href="index.html";
})



heart.addEventListener("click",()=>{
    if(heart.classList.contains("disactive")){
        arr[index+id].liked=true;
        document.getElementById("likes_cnt").innerHTML=Number(document.getElementById("likes_cnt").textContent)+1;    
    }else{
        arr[index+id].liked=false;
        document.getElementById("likes_cnt").innerHTML=Number(document.getElementById("likes_cnt").textContent)-1; 
    }

    heart.classList.toggle("disactive");
    heart.classList.toggle("active"); 
});
