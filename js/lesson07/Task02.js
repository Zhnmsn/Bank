"use strict"

let newArr = [];
let b ;
const newRandomGenerate = (item, n, m) => {
    for(let i = 1; i <= item; i++) {
        if ( n > m) {
            b = Math.floor(Math.random() * (n - m + 1) + m) ;
            newArr.push(b);
        } if ( m > n) {
            b = Math.ceil(Math.random() * (m - n  + 1) + n) ;
            newArr.push(b);
        }
        
    }
    return newArr;
    }

console.log(newRandomGenerate(5, 20, 10));