'use strict';
const getLanguage = +prompt('Выберети язык, 1 - English');

if (getLanguage === 1) {
  const startGame = window.GOR('ENG');
  startGame();
} if (getLanguage !== 1) {
  const startGame = window.GOR('RU');
  startGame();
}


