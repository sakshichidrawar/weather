// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '5c4e8d5a20msh9de433b1220eef3p1d1e90jsn608b3cdd875c',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };
// const getweather =(city)=>{
// 	cityName.innerHTML=city
// 	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
// 	.then(response => response.json())
// 	.then((response)=> {
// 		console.log(response)
// 		temp.innerHTML = response.temp
// 		temp2.innerHTML = response.temp
// 		humidity.innerHTML = response.humidity
// 		humidity2.innerHTML = response.humidity
// 		wind_speed.innerHTML = response.wind_speed
// 		wind_speed2.innerHTML = response.wind_speed
// 	})
// 	.catch(err => console.error(err));
// }

// Submit.addEventlistener("click",(e)=>{
// 	e.preventDefault()
// 	getweather(city.value)
// })

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c4e8d5a20msh9de433b1220eef3p1d1e90jsn608b3cdd875c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather =(city)=>{
		cityName.innerHTML=city
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response)=> {
			console.log(response)
			cloud_pct.innerHTML=response.cloud_pct
			temp.innerHTML = response.cloud_pct
			feels_like.innerHTML=response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML=response.min_temp
			max_temp.innerHTML=response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML=response.wind_degrees
			sunrise.innerHTML=response.sunrise
			sunset.innerHTML=response.sunset
        })
		.catch(err => console.error(err));
	}
	
	Submit.addEventlistener("click",(e)=>{
		
		getweather(city.value)
	})
	getweather("Delhi")
	
