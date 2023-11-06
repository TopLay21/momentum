$(document).ready(function(){
    let weatherIcon = {
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
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            getWeather(lat, lon);
        }, function() {
            alert("Geolocation is not supported by this browser.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }

    function getWeather(lat, lon) {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=caa61530e7672b51d726318398f457a4&units=metric`,
            dataType: "json",
            type: 'GET',
            success: function(data){
                var $Icon = (data.weather[0].icon).substr(0,2);
                var $Temp = Math.floor(data.main.temp) + '°C';
                var $city = data.name;

                $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></i>');
                $('.CurrTemp').prepend($Temp);
                $('.City').append($city);
            }
        })
    }
});
