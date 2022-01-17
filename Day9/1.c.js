// name, capital, flag using forEach function
let xhr = new XMLHttpRequest
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send()
xhr.onload = () => {
    let countryJSON = JSON.parse(xhr.response)
    var countryProp = countryJSON.forEach((country) => {
        console.log(country.name)
        console.log(country.capital)
        console.log(country.flag)
    })
    console.log(countryProp)
}