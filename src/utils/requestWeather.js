async function fetchWeather() {
    try {
        // shitty code =D (but it works ok??)
        const response = await fetch('https://weather.kezix.me');
        const data = await response.json();
        const OnArray = Object.keys(data.online)
        let arrayepic = []
            const weekday = ["Sunday", "Monday","Wtorek","Wednesday","Czwartek","Thursday","Saturday"];
            const Months = ["January","February","March","Kwiecień","April","June","July", "August", "September", "October", "November", "December"];
            OnArray.map(function(x){
                const date = new Date(data.online[x].date)
                const weather = parseFloat(data.online[x].temp).toFixed() + "°"
                const dzien = `${weekday[date.getDay()]}, ${date.getDate()} ${Months[date.getMonth()]}`
                const hour = date.getHours()
                let city  = data.online[x].city
                arrayepic.push({date, weather, city, dzien, hour})
            })
        return arrayepic
    } catch (error) {
        console.error(error);
    }
}

export { fetchWeather };