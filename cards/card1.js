const closeEl = document.querySelector(".fal");
const closeCard = document.querySelector(".dismiss-icon")
closeEl.addEventListener("click",function closeFunction(){
    closeCard.style.display='none';
})