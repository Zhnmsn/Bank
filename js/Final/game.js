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

        if (userWord === null) {
          const quastion = confirm('Вы точно хотите выйти из игры?');
          if (quastion) {
            return alert('Пока!');
          } else {
            return RockScissorPaper();
          }
        }

        if (userWord !== 'Камень' && userWord !== 'камень' && userWord !== 'бумага' &&
          userWord !== 'Бумага' && userWord !== 'Ножницы' && userWord !== 'ножницы') {
          alert('Вы ввели некорректно');
          return RockScissorPaper();
        }

        const computerWord = getRandomIntInclusive(1, 10);


        if (userWord === 'Камень' && computerWord === 'бумага' ||
                  userWord === 'камень' && computerWord === 'бумага') {
          alert('Вы проиграли, первый ходит компьютер!');
          return firstTurnComputer();
        }

        if (userWord === 'камень' && computerWord === 'ножницы' ||
                  userWord === 'Камень' && computerWord === 'ножницы') {
          alert('Вы выиграли, первый ход за вами!');
          return firstTurnUser();
        }


        if (userWord === 'ножницы' && computerWord === 'камень' ||
                  userWord === 'Ножницы' && computerWord === 'камень') {
          alert('Вы проиграли, первый ходит компьютер!');
          return firstTurnComputer();
        }

        if (userWord === 'ножницы' && computerWord === 'бумага' ||
                  userWord === 'Ножницы' && computerWord === 'бумага') {
          alert('Вы выиграли, первый ход за вами!');
          return firstTurnUser();
        }


        if (userWord === 'бумага' && computerWord === 'ножницы' ||
                  userWord === 'Бумага' && computerWord === 'ножницы') {
          alert('Вы проиграли, первый ходит компьютер!');
          return firstTurnComputer();
        }

        if (userWord === 'бумага' && computerWord === 'камень' ||
                  userWord === 'Бумага' && computerWord === 'камень') {
          alert('Вы выиграли, первый ход за вами!');
          return firstTurnUser();
        }

        if (userWord[0] === computerWord[0] || userWord[0] === 'Б' && computerWord[0] === 'б' ||
          userWord[0] === 'К' && computerWord[0] === 'к' || userWord[0] === 'Н' && computerWord[0] === 'н'
        ) {
          alert('Ничья, сделайте ещё ход!');
          return RockScissorPaper();
        }
      };

      const firstTurnUser = () => {
        alert('Сделайте первый ход!');

        const userNumber = +prompt(`Введите число от 1 до ${result.player}`);

        if (userNumber === 0 || userNumber === null) {
          const exit = confirm('Желаете покинуть игру?');
          if (exit) {
            return alert('До скорых встреч!');
          } else {
            alert('Продолжим игру!');
          }
        }

        if (userNumber < 0 || userNumber > result.player) {
          alert(`Введите число от 1 до ${result.player}`);
          return firstTurnUser();
        }
        const computerNumber = getRandomNumber(1, 100);


        if (computerNumber % 2 === 0 && userNumber % 2 === 0) {
          result.player -= userNumber;
          result.computer += userNumber;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }

          alert(`Компьютер выиграл! Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (computerNumber % 2 !== 0 && userNumber % 2 !== 0) {
          result.player -= userNumber;
          result.computer += userNumber;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Компьютер выиграл! Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }
        if (computerNumber % 2 === 0 && userNumber % 2 !== 0) {
          result.player += userNumber;
          result.computer -= userNumber;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Вы выиграли! Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }
        if (computerNumber % 2 !== 0 && userNumber % 2 === 0) {
          result.player += userNumber;
          result.computer -= userNumber;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Вы выиграли! Игрок : ${result.player}, Компьютер : ${result.computer}`);
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


        alert('А теперь ход сделает компьютер!');

        const compChois = getComputerChois(1, result.computer);
        const userChois = confirm('Число четное?');
        if (userChois && compChois % 2 === 0) {
          result.player += compChois;
          result.computer -= compChois;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Вы выиграли! Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (userChois && compChois % 2 !== 0) {
          result.player -= compChois;
          result.computer += compChois;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Компьютер выиграл! Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (!userChois && compChois % 2 === 0) {
          result.player -= compChois;
          result.computer += compChois;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Компьютер выиграл! Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (!userChois && compChois % 2 !== 0) {
          result.player += compChois;
          result.computer -= compChois;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Вы выиграли! Игрок : ${result.player}, Компьютер : ${result.computer}`);
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


        const userChois = confirm('Число четное?');
        if (userChois && compChois % 2 === 0) {
          result.player += compChois;
          result.computer -= compChois;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }

          alert(`Вы выиграли! Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (userChois && compChois % 2 !== 0) {
          result.player -= compChois;
          result.computer += compChois;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Компьютер выиграл! Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (!userChois && compChois % 2 === 0) {
          result.player -= compChois;
          result.computer += compChois;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Компьютер выиграл! Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (!userChois && compChois % 2 !== 0) {
          result.player += compChois;
          result.computer -= compChois;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Вы выиграли! Игрок : ${result.player}, Компьютер : ${result.computer}`);
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
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Компьютер выиграл! Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }

        if (computerNumber % 2 !== 0 && userNumber % 2 !== 0) {
          result.player -= userNumber;
          result.computer += userNumber;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Компьютер выиграл! Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }
        if (computerNumber % 2 === 0 && userNumber % 2 !== 0) {
          result.player += userNumber;
          result.computer -= userNumber;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Вы выиграли! Игрок : ${result.player}, Компьютер : ${result.computer}`);
        }
        if (computerNumber % 2 !== 0 && userNumber % 2 === 0) {
          result.player += userNumber;
          result.computer -= userNumber;
          if (result.player < 0) {
            result.player = 0;
          } if (result.computer < 0) {
            result.computer = 0;
          } if (result.player > 10) {
            result.player = 10;
          } if (result.computer > 10) {
            result.computer = 10;
          }
          alert(`Вы выиграли! Игрок : ${result.player}, Компьютер : ${result.computer}`);
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
