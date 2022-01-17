class Movie {
    constructor (title, studio, rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

    getPG (arr){
        var result = []
        arr.filter((movie) => {
            if(movie.rating==="PG"){
                result.push(movie)
            }
        })
        return result
    }
}

let movie = new Movie("guvi", "disney", "PG")
let movie1 = new Movie("avengers", "marvel", "T")
let movie2 = new Movie("avatar", "pixar", "U")
arr = [movie, movie1, movie2]
console.log(movie.getPG(arr))