
console.log("Hello from comments!");

const params = new URLSearchParams(window.location.search);
const key = params.get('key');

// console.log(localStorage.getItem(key));
temp=JSON.parse(localStorage.getItem(key));

const block=document.querySelector(".comments");
function addComments(){
    block.innerHTML='';
    temp.forEach((item,index) => {
        block.insertAdjacentHTML("beforeend",`
            <div id="c_wrap">
                <button id="b_d-${index}">Delete</button>
                <p>${item}</p>
            </div>
        `);
    });
}
addComments();

block.addEventListener("click",(e)=>{
    if(e.target.tagName=='BUTTON'){
        // console.log(Number(e.target.id.split("-")[1]));
        temp.splice(Number(e.target.id.split("-")[1]),1);
        localStorage.setItem(key,JSON.stringify(temp));
        addComments();
    }  
});
