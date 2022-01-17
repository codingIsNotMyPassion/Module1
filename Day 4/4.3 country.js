// print all countries name, region, sub region and population

let xhr = new XMLHttpRequest
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
    xhr.send()
    xhr.onload = () => {
        let countryJSON = JSON.parse(xhr.response)
        countryJSON.map((country)=>{
            console.log(country.name)
            console.log(country.region)
            console.log(country.population)
            console.log(country.subregion)
        })
    }