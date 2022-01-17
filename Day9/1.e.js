//  country which uses US Dollars as currency
let xhr = new XMLHttpRequest
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send()
xhr.onload = () => {
    let countryJSON = JSON.parse(xhr.response)
    const dollar = countryJSON.filter(
        (country)=>country.currencies.filter(
        (currency)=>currency.code==="USD").length
        )
    console.log(dollar)
}