const display = document.getElementById("display-watch");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function startBtn(){
  if(!isRunning){
  startTime = Date.now()- elapsedTime ;
  timer = setInterval(update , 10);
 
  isRunning = true;
  }
}



function stopBtn(){
if(isRunning){
    elapsedTime = Date.now() - startTime;  ;
  clearInterval(timer)
  isRunning = false
}


}

function resetBtn(){
 clearInterval(timer)
startTime = 0;
elapsedTime = 0;
isRunning = false;
display.textContent = "00:00:00:00"
}


function update(){

    elapsedTime = Date.now() - startTime; 
    
    let hour = Math.floor(elapsedTime/(1000*60*60))
    let minute = Math.floor(elapsedTime/(1000*60) % 60)
    let second = Math.floor(elapsedTime/1000 % 60 )
    let millisecond = Math.floor(elapsedTime % 1000 /10)
    
    hour = hour.toString().padStart(2,0);
    minute = minute.toString().padStart(2,0);
    second = second.toString().padStart(2,0);
    millisecond = millisecond.toString().padStart(2,0);
     display.textContent = `${hour}:${minute}:${second}:${millisecond}`


}