"use strict"

    let result = 0;
    const allCashBox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
    
    const getAverageValue = (numberArray) => {
        for( let k=0; k < numberArray.length; k++) {
        result = result + numberArray[k];
    }   return Math.floor(result/numberArray.length);
    }
    console.log(`Средний чек - ${getAverageValue(allCashBox)}`);
