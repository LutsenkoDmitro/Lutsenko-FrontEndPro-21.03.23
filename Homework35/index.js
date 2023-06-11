const xhr = new XMLHttpRequest();
const city = 'LVIV';
const apiKey = '5d066958a60d315387d9492393935c19';

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

xhr.open('GET', url, true);

xhr.onload = function () {
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const temperature = response.main.temp;
        const pressure = response.main.pressure;
        const description = response.weather[0].description;
        const humidity = response.main.humidity;
        const windSpeed = response.wind.speed;
        const windDirection = response.wind.deg;
        const iconCode = response.weather[0].icon;

        console.log('Temperature:', temperature);
        console.log('Pressure:', pressure);
        console.log('Description:', description);
        console.log('Humidity:', humidity);
        console.log('Wind Speed:', windSpeed);
        console.log('Wind Direction:', windDirection);
        console.log('Icon Code:', iconCode);

        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        console.log('Icon URL:', iconUrl);
    } else {
        console.error('Request failed. Status:', xhr.status);
    }
};

xhr.onerror = function () {
    console.error('Request failed. Network error.');
};

xhr.send();