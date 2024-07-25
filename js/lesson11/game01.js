'use strict';

const randomNumber = Math.floor(Math.random() * 100) + 1;
const userNumber = +prompt('Введите число');


const guessNumber = (number) => {
  if (number === 0 || number === randomNumber) {
    console.log(`Game Over  Ваше число - ${number}`);
    return number;
  }
  if (number > randomNumber) {
    console.log('Меньше!');
    number = +prompt('Введите число поменьше!');
    return guessNumber(number);
  }

  if (number < randomNumber) {
    console.log('Больше!');
    number = +prompt('Введите число побольше!');
    return guessNumber(number);
  }

  if (number === randomNumber) {
    console.log('Правильно!');
    return number;
  }

  if (number !== typeof(Number)) {
    console.log('Введите число!');
    return guessNumber(number);
  }
};

guessNumber(userNumber);


