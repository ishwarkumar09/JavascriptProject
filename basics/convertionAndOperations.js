
// <==========================Number=========================>
let age = 14
let score = "12"



// console.log(typeof score)
let valueInScore = Number(score)
// console.log(valueInScore)

// console.log(typeof NaN) result => type of Nan is number 
// console.log(Number(null)) result => convertion of null in number is 0 and data type will come number;

// console.log(Number(true)) // result => value will be 1 and data type number
// console.log(Number(false)) // result => value will be 0 and data type number

// console.log(Number(undefined)) // result => value will be NaN and data type number


// <======================================boolean==========================================>

    const isLoggedin = null

    const boolIsLoggedIn = Boolean(isLoggedin)

    // console.log(boolIsLoggedIn)
    
    // <=================result==================>
    // ==> for value 1 convert true and 0 convert false data type boolean
    // ==> when number is greater than 1 than comes true 
    // ==> when empty string than come false and when when is any string available than true
    // ==> when value is null than convertion is false


// ********************** OPERATIONS ***************************


let value = 3
let negValue = -value

// console.log(negValue);
// console.log(2+2)
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

// let str1 = 'hello'
// let str2 = ' ishwar'

// let str3 = str1 + str2
// console.log(str3); // str3 result is hello ishwar

// console.log("1" + 2); // result will come 12
// console.log(1 + "2"); // result will come 12

// console.log("1" +2 +2);// result will come 122
// console.log(1 + 2 + "2") ; //result will come 32

// console.log(+true); // result will be 1



let gamescore = 100

// console.log(++gamescore)  //prefix
// console.log(gamescore++) // postfix


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%<==>%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)


// the reason it that an equality check == and comparisons >< >= <= work differently
// comparisons convert null to a number , treating it as 0 .
// that's why null >= 0 is true and null > 0 is false


// ===

console.log("2" === 2)




