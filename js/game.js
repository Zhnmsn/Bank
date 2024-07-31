"use strict";

(() => {
   

    const getRandomNumber = (min, max)=> {
                let randomNumber = Math.ceil(Math.random() * (max - min) + min);
                return randomNumber;
    }

    const getComputerChois = (min, max)=> {
                let computerChois = Math.ceil(Math.random() * (max - min) + min);
                return computerChois;
    }


      const game = (language) => {
        const result = {
            player : 5,
            computer : 5,
        };
        
        return function start() { 

         let firstTurnUser = () => {

        
         alert('Сделайте первый ход!');

            let userNumber = +prompt(`Введите число от 1 до ${result.player}`);
            if (userNumber < 0 || userNumber > result.player) {
                alert(`Введите число от 1 до ${result.player}`);
                return firstTurnUser();
              }
           let computerNumber = getRandomNumber(1, 100);
                     
           

           if(computerNumber % 2 === 0 && userNumber % 2 === 0) {
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
             if (result.player < 1 ) {
                 let goAgain = confirm('Победа Копмьютера, хотите поиграть еще?');
                 if (goAgain) {
                  result.player = 5;
                  result.computer = 5;
                  return firstTurnUser();
                 }  if (goAgain === false) {
                  return alert('Пока!');
                 }
                  
               } 

               if (result.computer < 1 ) {
                let goAgain =  confirm('Вы выиграли, хотите поиграть ещё?'); 
                if (goAgain) {
                  result.player = 5;
                  result.computer = 5;
                  return firstTurnUser();
                 }  if (goAgain === false) {
                  return alert('Пока!');
                 }
               }
               
               if (userNumber === 0 || userNumber === null ) {
                confirm('Желаете покинуть игру?');
               }
               if (userNumber === 0 || userNumber === null ) {
                return alert('До скорых встреч!');
               }
            

           

               alert('А теперь ход сделает компьютер!');

               let compChois = getComputerChois( 1, result.computer);
               let userChois = +prompt('Введите 2 если думаете что четное, 1 если нет!');

               if (userChois !== 1 && userChois !== 2) {
                 alert('Введите 1 или 2');
               }

               if( compChois % 2 === 0 && userChois === 2) {
                result.player += compChois;
                result.computer -= compChois;
                alert(`Вы выиграли! Число компьютера : ${compChois}`);
                alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
               }

               if( compChois % 2 === 0 && userChois === 1) {
                result.player -= compChois;
                result.computer += compChois;
                alert(`Компьютер выиграл! Число компьютера : ${compChois}`);
                alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
               }

               if( compChois % 2 !== 0 && userChois === 2) {
                result.player -= compChois;
                result.computer += compChois;
                alert(`Компьютер выиграл! Число компьютера : ${compChois}`);
                alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
               }

               if( compChois % 2 !== 0 && userChois === 1) {
                result.player += compChois;
                result.computer -= compChois;
                alert(`Вы выиграли! Число компьютера : ${compChois}`);
                alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
               }

               if (result.player < 1 ) {
                  let goAgain =  confirm('Компьютер выиграл, хотите поиграть ещё?'); 
                  if (goAgain) {
                     result.player = 5;
                  result.computer = 5;
                    return firstTurnUser();
                   }  if(goAgain === false) {
                    return alert('Пока!');
                   }
               } 

               if (result.computer < 1 ) {
                  let goAgain =  confirm('Вы выиграли, хотите поиграть ещё?'); 
                  if (goAgain) {
                     result.player = 5;
                  result.computer = 5;
                    return firstTurnUser();
                   }  if(goAgain === false) {
                    return alert('Пока!');
                   }
               } 
               
               if (userChois === 0 || userChois === null ) {
                confirm('Желаете покинуть игру?');
               }
               if (userChois === 0 || userChois === null ) {
                return alert('До скорых встреч!');
               }
               return firstTurnUser();
            }
      
            let firstTurnComputer = () => {

               alert('Первый ход сделает компьютер!');

               let compChois = getComputerChois( 1, result.computer);
               let userChois = +prompt('Введите 2 если четное, 1 если нет!');

               if (userChois !== 1 && userChois !== 2) {
                 alert('Введите 1 или 2');
               }

               if( compChois % 2 === 0 && userChois === 2) {
                result.player += compChois;
                result.computer -= compChois;
                alert(`Вы выиграли! Число компьютера : ${compChois}`);
                alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
               }

               if( compChois % 2 === 0 && userChois === 1) {
                result.player -= compChois;
                result.computer += compChois;
                alert(`Компьютер выиграл! Число компьютера : ${compChois}`);
                alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
               }

               if( compChois % 2 !== 0 && userChois === 2) {
                result.player -= compChois;
                result.computer += compChois;
                alert(`Компьютер выиграл! Число компьютера : ${compChois}`);
                alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
               }

               if( compChois % 2 !== 0 && userChois === 1) {
                result.player += compChois;
                result.computer -= compChois;
                alert(`Вы выиграли! Число компьютера : ${compChois}`);
                alert(`Игрок : ${result.player}, Компьютер : ${result.computer}`);
               }

               if (result.player < 1 ) {
                  let goAgain =  confirm('Компьютер выиграл, хотите поиграть ещё?'); 
                  if (goAgain) {
                     result.player = 5;
                  result.computer = 5;
                    return firstTurnComputer();
                   }  if(goAgain === false) {
                    return alert('Пока!');
                   }
               } 

               if (result.computer < 1 ) {
                  let goAgain =  confirm('Вы выиграли, хотите поиграть ещё?'); 
                  if (goAgain) {
                     result.player = 5;
                  result.computer = 5;
                    return firstTurnComputer();
                   }  if(goAgain === false) {
                    return alert('Пока!');
                   }
               } 
               
               if (userChois === 0 || userChois === null ) {
                confirm('Желаете покинуть игру?');
               }
               if (userChois === 0 || userChois === null ) {
                return alert('До скорых встреч!');
               }

               alert('А теперь сделайте ход!');

               let userNumber = +prompt(`Введите число от 1 до ${result.player}`);
               if (userNumber < 0 || userNumber > result.player) {
                   alert(`Введите число от 1 до ${result.player}`);
                   return firstTurnComputer();
                 }
              let computerNumber = getRandomNumber(1, 100);
                        
              
   
              if(computerNumber % 2 === 0 && userNumber % 2 === 0) {
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
                if (result.player < 1 ) {
                    let goAgain = confirm('Победа Копмьютера, хотите поиграть еще?');
                    if (goAgain) {
                     result.player = 5;
                     result.computer = 5;
                     return firstTurnComputer();
                    }  if(goAgain === false) {
                     return alert('Пока!');
                    }
                     
                  } 
   
                  if (result.computer < 1 ) {
                   let goAgain =  confirm('Вы выиграли, хотите поиграть ещё?'); 
                   if (goAgain) {
                     result.player = 5;
                     result.computer = 5;
                     return firstTurnComputer();
                    }  if(goAgain === false) {
                     return alert('Пока!');
                    }
                  }
                  
                  if (userNumber === 0 || userNumber === null ) {
                   confirm('Желаете покинуть игру?');
                  }
                  if (userNumber === 0 || userNumber === null ) {
                   return alert('До скорых встреч!');
                  }
               
                  return firstTurnComputer();

            }

            firstTurnComputer();
            
                                
           } 
           
           
                     
                    
                     
            
            }; 
        
    
    window.GTR = game;
})();