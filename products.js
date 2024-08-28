
console.log("Hello from products");
let container=document.querySelector(".container");
for(let key in localStorage){
    
    if (localStorage.hasOwnProperty(key)) {
        // console.log(key);
        container.insertAdjacentHTML("beforeend",`
                <button id="comment_b"><div class="window">${key}</div></button>
            `);
        // console.log(localStorage.getItem(key));
    }
}

container.addEventListener("click",(e)=>{
    location.href=`./comments.html?key=${e.target.textContent}`;
})