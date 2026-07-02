
window.addEventListener("scroll",()=>{


let cards=document.querySelectorAll(".card");


cards.forEach(card=>{


let top=card.getBoundingClientRect().top;


if(top < window.innerHeight){

card.style.opacity="1";

}


})


})
