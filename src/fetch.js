  const forecastContainer = document.getElementById("Forecast");


  let hourdata = [];
  
  let weatherdatainday = []
async function getWeatherDataInaday(city,apikey) {
    try{
      
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=1&aqi=no&alerts=no`;

        const response = await fetch(url);
        const data = await response.json();
    
        weatherdatainday = data;
        console.log(weatherdatainday.forecast.forecastday[0].hour);
        hourdata = weatherdatainday.forecast.forecastday[0].hour;
        loaddatainday();
        return hourdata;
    }
    catch(error){
         console.log("An Error Occured", error);
         
    }
}

function loaddatainday(){
hourdata.map((hour)=>{
 
    console.log(hour.time);
     forecastContainer.innerHTML = ''; 
    
    forecastContainer.innerHTML += `
      <div
                        class="flex flex-col items-center gap-2 p-4 rounded-lg bg-background-light dark:bg-background-dark min-w-[80px]"
                      >
                        <p
                          class="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary"
                        >
                            ${hour.time.split(" ")[1]}
                        </p>
                        <img
                          src="https:${hour.condition.icon}"
                          alt="Weather Icon"
                          class="w-10 h-10"
                        />
                        <p
                          class="text-lg font-bold text-text-light-primary dark:text-text-dark-primary"
                        >
                          ${hour.temp_c}°C
                        </p>
                      </div>
    `
})
}
export {getWeatherDataInaday, weatherdatainday};