"use strict"

let arr = [];
let a ;
const randomGenerate = (item) => {
    for(let i = 1; i <= item; i++) {
        a = Math.floor(Math.random() * 100) + 1;
        arr.push(a);
    }
    return arr;
    }

    console.log(randomGenerate(6));