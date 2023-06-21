const api_key = 'c300a1a62530971a87238483c04ea51b';
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    weather.innerHTML = `<h1>Loading...</h1>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    console.log(url);
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data);

}
const showWeather = (data) => {
    console.log(data);
    if(data.cod == "404"){
        weather.innerHTML = `<h1>City Not Found</h1>`
        return;
    }
    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="cloud" style="width:150px;">
    </div>
    <div>
        <h1>${data.main.temp}℃</h1>
        <h2>${data.weather[0].main}</h2>
    </div>
    <div>
    <table class="table-data">
        <tr>
            <th>City Name:</th>
            <td><h3>${data.name}</h3></td>
        </tr>
        <tr>
            <th>Lat:</th>
            <td><h3>${data.coord.lat}</h3></td>
        </tr>
        <tr>    
            <th>Lon:</th>
            <td><h3>${data.coord.lon}</h3></td>
        </tr>
        <tr>
            <th>Feels Like:</th>
            <td><h3>${data.main.feels_like}℃</h3></td>
        </tr>
        <tr>
            <th>Humidity:</th>
            <td><h3>${data.main.humidity}</h3></td>
        </tr>
        <tr>
            <th>Max Tempareture:</th>
            <td><h3>${data.main.temp_max}</h3></td>
        </tr>
        <tr>
            <th>Min Tempareture:</th>
            <td><h3>${data.main.temp_min}</h3></td>
        </tr>
    </table>
    </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value);
        event.preventDefault();
    }
)
