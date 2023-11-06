document.addEventListener('DOMContentLoaded', function () {
  const weatherIcon = {
    '01': 'fas fa-sun',
    '02': 'fas fa-cloud-sun',
    '03': 'fas fa-cloud',
    '04': 'fas fa-cloud-meatball',
    '09': 'fas fa-cloud-sun-rain',
    '10': 'fas fa-cloud-showers-heavy',
    '11': 'fas fa-poo-storm',
    '13': 'far fa-snowflake',
    '50': 'fas fa-smog'
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeather(lat, lon);
    }, function () {
      alert("Can't find you. No weather for you.");
    });
  } else {
    alert("Can't find you. No weather for you.");
  }

  function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=caa61530e7672b51d726318398f457a4&units=metric`)
      .then(response => response.json())
      .then(data => {
        const $Icon = (data.weather[0].icon).substr(0, 2);
        const $Temp = Math.floor(data.main.temp) + '°C';
        const $city = data.name;

        document.querySelector('.CurrIcon').innerHTML = '<i class="' + weatherIcon[$Icon] + '"></i>';
        document.querySelector('.CurrTemp').innerText = $Temp;
        document.querySelector('.City').innerText = $city;

        // 날씨 데이터 로컬 스토리지에 저장
        localStorage.setItem('weatherData', JSON.stringify(data));
      })
      .catch(error => {
        console.error(error);
      });
  }
});
