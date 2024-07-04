'use strict'


const findMin = (a, b) => {
    let avr = (a+b)/2;
    let min = avr - Math.abs(a-b)/2; 
    return min;
    }
    
const firstNumber = Number(prompt('Введите первое число'));
const secondNumber = Number(prompt('Введите второе число'));
    console.log( 'Ваше минимальное число - ', findMin(firstNumber, secondNumber) );