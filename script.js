let city = document.getElementById("city");
let temp = document.getElementById("temp");
let type = document.getElementById("type");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let high = document.getElementById("high");
let low = document.getElementById("low");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind-speed");
let API_key = "b8d2ed5ee07a015fa571709aad53c793";

const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);

    if(jsonData.cod == 400){
        alert("Please Enter the Location");
    }else if(jsonData.cod == 404){
        alert("Please Enter the Correct Location");
        image.src="images/404.gif"
    }
 
 
    city.innerHTML = jsonData.name;
    temp.innerHTML = Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML = jsonData.weather[0].main;
    high.innerHTML = Math.floor(jsonData.main.temp_max)+"°";
    low.innerHTML = Math.floor(jsonData.main.temp_min)+"°";
    humidity.innerHTML = (jsonData.main.humidity)+"%";
    wind.innerHTML = (jsonData.wind.speed)+"m/s";

    if (type.innerHTML == "Clear"){
        image.src="images/clear.svg";
       
    }else if(type.innerHTML == "Clouds"){
        image.src="images/cloudy.svg"
        
    }else if(type.innerHTML == "Drizzle"){
        image.src="images/drizzle.svg"
        
    }else if(type.innerHTML == "Haze"){
        image.src="images/haze.svg"
        
    }else if(type.innerHTML == "Humidity"){
        image.src="images/humidity.svg"
        
    }else if(type.innerHTML == "Rain"){
        image.src="images/rain.svg"
        
    }else if(type.innerHTML == "Snow"){
        image.src="images/snow.svg"
        
    }else if(type.innerHTML == "Thunderstorm"){
        image.src="images/thunderstorms.svg"
        
    }else if(type.innerHTML == "Tornado"){
        image.src="images/tornado.svg"
        
    }else if(type.innerHTML == "Wind"){
        image.src="images/wind.svg"
        
    }                 
}
function myFun(){
    search=input.value;
     data(search);  
}
  