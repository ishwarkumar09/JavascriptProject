


function rollBtn (){
    const numberOfDices = document.getElementById("dice-number");
   
    const diceResult = document.getElementById("dice-result");
    const resultImages = document.getElementById("result-image")
    
    const value = [];
    const img = [];
    let randomNumber;
    
    let diceLength = numberOfDices.value;
    diceLength = Number(diceLength)
    
    for (let i = 0; i < diceLength; i++){
        
        randomNumber = Math.floor(Math.random()*6)+1;
        value.push(randomNumber);
        img.push(`<img id = "dice-img" src = "image/${randomNumber}.png" alt = "dice ${randomNumber}" ></img>`)
    }
   
    diceResult.textContent = `Dice: ${value.join(", ")}`;
    resultImages.innerHTML = img.join(" ");
    
  

}