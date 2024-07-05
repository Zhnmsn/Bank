"use strict"

const reverceStr = (str) => {
    const splitStr = str.split('');
    const reverseStr = splitStr.reverse();
    const newStr = reverseStr.join('');
    console.log(newStr);
}            

reverceStr('Hello world');

const reversedStr = (ourString) => {
    let emptyString = '';
    for(let i = ourString.length - 1; i >= 0; i-- ) {
    emptyString = emptyString + ourString[i];
    } return emptyString;
}

console.log(reversedStr('Hello world'));
