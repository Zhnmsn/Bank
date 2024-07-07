"use strict"

    let myArr = [];
    const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
    
    const addPrefix = (nickname, pref) => {
    names.forEach((element) =>  myArr.push(pref + element));
    return myArr;
    }

console.log( addPrefix(names, 'Mr '));
