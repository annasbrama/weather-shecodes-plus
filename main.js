let input = document.querySelector('.input')
let button = document.querySelector('.btn-search')

button.addEventListener('click', cities)

function cities() {
    event.preventDefault()
    const city = input.value.trim()
    const weatherCity = document.querySelector('.weather-cities')

    //DATETIME
    const currentDate = new Date()
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDate.getDay()]
    const hours = String(currentDate.getHours()).padStart(2, '0')
    const minutes = String(currentDate.getMinutes()).padStart(2, '0')

    //CITIES NAMES
    const cityParts = city.split(' ')
    const correctedCity = cityParts.map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(' ')

    if (correctedCity !== '') {

        weatherCity.innerHTML = `<h1>${correctedCity}</h1>
                    <p>
                    <span class="datetime">${dayOfWeek} ${hours}:${minutes}</span>, few clouds <br>
                        Humidity: <span>74%</span>, Wind <br>
                        <span>11.32km/h</span>
                    </p>`
    } else {
        alert(
            `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
        );
    }
}