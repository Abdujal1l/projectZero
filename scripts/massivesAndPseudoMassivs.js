'use strict';

const arr =[1, 2, 3, 4, 5];

arr[99] = 0 ;
console.log(arr.length);
console.log(arr);



arr.pop();
console.log(arr);
arr.push(10);
console.log(arr);


for (let i = 0 ; i < arr.length ; i++) {
    console.log(arr[i]);
}



for (let value of arr) {
    console.log(value);
}



arr.forEach(function(item , i, arr){
    console.log(`${i}: ${item} inside of ${arr}`);
});


const str = prompt('products','');

const products = str.split(',');
console.log(products);
console.log(products.join(':'));








const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let family = '';
    if(arr !== ''){
        family = `Семья состоить из: ${arr.join(' ')}`;
        return family;
    }else{
        return 'семя пуста';
    }
    
}

showFamily(family);
console.log(showFamily(family));

// 3) Задача с собеседований. Напишите функцию reverse,
// которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

// Это очень интересная задача, которую можно решить несколькими способами. 
//Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает.
// Как небольшая подсказка, есть метод, который может вам помочь. 
//И часть дополнительных вариантов решения мы тоже изучим в течении курса.

// Может показать сложной с первого взгляда, но это совсем не так 🙂

function reverse(str){
   let splitStr = str.split('');
   let reverseStr = splitStr.reverse();
   let joinStr = reverseStr.join('');
   return joinStr; 

}

let some = 'string and shit';

console.log(reverse(some));

