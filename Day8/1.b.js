// The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided
class Movie{
    constructor (title, studio, rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }
}

let avatar = new Movie("avatar", "marvels")
console.log(avatar)
