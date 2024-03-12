let guess;
let randomNumber;
let running = true;
let attempt =0;

let min = 1;
let max = 100;


randomNumber = Math.floor(Math.random()*((max - min)+1)) + 1;


while(running){

  guess = window.prompt("Enter your number")
  guess = Number(guess)
  

   if(isNaN(guess)){
     window.alert("This is not a number enter a number please")
   }
    else if(guess < 0 || guess > 100){
        window.alert(`Please enter a number between ${min} - ${max}.`)
    }else{ 
          attempt++;

        if(guess < randomNumber){
            window.alert(`you number is low from random number`)
        }else if(guess > randomNumber){
            window.alert(`your number is high from random number`)
        }else{
            window.alert(`congratulation !! you got the currect number in ${attempt} `)
            running = false;
        }
    }



    


}
