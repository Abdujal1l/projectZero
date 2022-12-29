'use strict';

// let a = 5,
//     b = a;
// b = b + 5;

// console.log(a);
// console.log(b);

// const obj = {
//     a: 5 ,
//     b: 1
// };

// const obj2 = obj ; //link to obj 


// obj2.a = 10; // obj.a 10 and obj2.a 10 


// console.log(obj);
// console.log(obj2);

// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

const numbers = {
    a:2 ,
    b:5 ,
    c: {
        x: 7 ,
        y:4
    }
};


// const newNumbers = copy(numbers);//new numbers is a copy of numbers Not a link to obj but another obj 

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);


const add = {
    d: 17 ,
    e: 20
};

// console.log(Object.assign(numbers, add)); //
// console.log(numbers);
// console.log(add);

// const clone = Object.assign({}, add);


// clone.d = 20 ;
// clone.l = 13;

// console.log(clone);
// console.log(add);

const oldArray = ['2', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'this is your mother john';

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo' ,'rutube'],
      blogs  = ['wordpress', 'live journal', 'bloger'],
      intrnet = [...video, ...blogs, 'vk', 'fb'];
      
      console.log(intrnet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);

}

const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];

const spreadArray = [...array] ;

spreadArray[2] = 'c';

console.log(array);
console.log(spreadArray);

const q = {
    one: 1,
    two: 2
};

const q2 = {...q};

console.log(q2);