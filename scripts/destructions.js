'use strict';

const options = {
    name: 'test' ,
    width: 1024 ,
    height: 1024 ,
    colors: {
        border: 'black' ,
        bg: 'red'
    } ,
    makeTest: function() {
        console.log('test');
    }
}; 
const {you} = options;
console.log(you);

const {border, bg} = options.colors;
console.log(border, bg);


options.makeTest();
console.log(options);
console.log(options.name);

delete options.name    ;

console.log(options);

for (let key in options) {
    if(typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`${i} , ${options[key] [i]}`);} 
         }else {
            console.log(`свойство  ${key} имеет значение ${options[key]} `);
        }
    }

let counter = 0;
for(let i in options){
    counter++;
}
console.log(counter);

console.log(Object.keys(options));
console.log(Object.keys(options).length);
