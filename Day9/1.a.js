// all the countries from Asia continent /region using Filter function
let xhr = new XMLHttpRequest
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send()
xhr.onload = () => {
    let countryJSON = JSON.parse(xhr.response)
    console.log(countryJSON)
    var asianCountry = countryJSON.filter((country) => {
        return country.region === "Asia"
    })
    console.log(asianCountry)
}