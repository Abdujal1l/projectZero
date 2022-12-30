'use strict';


let str = 'some';
let strObj = new String(str);


console.log(typeof(str));
console.log(typeof(strObj));

const soldier = {
     health: 400,
     armor: 100,
     sayHello() {
        console.log('hello');
     }
};

const john = Object.create(soldier); // creating object john with prototype of soldier 

// const john = {
//     health: 100,
//     armor: 100
// };

// john.__proto__ = soldier ; //протатипом жона будет солдат 

// Object.setPrototypeOf(john, soldier); //modern and used version of setting prototypes 

// console.log(john.armor);

john.sayHello(); // now jon is able to say hello becouse he become this ability from his prototype soldier


