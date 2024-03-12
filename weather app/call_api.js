const key = "9512dd5ecfca49cfae555206241202&q";

let searchbox = document.querySelector(".search_section input");
let searchbtn = document.querySelector(".search_section button");

const getWeather = async function (city) {
  try {
    const url =
      "http://api.weatherapi.com/v1/current.json?key=" +
      key +
      "=" +
      city +
      "&aqi=no";

    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Fail to fetch weather data");
    }

    let data = await response.json();

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".w_upper span").innerHTML =
      data.current.wind_kph + "kph";
    document.querySelector(".hm_upper span").innerHTML =
      data.current.humidity + "%";
    document.querySelector(".weather_temp").innerHTML =
      Math.round(data.current.temp_c) + "°C";
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    alert("Failed to fetch weather data. Please try again later.");
  }
};

searchbtn.addEventListener("click", () => {
  const city = searchbox.value.trim(); // Trim to remove leading/trailing spaces
  if (city !== "") {
    getWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});
