'use strict';

let numberOfFilms ;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели' , '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели' , '');
    }
}


start();

const personalMovieDB = {
    count: numberOfFilms ,
    movies: {} ,
    actors: {} ,
    genres: [] ,
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = +prompt('Один из последных просмотренных фильмо?', '').trim();
        const b = +prompt('насколько оцените его?', '').trim();
        
        if (a != null && b != null && a != '' && b != '' && a.lenght < 50){
                personalMovieDB.movies[a] = b;
                console.log('done'); 
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms(personalMovieDB);




function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Посмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        console.log('вы классный зритель ');
    }else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка ');
    }
}



function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
 showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);

 function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
 }
 writeYourGenres();

