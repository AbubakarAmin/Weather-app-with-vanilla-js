let cityInput = document.querySelector('.city'); // Get input field for city
let tempDisplay = document.querySelector('h1'); // Get element to display temperature
let btn = document.querySelector('button'); // Get the button element
let form=document.querySelector('#form')

const apiKey = "cca7fd047c020a43a4dbb39d102d508a";


// Function to fetch weather data
 async function weather() {
    event.preventDefault(); //
    let city = cityInput.value; // Get the value of the city input
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    let response= await fetch(url)
    let data= await response.json()
            // Update the temperature display with the fetched data
            tempDisplay.innerHTML =await `${data.main.temp}°C`;
    
    
}
btn.addEventListener('click',weather)
form.addEventListener('submit', weather); // Add click event listener to the button