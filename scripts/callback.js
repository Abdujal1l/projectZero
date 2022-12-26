'use strict';

function first(){
    // do something 
    setTimeout(function(){
        console.log(1);}, 
        500 );
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang ,callback, lastback){
    console.log(`i study ${lang}`);
    callback();
    lastback();
}
function last(){
    console.log('i am genius');
}
learnJS('Javascript', function() 
{
    console.log('i have learnd this lesson');
}, last);