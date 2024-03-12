const myInput = document.getElementById("myText");
const toFarenhite = document.getElementById("toFahrenhite");
const toCelcius = document.getElementById("toCelcius");
const handlebtn = document.getElementById("mysubmit");
const result = document.getElementById("result");

let temp;

function convert() {
  temp = Number(myInput.value);
  console.log(typeof(temp))

  if (isNaN(temp)) {
    result.textContent = "Enter  temperature in number";
    return;
  }

  if (toFarenhite.checked) {
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (toCelcius.checked) {
    temp = ((temp - 32) * 5) / 9;
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "select an option ";
  }
};
