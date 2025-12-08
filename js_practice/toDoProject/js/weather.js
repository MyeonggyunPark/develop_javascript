const API_KEY = "d091e375f5caa902a0cf6a620600f589"; 

function onGeoSucess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      
      if (data.cod !== 200) {
        console.error("API Error:", data.message);
        alert(`날씨 정보를 가져올 수 없습니다: ${data.message}`);
        return; 
      }

      
      const weatherContainer = document.getElementById("weather");
      const weatherSpan = weatherContainer.querySelector("span:first-child");
      const citySpan = weatherContainer.querySelector("span:last-child");

      const city = data.name;
      const weather = data.weather[0].main;
      const temp = Math.floor(data.main.temp);

      weatherSpan.innerText = `${weather} / ${temp}°C`;
      citySpan.innerText = city;
    })
    .catch((error) => console.log("Network Error:", error));
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);