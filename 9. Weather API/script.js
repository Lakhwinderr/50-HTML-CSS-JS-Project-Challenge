const btn = document.getElementsByTagName("button");
const search = document.querySelector(".search-container");
const input = document.querySelector(".search");

const weatherContainer = document.querySelector(".weather-container")

var city;
const APIkey = "b047139743ca7e5fca31400eb619cfa0";

const checkWeather = async (city) => {
  const config = {
    Accept: "application/json",
  };


    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`,
      config
    );
    const data = await res.json();
    if(Object.keys(data).length === 2){
        // console.log(data.message)
        const message = document.createElement("h1");
        message.innerText = data.message;
        weatherContainer.appendChild(message);
    }else{
        const weather = data.weather[0];

        const weatherMain = document.createElement("h1");
        weatherMain.innerText = weather.main;
        const weatherDescription = document.createElement("h3")
        weatherDescription.innerText = weather.description;

        const icon = document.createElement("img");
        icon.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
        
        weatherContainer.appendChild(weatherMain);
        weatherContainer.appendChild(weatherDescription);
        weatherContainer.appendChild(icon);
    }

};
// const checkWeather = async (city) => {
//   const config = {
//     Accept: "application/json",
//   };

//   try {
//     const res = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`,
//       config
//     );

//     const data = await res.json();
//     // console.log(data);
//   } catch (error) {
//     console.log(error);
//     // console.log(data.message)
//   }
// };

function fireEvent(){
    city = input.value;

    if (city !== "") {
      weatherContainer.innerHTML = "";
      checkWeather(city);
    }
}
btn[0].addEventListener("click", () => {
  fireEvent()
});

window.addEventListener("keyup", (e) =>{
    if(e.key === "Enter"){
        fireEvent()
    }
})