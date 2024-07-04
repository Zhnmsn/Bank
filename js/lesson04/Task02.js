"use strict"

const editWord = (words)=> {
    let endOfString = words.substring(1).toLowerCase();
    let startOfString = words[0].toUpperCase();
        return startOfString + endOfString;
        
    }
    console.log(editWord('HeLLo WORLD'));