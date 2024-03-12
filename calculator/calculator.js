const display = document.getElementById("display");
let text ="";
let result="";

function input(input){
    text += input;
    display.value= result + text;
}


function finalresult(){
    try{
    if(text.length !== 0){
    result += text;
    result = eval(result);
    result = result.toString();
    display.value = result;
     text = "";
    }
  }catch{
    display.value = "Error"
  }
}


function clean(){
    text = '';
    result = '';
    display.value = 0;
}

