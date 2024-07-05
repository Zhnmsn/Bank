"use strict"


const mySalary = Number(prompt('Введите вашу зарплату'));
let myTaxMin = 0;
let mySpred = 0;
let myTaxMax = 0;
if (mySalary <= 15000 && mySalary > 0) {
    myTaxMax = mySalary*0.13;
    console.log('Ваш налог состовляет: ', myTaxMax);
} else if (mySalary > 15000 && mySalary <= 50000) {
    myTaxMin = 15000*0.13;
    mySpred = mySalary - 15000;
    myTaxMax = mySpred * 0.20 + myTaxMin;
    console.log( 'Ваш налог состовляет: ', myTaxMax);
} else if (mySalary > 50000) {
    myTaxMin = 15000 * 0.13 + 35000 * 0.20;
    mySpred = mySalary - 50000;
    myTaxMax = mySpred * 0.30 + myTaxMin;
    console.log( 'Ваш налог состовляет: ', myTaxMax);
} else {
    console.log ('Error');
}