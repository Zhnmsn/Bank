"use strict"

let newMyArr = [];
let c ;
const RandGenerate = (item, n, m, str) => {
    for(let i = 1; i <= item; i++) {

        if ( n > m && str === 'even'){
            c = Math.floor(Math.random() * (n - m + 1) + m) ;
            if (c%2 === 0) {
                newMyArr.push(c);
            }
            } 
            if ( n > m && str === 'odd'){
                c = Math.floor(Math.random() * (n - m + 1) + m) ;
                if (c%2 !== 0) {
                    newMyArr.push(c);
                }
                } 

            if ( m > n && str === 'even') {
            c = Math.ceil(Math.random() * (m - n  + 1) + n) ;
            if (c%2 === 0) {
                newMyArr.push(c);
            }
        }
        if ( m > n && str === 'odd') {
            c = Math.ceil(Math.random() * (m - n  + 1) + n) ;
            if (c%2 !== 0) {
                newMyArr.push(c);
            }
        }
    }
    return newMyArr;
    }

console.log(RandGenerate(10, -10, 50,'even'));
