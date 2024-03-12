const choices = ["rock" , "paper" , "sessior"]

const playerDisplay = document.getElementById("display-player");
const computerDisplay = document.getElementById("display-computer");
const resultDisplay = document.getElementById("display-result")
const displayPlayerScore = document.getElementById("player-score");
const displayComputerScore = document.getElementById("computer-score");
const displayTotalChance = document.getElementById("total-chance");
const displayTieGame = document.getElementById("tie-game");
let playerScore = 0
let computerScore = 0;
let totalChance = 0;
let tieGame = 0;


function playGame(value){
 
    const playerChoice = value;
      let result = ""
      totalChance ++;
    const computerChoice = choices[Math.floor(Math.random()*3)]

    playerDisplay.textContent =`Player: ${playerChoice}`
    computerDisplay.textContent = `Computer: ${computerChoice}`

    //   console.log(playerChoice)

    if(playerChoice === computerChoice){
        result = `It's A Tie`
    }else {
        switch(playerChoice){
            case 'rock':
                result = (computerChoice === "sessior")? "YOU WIN!":"You lose!!"
                break ;
            case 'paper':
                result = (computerChoice === "rock") ?"YOU WIN!":"You lose!!"  
                break;
            case 'sessior' :
                 result = (computerChoice === "paper") ? "YOU WIN!":"You lose!!"  
                 break;  
        }

    }   if(result === "YOU WIN!"){
        playerScore++
        resultDisplay.style.color = "green"
    } else if (result === "You lose!!" ){
        computerScore++;
        resultDisplay.style.color = "red"
    }else{
        resultDisplay.style.color = "black"
        tieGame++;

    }
          resultDisplay.textContent = result;
          displayPlayerScore.textContent =`Player Score ${playerScore}`
          displayComputerScore.textContent =`Computer Score ${computerScore}`
          displayTotalChance.textContent = `Total Chance: ${totalChance}`
          displayTieGame.textContent = `Tie Game : ${tieGame}`

}