"use strict"

let leap;
let year;
let leapArr = [];
let u ;
let v;

    const getLeapYear = (n, m) => {
u = Math.abs(n);
v = Math.abs(m);
        if (u > v) {
    for( v  ; v <= u; v++) {
    if (v % 400 === 0) {
        leapArr.push(v); }
    else if (v % 100 === 0) {
            false ; }
    else if (v % 4 === 0) {
        leapArr.push(v); }
    else {
            false; }

        } return leapArr;
        }

        if (v > u) {
            for( u  ; u <= v; u++) {
                if (u % 400 === 0) {
                    leapArr.push(u); }
                else if (u % 100 === 0) {
                        false ; }
                else if (u % 4 === 0) {
                    leapArr.push(u); }
                else {
                        false; }
            
                    } return leapArr;
                    }
    }
    


console.log(getLeapYear(2000, 2024));