"use strict"


let i ;
let k ;

for(i = 1; i <= 10; i++ ) {
    console.log(i + ' в степени от 1 до 10');
    for(k = 1; k <= 10; k++ ) {
        console.log(`${i} ** ${k} = ${i ** k}`);
    }
    
}