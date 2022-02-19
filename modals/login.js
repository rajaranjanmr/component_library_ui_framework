const idEl = document.querySelector("#id01");
const loginBtnEl = document.querySelector(".login-btn-ecom");
const cancelBtnEl = document.querySelector(".cancel-btn")
const closeElement = document.querySelector(".close-item");
loginBtnEl.addEventListener("click",()=>{
    idEl.style.display='block';
    idEl.style.zIndex = '3';
    console.log("its inside");
})
cancelBtnEl.addEventListener("click",()=>{
    idEl.style.display='none';
})
closeElement.addEventListener("click",()=>{
    idEl.style.display='none';
})
