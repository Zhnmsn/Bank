"use strict"

const reverceStr = (str) => {
    let splitStr = str.split('');
    let reverseStr = splitStr.reverse();
    let newStr = reverseStr.join('');
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
