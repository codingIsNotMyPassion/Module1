// Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Movie{
    constructor (title, studio, rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}

let mov = new Movie("casino royale", "Eon productions", "PG13")
console.log(mov)
