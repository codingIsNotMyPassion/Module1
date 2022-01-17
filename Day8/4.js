class carRent {
    constructor(price, km){
        this.price=price;
        this.km=km;
    }
    
    uberPrice(){
        return this.price*this.km
    }
}
let newRide= new carRent(5, 20)
console.log(`A ride cost is ${newRide.uberPrice()}`)