
console.log("Hello from comments!");

const params = new URLSearchParams(window.location.search);
const key = params.get('key');

// console.log(localStorage.getItem(key));
temp=JSON.parse(localStorage.getItem(key));

const block=document.querySelector(".comments");
function addComments(){
    block.innerHTML='';
    temp.forEach(item => {
        block.insertAdjacentHTML("beforeend",`
            <div id="c_wrap">
                <button id="b_d">Delete</button>
                <p>${item}</p>
            </div>
        `);
    });
}
addComments();

block.addEventListener("click",(e)=>{
    // console.log(e.target.nextElementSibling);
    temp=temp.filter(item=>item!=e.target.nextElementSibling.textContent);
    localStorage.setItem(key,JSON.stringify(temp));
    addComments();
});
