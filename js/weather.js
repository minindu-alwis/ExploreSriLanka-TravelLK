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
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=0362fec199224ecaa19172531240212&q=${targetLocation}&aqi=no`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }

        const data = await res.json();

        let location = data.location.name;
        let time = data.location.localtime;
        let temp = data.current.temp_c;
        let condition = data.current.condition;
        let backvi = data.current.condition.text.toLowerCase();

        console.log("Condition:", backvi);

        const [datePart, timePart] = time.split(" ");

        tempField.textContent = `${temp}°C`;
        locationField.textContent = location;
        dataField.textContent = `${timePart} - ${datePart}`;
        weatherField.textContent = condition.text;

        updateWeatherIcon(condition.icon);
        updateBackgroundVideo(backvi);
    } catch (error) {
        console.error("❌ Fetch Error:", error.message);
    }
};

function updateWeatherIcon(iconUrl) {
    if (weatherIcon) {
        weatherIcon.src = `https:${iconUrl}`;
        weatherIcon.alt = "Weather Icon";
    } else {
        console.error("⚠️ Weather icon element not found.");
    }
}

function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value.trim();
    if (target) {
        fetchResult(target);
    } else {
        console.warn("⚠️ Empty search query!");
    }
}

function updateBackgroundVideo(condition) {
    const videos = {
        sunny: "videos/sunny.mp4",
        clear: "videos/sunny.mp4",
        rain: "videos/rain.mp4",
        "partly cloudy": "videos/ppc.mp4",
        "patchy rain nearby": "videos/rain.mp4",
        "light rain": "videos/rain.mp4",
        "moderate or heavy rain with thunder": "videos/rain.mp4",
    };

    const matchedCondition = Object.keys(videos).find((key) => condition.includes(key)) || "default";
    const videoFile = videos[matchedCondition] || "videos/default.mp4";

    backgroundVideo.src = videoFile;
}

fetchResult(target);
