require("dotenv").config();
console.log("Hello")

var twitter = require("twitter")
var spotify = require("node-spotify-api")
var omdb = require("omdb-client")
var request = require("request")
var fs = require("fs")
var keys = require("./key")

var input1 = process.argv[2]
var input2 = process.argv[3]

if (input1 === 'my-tweets') {
    //call the function here
    callingTwitter()
    console.log("you chose my-tweets")
} else if (input1 === "spotify-this-song") {
    //call the function here
    console.log("you chose spotify-this-song")
} else if (input1 === "movie-this") {
    //call the function here
    movie(input2);
    console.log("you chose movie-this")
} else if (input1 === "do-what-it-says") {
    //call the function here    
    // do what is says points to random.txt (whatever the text doc says)
    console.log("you chose do-what-it-says")
} else {
    console.log("please re-enter your option")
}

function callingTwitter() {
    console.log("Tweet tweet")
    var client = new twitter(keys.twitter)
    console.log("This is where the this is loaded is coming from:", client)
    var params = {
        q: 'Obama',
        count: 20
    }
    client.get('search/tweets', params, function(error, tweets, response) {
        if (!error) {
          console.log(tweets);
        }
        else {
            console.log(error)
        }
      });
}
    // show your last 20 tweets and when they were created at in your terminal/bash win}


// function spotify (songName) {
//     console.log("Nice Song!"This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.
// You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API. 
// 
// }
function movie(movieName) {
    console.log("Cool Movie!")
    var params = {
        apiKey: '9365097a',
        title: movieName,
        year: parseInt(process.argv[4])
    }
    if (params.title === " " || params.title === undefined) {
        params.title = "Mr Nobody";
        params.year = 0;
        console.log("If you haven't watched \"Mr. Nobody,\" then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    } 
    // var movieUrl = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    console.log(params)
    omdb.get(params, function (err, res) {
        console.log(`
            Title: ${ res.Title}
            Year: ${ res.Year}
            imdbRating: ${ res.imdbRating}
            Rotten Tomatoes: ${ res.Ratings[1].Value}
            Country Produced: ${ res.Country}
            Language: ${ res.Language}
            Plot: ${ res.Plot}
            Actors: ${ res.Actors}
        `)
    })
}
// function doWhat () {
//     console.log("Liri is my Awesome!")
// }

//where would we call these functions? 