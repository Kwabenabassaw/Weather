const day = document.getElementById('days');
let weatherbyday = [];

async function fetchWeatherday(city, apikey) {
    try {
        // Note: Using HTTP here. If this is on an HTTPS site, the browser might block mixed content.
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=6&aqi=no&alerts=no`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        weatherbyday = data.forecast.forecastday;
        console.log(weatherbyday);

        loaddays(); // Call loaddays after data is fetched

        return data;
              
    } catch (error) {
        console.error("An Error Occurred:", error);
    }
}


function loaddays(){
  // FIX: Clear the container before loading new days
  day.innerHTML = ''; 

  weatherbyday.map(days => {
    console.log(days.date);

    const dateobj = new Date(days.date);
    const options = { weekday: 'long' };
    const condition = days.day.condition.text;
    const dayname = new Intl.DateTimeFormat('en-US', options).format(dateobj);
    const maxtemp = days.day.maxtemp_c;
    const mintemp = days.day.mintemp_c;
    
    // It's better to use innerHTML once after building the whole string for performance, 
    // but the current method is fine for a small number of items.
    day.innerHTML += `
      <div class="flex items-center justify-between pr-8 pt-4 pb-4 px-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
        <div class="flex flex-col gap-4">
          <p class="font-bold text-text-light-primary dark:text-text-dark-primary">
              ${dayname}
          </p>
          <p class="text-sm text-text-light-secondary dark:text-text-dark-secondary">
              ${condition}
          </p>
        </div>
        <div class="flex items-center gap-2">
            <img src="${days.day.condition.icon}" alt="${condition}" class="w-16 h-8"/>
          <p class="font-bold text-text-light-primary dark:text-text-dark-primary">
            ${maxtemp}°/${mintemp}°
          </p>
        </div>
      </div>
    `;
  });         
}

export { fetchWeatherday };
