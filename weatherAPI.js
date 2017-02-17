const rootURL = "http://api.openweathermap.org/data/2.5/weather?appid=dadb9b0b6a501c7645f3e478f24fc48f&units=metric"

export const fetchWeather = (lat,lon) =>{
	const url = rootURL + "&lat="+lat+"&lon="+lon	
	return fetch(url)
		.then(res => res.json()
		.then(json => ({
			temp: Math.round(json.main.temp),
			weather: json.weather[0].main
		})))
}