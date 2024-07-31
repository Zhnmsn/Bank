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

  const getRandomNumber = (min, max) => {
    const randomNumber = Math.ceil(Math.random() * (max - min) + min);
    return randomNumber;
  };

  const getComputerChois = (min, max) => {
    const computerChois = Math.ceil(Math.random() * (max - min) + min);
    return computerChois;
  };


  const game = (language) => {
    const result = {
      player: 5,
      computer: 5,
    };

    return function start() {
      const RockScissorPaper = () => {
        const userWord = prompt('Камень, ножницы, бумага ?');
        const computerWord = getRandomIntInclusive(1, 10);
        if (userWord === null) {
          const quastion = confirm('Вы точно хотите выйти из игры?');
          if (quastion) {
            return alert('Пока!');
          } else {
            return RockScissorPaper();
          }
        }

        if (userWord[0] === 'к' && computerWord === 'бумага' ||
                  userWord === 'камень' && computerWord === 'бумага') {
          alert('Вы проиграли, первый ходит компьютер!');
          return firstTurnComputer();
        }

        if (userWord[0] === 'к' && computerWord === 'ножницы') {
          alert('Вы выиграли, первый ход за вами!');
          return firstTurnUser();
        }


        if (userWord[0] === 'н' && computerWord === 'камень') {
          alert('Вы проиграли, первый ходит компьютер!');
          return firstTurnComputer();
        }

        if (userWord[0] === 'н' && computerWord === 'бумага') {
          alert('Вы выиграли, первый ход за вами!');
          return firstTurnUser();
        }


        if (userWord[0] === 'б' && computerWord === 'ножницы') {
          alert('Вы проиграли, первый ходит компьютер!');
          return firstTurnComputer();
        }

        if (userWord[0] === 'б' && computerWord === 'камень') {
          alert('Вы выиграли, первый ход за вами!');
          return firstTurnUser();
        }

        if (userWord[0] === computerWord[0]) {
          alert('Ничья, сделайте ещё ход!');
          return RockScissorPaper();
        }


        if (userWord.length > 7 || userWord[0] !== 'к' &&
                  userWord[0] !== 'б' && userWord[0] !== 'н') {
          alert('Вы ввели некорректно');
          return RockScissorPaper();
        }
      };

      const firstTurnUser = () => {
        alert('Сделайте первый ход!');

        const userNumber = +prompt(`Введите число от 1 до ${result.player}`);
        if (userNumber < 0 || userNumber > result.player) {
          alert(`Введите число от 1 до ${result.player}`);
          return firstTurnUser();
        }
        const computerNumber = getRandomNumber(1, 100);


        if (computerNumber % 2 === 0 && userNumber % 2 === 0) {
          result.player -= userNumber;
          result.computer += userNumber;
          alert(`Компьютер выиграл! Число компьютера : ${computerNumber}`);
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (computerNumber % 2 !== 0 && userNumber % 2 !== 0) {
          result.player -= userNumber;
          result.computer += userNumber;
          alert('Компьютер выиграл!');
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }
        if (computerNumber % 2 === 0 && userNumber % 2 !== 0) {
          result.player += userNumber;
          result.computer -= userNumber;
          alert('Вы выиграли!');
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }
        if (computerNumber % 2 !== 0 && userNumber % 2 === 0) {
          result.player += userNumber;
          result.computer -= userNumber;
          alert('Вы выиграли!');
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }
        if (result.player < 1) {
          const goAgain = confirm('Победа Копмьютера, хотите поиграть еще?');
          if (goAgain) {
            result.player = 5;
            result.computer = 5;
            return RockScissorPaper();
          } if (goAgain === false) {
            return alert('Пока!');
          }
        }

        if (result.computer < 1) {
          const goAgain = confirm('Вы выиграли, хотите поиграть ещё?');
          if (goAgain) {
            result.player = 5;
            result.computer = 5;
            return RockScissorPaper();
          } if (goAgain === false) {
            return alert('Пока!');
          }
        }

        if (userNumber === 0 || userNumber === null) {
          confirm('Желаете покинуть игру?');
        }
        if (userNumber === 0 || userNumber === null) {
          return alert('До скорых встреч!');
        }


        alert('А теперь ход сделает компьютер!');

        const compChois = getComputerChois(1, result.computer);
        const userChois = +prompt('Введите 2 если думаете что четное, 1 если нет!');

        if (userChois !== 1 && userChois !== 2) {
          alert('Введите 1 или 2');
        }

        if (compChois % 2 === 0 && userChois === 2) {
          result.player += compChois;
          result.computer -= compChois;
          alert(`Вы выиграли! Число компьютера : ${compChois}`);
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (compChois % 2 === 0 && userChois === 1) {
          result.player -= compChois;
          result.computer += compChois;
          alert(`Компьютер выиграл! Число компьютера : ${compChois}`);
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (compChois % 2 !== 0 && userChois === 2) {
          result.player -= compChois;
          result.computer += compChois;
          alert(`Компьютер выиграл! Число компьютера : ${compChois}`);
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (compChois % 2 !== 0 && userChois === 1) {
          result.player += compChois;
          result.computer -= compChois;
          alert(`Вы выиграли! Число компьютера : ${compChois}`);
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (result.player < 1) {
          const goAgain = confirm('Компьютер выиграл, хотите поиграть ещё?');
          if (goAgain) {
            result.player = 5;
            result.computer = 5;
            return RockScissorPaper();
          } if (goAgain === false) {
            return alert('Пока!');
          }
        }

        if (result.computer < 1) {
          const goAgain = confirm('Вы выиграли, хотите поиграть ещё?');
          if (goAgain) {
            result.player = 5;
            result.computer = 5;
            return RockScissorPaper();
          } if (goAgain === false) {
            return alert('Пока!');
          }
        }

        if (userChois === 0 || userChois === null) {
          confirm('Желаете покинуть игру?');
        }
        if (userChois === 0 || userChois === null) {
          return alert('До скорых встреч!');
        }
        return firstTurnUser();
      };

      const firstTurnComputer = () => {
        alert('Первый ход сделает компьютер!');

        const compChois = getComputerChois(1, result.computer);
        const userChois = +prompt('Введите 2 если четное, 1 если нет!');

        if (userChois !== 1 && userChois !== 2) {
          alert('Введите 1 или 2');
        }

        if (compChois % 2 === 0 && userChois === 2) {
          result.player += compChois;
          result.computer -= compChois;
          alert(`Вы выиграли! Число компьютера : ${compChois}`);
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (compChois % 2 === 0 && userChois === 1) {
          result.player -= compChois;
          result.computer += compChois;
          alert(`Компьютер выиграл! Число компьютера : ${compChois}`);
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (compChois % 2 !== 0 && userChois === 2) {
          result.player -= compChois;
          result.computer += compChois;
          alert(`Компьютер выиграл! Число компьютера : ${compChois}`);
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (compChois % 2 !== 0 && userChois === 1) {
          result.player += compChois;
          result.computer -= compChois;
          alert(`Вы выиграли! Число компьютера : ${compChois}`);
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (result.player < 1) {
          const goAgain = confirm('Компьютер выиграл, хотите поиграть ещё?');
          if (goAgain) {
            result.player = 5;
            result.computer = 5;
            return RockScissorPaper();
          } if (goAgain === false) {
            return alert('Пока!');
          }
        }

        if (result.computer < 1) {
          const goAgain = confirm('Вы выиграли, хотите поиграть ещё?');
          if (goAgain) {
            result.player = 5;
            result.computer = 5;
            return RockScissorPaper();
          } if (goAgain === false) {
            return alert('Пока!');
          }
        }

        if (userChois === 0 || userChois === null) {
          confirm('Желаете покинуть игру?');
        }
        if (userChois === 0 || userChois === null) {
          return alert('До скорых встреч!');
        }

        alert('А теперь сделайте ход!');

        const userNumber = +prompt(`Введите число от 1 до ${result.player}`);
        if (userNumber < 0 || userNumber > result.player) {
          alert(`Введите число от 1 до ${result.player}`);
          return firstTurnComputer();
        }
        const computerNumber = getRandomNumber(1, 100);


        if (computerNumber % 2 === 0 && userNumber % 2 === 0) {
          result.player -= userNumber;
          result.computer += userNumber;
          alert(`Компьютер выиграл! Число компьютера : ${computerNumber}`);
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (computerNumber % 2 !== 0 && userNumber % 2 !== 0) {
          result.player -= userNumber;
          result.computer += userNumber;
          alert('Компьютер выиграл!');
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }
        if (computerNumber % 2 === 0 && userNumber % 2 !== 0) {
          result.player += userNumber;
          result.computer -= userNumber;
          alert('Вы выиграли!');
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }
        if (computerNumber % 2 !== 0 && userNumber % 2 === 0) {
          result.player += userNumber;
          result.computer -= userNumber;
          alert('Вы выиграли!');
          alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }
        if (result.player < 1) {
          const goAgain = confirm('Победа Копмьютера, хотите поиграть еще?');
          if (goAgain) {
            result.player = 5;
            result.computer = 5;
            return RockScissorPaper();
          } if (goAgain === false) {
            return alert('Пока!');
          }
        }

        if (result.computer < 1) {
          const goAgain = confirm('Вы выиграли, хотите поиграть ещё?');
          if (goAgain) {
            result.player = 5;
            result.computer = 5;
            return RockScissorPaper();
          } if (goAgain === false) {
            return alert('Пока!');
          }
        }

        if (userNumber === 0 || userNumber === null) {
          confirm('Желаете покинуть игру?');
        }
        if (userNumber === 0 || userNumber === null) {
          return alert('До скорых встреч!');
        }

        return firstTurnComputer();
      };


      RockScissorPaper();
    };
  };


  window.GTR = game;
})();
