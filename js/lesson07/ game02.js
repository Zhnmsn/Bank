"use strict"

let randomNumber ;
let maxAttempts ;
let userNumber1 = +prompt('Введите первое число');
let userNumber2 = +prompt('Введите второе число');
let arr = [];
let arrWin = [];
let attempts = 0;

const getRandomNumbers = (num1, num2) => {
    if(num1 > num2) {
        randomNumber = Math.ceil(Math.random() * (num1 - num2) + num2);
    }
    if(num2 > num1) {
        randomNumber = Math.ceil(Math.random() * (num2 - num1) + num1);
    }
    return randomNumber;
}
const getMaxAttempts = (num1, num2) => {
    maxAttempts = Math.round(Math.abs(num1 - num2) * 0.3);
    return maxAttempts ;
}

getRandomNumbers(userNumber1, userNumber2);
let userNumber = +prompt('Введите ваше число');
getMaxAttempts(userNumber1, userNumber2);

while (userNumber !== 0  &&  userNumber !== randomNumber && attempts !== maxAttempts) {
    arr.push(userNumber);

    if (userNumber > randomNumber) {
        console.log('Меньше!');
        userNumber =  +prompt('Введите число поменьше!');
        attempts++;
    } 
    
    if (userNumber < randomNumber) {
        console.log('Больше!');
        userNumber =  +prompt('Введите число побольше!');
        attempts++;
    }
    
    if(userNumber1 === 50 && userNumber2 === 100) {
        maxAttempts = 15;
    }
    
    if (isNaN(userNumber)) {
        alert('Вы ввели не число')
        userNumber = +prompt('Введите число, все таки');
    }  

    for(let i = 0; i <= arr.length; i++) {
        if (arr[i] === userNumber) {
            alert('Это число вы уже вводили')
            userNumber = +prompt('Введите новое число');
        }
    }

    if (userNumber === randomNumber) {
        attempts++;
        alert('Вы угадали число, игра окончена!');
        arrWin.push(userNumber);
        break;
    } 

    if (attempts === maxAttempts) {
        alert('Игра окончена, количество попыток исчерпано')
    }
    }

    alert(`Попыток использовано - ${attempts}, Попыток давалось - ${maxAttempts}, Какие числа ввел пользователь - ${arr.concat(arrWin)}`);
    



