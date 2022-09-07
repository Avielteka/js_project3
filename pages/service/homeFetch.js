// const api = 'https://www.scorebat.com/video-api/v3/feed/?token=[MjI3NjhfMTY1OTg2ODUzMF9lMGRjZmFjZGUzMzBmYjI0MmQ5NjIyYzJlM2EwOTcwNGUxNWQ1ZDUz]'

// async function getPremierData(){
//     try{
//     const response = await fetch(api)
//     return await response.json()
//    .then(res => console.log(res)) 
// }
// catch(err){}
// finally{}
// }

// getPremierData()
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0975a15b38mshc66e05e885a9942p12fb38jsn34b9a07bf028',
// 		'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
// 	}
// };

// const api = 'https://api-football-beta.p.rapidapi.com/fixtures/players?fixture=169080'

// async function getPlayerDetails(){
    
// }
// fetch
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
const weatherAPI=`https://api.openweathermap.org/data/2.5/weather?q=Lod&appid=312476d79f363a9fad212ec95e4b2e71`
async function getWeather(){
    try{
        return await fetch(weatherAPI).then(res=>res.json())
    }
    catch(error){
        console.log(error)
    }
}
getWeather().then(res=>{
    let weather = res.main.temp/10;
    document.getElementById('weather_div').innerHTML=`<p>${weather.toFixed(2)}C</p>`
    console.log(weather.toFixed(2))
})