console.log("Hi!")

let arr=JSON.parse(data);
console.log(arr);

let num=arr.length,frame=5;
if(num<frame){
    frame=num;
}
let img=document.querySelector(".img");
img.src = 'img2/'+arr[0].name;
let slider=document.querySelector(".slider");
var id=0,index=0;

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

slider.addEventListener("click",(e)=>{
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
    //console.log(id+" "+index);
    img.src = 'img2/'+arr[index+id].name;
});