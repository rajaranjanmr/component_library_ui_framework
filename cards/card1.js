const closeEl = document.querySelector(".fal");
const closeCard = document.querySelector(".card-dismiss")
closeEl.addEventListener("click",function closeFunction(){
    closeCard.style.display='none';
})