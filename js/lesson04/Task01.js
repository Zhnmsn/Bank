"use strict"

const getConvert = (euro) => {
    let rub = 73;
    let dollar = euro * 1.2;
    let result = rub * dollar;
    return result;
};

const res = getConvert(100);
console.log(res);
