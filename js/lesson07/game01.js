"use strict"

let randomNumber =  Math.floor(Math.random() * 100) + 1;
let userNumber = +prompt('Введите число');



while (userNumber !== 0  &&  userNumber !== randomNumber ) {
    
    if (userNumber > randomNumber) {
        console.log('Меньше!');
        userNumber =  +prompt('Введите число поменьше!');
    } 
    
    if (userNumber < randomNumber) {
        console.log('Больше!');
        userNumber =  +prompt('Введите число побольше!');
    }
    
    if (userNumber === randomNumber) {
        console.log('Правильно!');
        
    } 
    
    if (userNumber !== typeof(Number)) {
        console.log('Введите число!');
    }  

    
    }
    





