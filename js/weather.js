console.log("minidu");

const tempField = document.querySelector(".temp p");
const locationField = document.querySelector(".time_location p:first-child");
const dataField = document.querySelector(".time_location p:nth-child(2)");
const weatherField = document.querySelector(".condition p:last-child");
const weatherIcon = document.querySelector("#weather-icon");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");
const backgroundVideo = document.getElementById("background-video");

form.addEventListener("submit", searchForLocation);

let target = "Monaragala";

const fetchResult = async (targetLocation) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=0362fec199224ecaa19172531240212&q=${targetLocation}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();

    let location = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition;
    let backvi=data.current.condition.text
    console.log(backvi)

    const [datePart, timePart] = time.split(" ");

    tempField.textContent = `${temp}°C`;
    locationField.textContent = location;
    dataField.textContent = `${timePart} - ${datePart}`;
    weatherField.textContent = condition.text;

    updateWeatherIcon(condition.icon); 
    updateBackgroundVideo(backvi);
};

function updateWeatherIcon(iconUrl) {
    if (weatherIcon) {
        weatherIcon.src = `https:${iconUrl}`; 
        weatherIcon.alt = "Weather Icon"; 
    } else {
        console.error("🙄");
    }
}

function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value;
    fetchResult(target);
}


function updateBackgroundVideo(condition) {
    const videos = {
        Sunny: "videos/sunny.mp4",
        Clear: "videos/sunny.mp4",
        Rain: "videos/rain.mp4",
        "Partly cloudy": "videos/ppc.mp4",
        "Patchy rain nearby": "videos/rain.mp4",
        "Light rain" : "videos/rain.mp4",
        "Moderate or heavy rain with thunder" : "videos/rain.m4"

    };
    const videoFile = videos[condition] || "videos/default.mp4";
    backgroundVideo.src = videoFile;
}


fetchResult(target);
