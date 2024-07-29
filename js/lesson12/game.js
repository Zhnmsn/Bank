'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    let computerWord = '';
    const randomNumber = Math.ceil(Math.random() * (max - min) + min);
    if (randomNumber > 0 && randomNumber < max * 0.4) {
      computerWord = 'камень';
    } if (randomNumber > max * 0.3 && randomNumber < max * 0.8) {
      computerWord = 'ножницы';
    } if (randomNumber > max * 0.7 && randomNumber <= max) {
      computerWord = 'бумага';
    }
    alert(`Выбор компьтера - ${computerWord}`);
    return computerWord;
  };

  const getRandomIntInclusiveEng = (min, max) => {
    let computerWord = '';
    const randomNumber = Math.ceil(Math.random() * (max - min) + min);
    if (randomNumber > 0 && randomNumber < max * 0.4) {
      computerWord = 'rock';
    } if (randomNumber > max * 0.3 && randomNumber < max * 0.8) {
      computerWord = 'scissors';
    } if (randomNumber > max * 0.7 && randomNumber <= max) {
      computerWord = 'paper';
    }
    alert(`Computer chois - ${computerWord}`);
    return computerWord;
  };


  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };


    return function start() {
      if (language === 'EN' || language === 'ENG') {
        const userWord = prompt('Rock, scissors, paper ?');
        const computerWord = getRandomIntInclusiveEng(1, 10);
        if (userWord === null) {
          const quastion = confirm('Are you sure you want to get out?');
          if (quastion) {
            return alert(`Score of computer  - ${result.computer}, Score of user -  ${result.player}`);
          }
        }
        try {
          if (userWord[0] === 'r' && computerWord === 'paper' ||
            userWord === 'rock' && computerWord === 'paper') {
            result.computer += 1;
            alert('You have lost');
          }

          if (userWord[0] === 'r' && computerWord === 'scissors') {
            result.player += 1;
            alert('You have won');
          }


          if (userWord[0] === 's' && computerWord === 'rock') {
            result.computer += 1;
            alert('You have lost');
          }

          if (userWord[0] === 's' && computerWord === 'paper') {
            result.player += 1;
            alert('You have won');
          }


          if (userWord[0] === 'p' && computerWord === 'scissors') {
            result.computer += 1;
            alert('You have lost');
          }

          if (userWord[0] === 'p' && computerWord === 'rock') {
            result.player += 1;
            alert('You have won');
          }

          if (userWord[0] === computerWord[0]) {
            alert('Draw');
          }

          if (userWord.length > 7 ||
            userWord[0] !== 'r' && userWord[0] !== 'p' && userWord[0] !== 's') {
            alert('You entered incorrectly, try again');
          }
        } catch (error) {
          console.log('TypeError' + error);
        }
        if (userWord === null) {
          const quastion = confirm('Are you sure you want to get out?');
          if (quastion) {
            return alert(`Score of computer - ${result.computer}, Score of user -  ${result.player}`);
          }
        }
        return start();
      }


      if (language === '' || language === 'RU' || language === undefined) {
        const userWord = prompt('Камень, ножницы, бумага ?');
        const computerWord = getRandomIntInclusive(1, 10);
        if (userWord === null) {
          const quastion = confirm('Вы точно хотите выйти из игры?');
          if (quastion) {
            return alert(`Очки компьютера - ${result.computer}, Очки игрока -  ${result.player}`);
          }
        }
        try {
          if (userWord[0] === 'к' && computerWord === 'бумага' ||
              userWord === 'камень' && computerWord === 'бумага') {
            result.computer += 1;
            alert('Вы проиграли');
          }

          if (userWord[0] === 'к' && computerWord === 'ножницы') {
            result.player += 1;
            alert('Вы выиграли');
          }


          if (userWord[0] === 'н' && computerWord === 'камень') {
            result.computer += 1;
            alert('Вы проиграли');
          }

          if (userWord[0] === 'н' && computerWord === 'бумага') {
            result.player += 1;
            alert('Вы выиграли');
          }


          if (userWord[0] === 'б' && computerWord === 'ножницы') {
            result.computer += 1;
            alert('Вы проиграли');
          }

          if (userWord[0] === 'б' && computerWord === 'камень') {
            result.player += 1;
            alert('Вы выиграли');
          }

          if (userWord[0] === computerWord[0]) {
            alert('Ничья');
          }

          if (userWord === null) {
            const quastion = confirm('Вы точно хотите выйти из игры?');
            if (quastion) {
              return alert(`Очки компьютера - ${result.computer}, Очки игрока -  ${result.player}`);
            }
          }

          if (userWord.length > 7 || userWord[0] !== 'к' &&
              userWord[0] !== 'б' && userWord[0] !== 'н') {
            alert('Вы ввели некорректно');
          }
        } catch (error) {
          console.log(error);
        }
        return start();
      }
    };
  };

  window.GOR = game;
})();
