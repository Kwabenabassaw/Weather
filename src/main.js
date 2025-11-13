
import { fetchWeatherday } from './Weatherday.js';
import { getWeatherDataInaday, weatherdatainday } from './fetch.js';
const city  = document.getElementById("city");
const btn = document.getElementById("settings");
const datetime = document.getElementById("datetime");
const currentCondition = document.getElementById("currentCondition");
const temp = document.getElementById("temp");
const currentimage = document.getElementById("currentimage");
const feelslike = document.getElementById("feelslike");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const uv = document.getElementById("uv");
const cityvalue = document.getElementById("cityvalue");
const save = document.getElementById("save");
 let location ="";
  let Country = "";
  let date = "";
  let time = "";
let currentweather = [];
 tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#4A90E2",
              "background-light": "#F8F9FA",
              "background-dark": "#101922",
              "text-light-primary": "#333333",
              "text-light-secondary": "#777777",
              "text-dark-primary": "#E0E0E0",
              "text-dark-secondary": "#A0A0A0",
              "card-light": "#FFFFFF",
              "card-dark": "#1A2632",
              "border-light": "#EAECEF",
              "border-dark": "#2C3A47",
            },
            fontFamily: {
              display: ["Inter", "sans-serif"],
            },
            borderRadius: {
              DEFAULT: "0.5rem",
              lg: "0.75rem",
              xl: "1rem",
              full: "9999px",
            },
          },
        },
      };

function changeCity(){
  let cityname = cityvalue.value;
  console.log(cityname);
  fetchCurrentWeather(cityname);
  getWeatherDataInaday(cityname,apikey);
  fetchWeatherday(cityname, apikey);
}

save.addEventListener("click", function(){
  changeCity();
})
let cityElement = document.getElementById("city");

const apikey  = '03a05cb89e344fcb8ce164434252406'

async function fetchCurrentWeather (cityname="Kumasi") {
  const url = `http://api.weatherapi.com/v1/current.json?key=03a05cb89e344fcb8ce164434252406&q=${cityname}&aqi=no`
    const response = await fetch(url);
    
    const data = await response.json();
    currentweather=data;
    
    console.log(currentweather);
  location = currentweather.location.name;
  Country = currentweather.location.country;
  console.log(Country);
  

    
console.log(location);
updateLocation();
GetDatetime();
GetCurrentComdition();
currentWeather()


}


function updateLocation() {
  city.innerHTML = `${location}, ${Country}`;
  
}



function GetDatetime(){
date =currentweather.location.localtime;
 const dateobject = new Date(date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
 let currentDateString = dateobject.toLocaleDateString(undefined, options);
  let currentTimeString = dateobject.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  console.log(currentDateString);
  datetime.innerHTML = `${currentDateString}, ${currentTimeString}`;
  


console.log(date);


}

function GetCurrentComdition(){

 console.log(currentweather.current.condition.text);
  currentweather.current.condition.text;
  currentCondition.innerHTML = `${currentweather.current.condition.text}`;
}

function currentWeather(){
  
currentweather.current.temp_c;
  temp.innerHTML = `${currentweather.current.temp_c}°C`;
  const iconUrl = currentweather.current.condition.icon;
  const feelslikeValue = currentweather.current.feelslike_c;
  const windSpeedValue = currentweather.current.wind_kph;
  const humidityValue = currentweather.current.humidity;
  const uvValue = currentweather.current.uv;
  const visibilityValue = currentweather.current.vis_km;
  feelslike.innerHTML = `Feels Like ${feelslikeValue}°C`;
  currentimage.innerHTML = `<img src="${iconUrl}" alt="Weather Icon" class="size-24">`;
  windSpeed.innerHTML = `${windSpeedValue} kph`;
  humidity.innerHTML =  `${humidityValue}%`;
  uv.innerHTML = `${uvValue}`;
  visibility.innerHTML = `${visibilityValue} km`;
}


addEventListener


btn.addEventListener("click", async function() {


  
});

  document.
addEventListener('DOMContentLoaded', async() => {
    fetchCurrentWeather();
  console.log( await getWeatherDataInaday("Kumasi",apikey) );

  console.log(weatherdatainday);
  
  fetchWeatherday("Kumasi", apikey);

});