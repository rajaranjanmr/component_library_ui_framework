//for alert 
const rcloseBtn = document.querySelector(".rclose");
const rAlert = document.querySelector(".redalert");
rcloseBtn.addEventListener("click",function closeAlert(){
    console.log("inside function")
    rAlert.style.display = 'none';
    
})

const gcloseBtn = document.querySelector(".gclose");
const gAlert = document.querySelector(".greenalert");
gcloseBtn.addEventListener("click",function closeAlert(){
    console.log("inside function")
    gAlert.style.display = 'none';
    
})

const bcloseBtn = document.querySelector(".bclose");
const bAlert = document.querySelector(".bluealert");
bcloseBtn.addEventListener("click",function closeAlert(){
    console.log("inside function")
    bAlert.style.display = 'none';
    
})

const ycloseBtn = document.querySelector(".yclose");
const yAlert = document.querySelector(".yellowalert");
ycloseBtn.addEventListener("click",function closeAlert(){
    console.log("inside function")
yAlert.style.display = 'none';
    
})

//for modal

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

//for cards

const closeEl = document.querySelector(".fal");
const closeCard = document.querySelector(".card-dismiss")
closeEl.addEventListener("click",function closeFunction(){
    closeCard.style.display='none';
})

//for toast
const btnEl = document.querySelector(".toast");
const toastEl = document.querySelector(".toast-container");
btnEl.addEventListener("click",()=>{
    toastEl.style.display="block";
    
})