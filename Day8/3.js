class person{
    constructor(firstName,lastName, age, gender, address){
        this.firstName=firstName,
        this.lastName=lastName,
        this.age=age;
        this.gender=gender,
        this.address=address
    };
};
let person1 = new person("john","doe",27,"male",{city:"narasaraopet", district:"guntur", state:"AP"})
console.log(person1)