'use strict'

const rain = Math.round(Math.random());
if (rain===1) {
    console.log('Пошёл дождь. Возьмите зонт!')
}
if(rain===0) {
    console.log ('Дождя нет!');
}



const math = Number(prompt('Введите кол-во баллов по математике'));
const rus = Number(prompt('Введите кол-во баллов по русскому языку'));
const informatics = Number(prompt('Введите кол-во баллов по информатике'));

const result = math + rus + informatics;

if (result >= 265) {
    console.log ('Поздравляю, вы поступили на бюджет!');
} else {
    console.log ('Вы не поступили!');
}

const moneyBank = Number(prompt('Cколько денег вы хотите снять?'));
if ( moneyBank >=100 && moneyBank%100===0) {
    console.log ('Возьмите ваши деньги');
} else {
    console.log ('Введите сумму кратную 100');
}


