const personJSON = `[
    {
       "id": "1",
       "name": "Leanne Graham",
       "username": "Bret",
       "email": "Sincere@april.biz",
       "address": {
         "street": "Kulas Light",
         "suite": "Apt. 556",
         "city": "Gwenborough",
         "zipcode": "92998-3874",
         "geo": {
           "lat": "-37.3159",
           "lng": "81.1496"
         }
       },
       "phone": "1-770-736-8031 x56442",
       "website": "hildegard.org",
       "company": {
         "name": "Romaguera-Crona",
         "catchPhrase": "Multi-layered client-server neural-net",
         "bs": "harness real-time e-markets"
       }
     },
     {
       "id": "2",
       "name": "Ervin Howell",
       "username": "Antonette",
       "email": "Shanna@melissa.tv",
       "address": {
         "street": "Victor Plains",
         "suite": "Suite 879",
         "city": "Wisokyburgh",
         "zipcode": "90566-7771",
         "geo": {
           "lat": "-43.9509",
           "lng": "-34.4618"
         }
       },
       "phone": "010-692-6593 x09125",
       "website": "anastasia.net",
       "company": {
         "name": "Deckow-Crist",
         "catchPhrase": "Proactive didactic contingency",
         "bs": "synergize scalable supply-chains"
       }
     }
   ]`
  const person = JSON.parse(personJSON)
  
  // for
    for (i=0; i<person.length; i++){
        console.log(person[i].name)
        console.log(person[i].username)
        console.log(person[i].website)
        console.log(person[i].phone)
        console.log(person[i].email)
        console.log(person[i].address.geo.lat)
        console.log(person[i].company.catchPhrase)
      }
  
  // for of
    for(var item of person){
      console.log(item.address.geo.lat)
    }
  
  // for each
    person.forEach(element => {
    console.log(element.address.geo.lat)})