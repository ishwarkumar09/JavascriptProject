let slideindex = 0 ;
let intervalId = null;
const mySlide = document.querySelectorAll(".slide");

document.addEventListener("DOMContentLoaded" ,initializerSlider)



function initializerSlider(){
    if(mySlide.length > 0){
        mySlide[slideindex].classList.add("displaySlide")
        intervalId = setInterval(nextSlide ,5000)
    }

}

function slideShow (index){
  if(index >= mySlide.length){
    slideindex = 0;
  }else if(index < 0){
    slideindex = mySlide.length - 1;
  }


 mySlide.forEach(slide => {
    slide.classList.remove("displaySlide")
 });
 mySlide[slideindex].classList.add("displaySlide")

}

function nextSlide(){
    slideindex ++;
    slideShow(slideindex)
}

function prevSlide(n){
    clearInterval(intervalId)
    slideindex --;
    slideShow(slideindex);
}