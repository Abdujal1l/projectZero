'use strict';
const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms ,
    movies: {} ,
    actors: {} ,
    genres: [] ,
    privat: false 

};

const a = prompt('one of the last movies , you have watched', ''),
      b = prompt('how would you rate it in the scale of 0 to 10 ', ''),
      c = prompt('one of the last movies , you have watched', ''),
      d = prompt('how would you rate it in the scale of 0 to 10 ', '');

personalMovieDB.movies[a] = b ;
personalMovieDB.movies[c] = d ;
console.log(personalMovieDB);