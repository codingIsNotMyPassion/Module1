// Write a method getPG, which takes an array of base type Movie as its argument, 
// and returns a new array of only those movies in the input array with a rating of "PG". 
// You may assume the input array is full of Movie instances. The returned array need not be full.
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
