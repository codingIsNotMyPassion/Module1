// total population of countries using reduce function
let xhr = new XMLHttpRequest
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send()
xhr.onload = () => {
    let countryJSON = JSON.parse(xhr.response)
    var population = countryJSON.map((country)=>{return country.population})
    // console.log(population)
    var totalPopulation = population.reduce((totalPopulation, population) =>{
        return totalPopulation + population
    }, 0)
    console.log(totalPopulation)
}