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

