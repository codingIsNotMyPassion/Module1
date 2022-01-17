let xhr = new XMLHttpRequest
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
    xhr.send()
    xhr.onload = () => {
        let countryJSON = JSON.parse(xhr.response)
        console.log(countryJSON)
        countryJSON.map((country)=>{
            console.log(country.flag)
        })
    }