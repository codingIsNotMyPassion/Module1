// all the countries with a population of less than 2 lakhs
let xhr = new XMLHttpRequest
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send()
xhr.onload = () => {
    let countryJSON = JSON.parse(xhr.response)
    console.log(countryJSON)
    var lessPopulation = countryJSON.filter((country) => {
        return country.population < 200000
    })
    console.log(lessPopulation)
}