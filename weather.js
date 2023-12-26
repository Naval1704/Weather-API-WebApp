const APIkey = "47efbdc4f792bedabbfc4808780e4a5e" ;
const APIurl = "https://api.openweathermap.org/data/2.5/weather?q=kota&unit=standard" ;

async function checkWeather() {
    const response = await fetch(APIurl + `&appid=${APIkey}`) ;
    var data = await response.json() ;

    console.log(data) ;
}