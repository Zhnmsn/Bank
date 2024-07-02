"use strict"

const mySalaryPay = Number(prompt('Введите вашу зарплату'));
let myTax = 0;
if (mySalaryPay <= 15000 && mySalaryPay > 0) {
    myTax = mySalaryPay*0.13;
    console.log('Ваш налог состовляет: ', myTax);
} else if (mySalaryPay > 15000 && mySalaryPay <= 50000) {
        myTax = mySalaryPay * 0.20;
        console.log('Ваш налог состовляет: ', myTax);
} else if (mySalaryPay > 50000){
        myTax = mySalaryPay * 0.30;
        console.log( 'Ваш налог состовляет: ', myTax);
} else {
    console.log ('Error');
}