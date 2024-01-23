const request = require('request')

const movie = (movie, callback) => {

    const splitTitle = movie.trim().split(' ').join('+');
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + encodeURIComponent(splitTitle) + '&api_key=9dfe73c80f3ccb0ce49b208fac66fcf9'
    
    request({url: url, json: true}, (error, response) => {

        if(error) {
            callback('Unable to connect to movie services', undefined)
        } else if (response.body.results.length === 0) {
            callback('Unable to find movie. Please check spelling.', undefined)
        } else {
          
            callback(undefined, {
                title: response.body.results[0].title,
                id: response.body.results[0].id,
                overview: response.body.results[0].overview

            } )
            
        }


    })
}


module.exports = movie

// console.log(movie('the matrix'));
