const displayHours = document.getElementById("hours")
const displayMinutes = document.getElementById("minutes")
const displaySeconds = document.getElementById("seconds")
const displayCount = document.getElementById("count")


let count = 0;
let second = 0
let hour = 0
let minute = 0
let run = false ;



const startBtn = ()=>{
setInterval(updateTime , 10);
run = true}


function stopBtn(){
   if (run){
    run = !run
   }
}

function resetBtn(){

 count = 0;
 second = 0
 hour = 0
 minute = 0
 run =false

}
function updateTime(){
   
     
    if(!run){
        count++;
    }
    if(count == 100){
        second++;
        count =0 ;
    }
    if(second == 60){
        minute++;
        second=0
    }
    if(minute==60){
        hour++;
        minute=0
    }
    count = count.toString().padStart(2,0)
    second = second.toString().padStart(2,0)
    minute = minute.toString().padStart(2,0)
    hour = hour.toString().padStart(2,0)
  displayCount.textContent = count;
 displaySeconds.textContent = second;
 displayMinutes.textContent = minute;
 
}
