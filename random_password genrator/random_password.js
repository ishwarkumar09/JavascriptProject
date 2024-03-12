function generator(passwordLength,isLowerCase,isUpperCase,isNumber,isSymbol){

const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const number = "1234567890"
const symbol = "!@#$%^&*~/"

let allow = "" ; 
let result = "" ; 

allow += isLowerCase ? lowerCase : "";
allow += isUpperCase ? upperCase : "";
allow += isNumber ? number : "";
allow += isSymbol ? symbol : ""

let length = allow.length;

if(passwordLength <= 0){
    return `(password length must be at least 1)`
}

if (length ===0){
    return `(At least 1 set of character needs to be selected)`
}
for (let i = 0 ; i < passwordLength ; i++){
    let index = Math.floor(Math.random ()* length)
    result += allow.charAt(index)

}

return result

}


const passwordLength = 10;
const isLowerCase = false;
const isUpperCase = false;
const isNumber = false;
const isSymbol = false;

const password = generator(passwordLength,isLowerCase,isUpperCase,isNumber,isSymbol);

console.log(password)