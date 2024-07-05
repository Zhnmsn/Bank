"use strict"

const isPrime = (num) => {
    let sqrtNum = Math.floor(Math.sqrt(num));
    
        for (let i = 2; i <= sqrtNum+1; i++) {
            if(num % i === 0)  {
            num = false;
            break;  } }
                return num > 1;
            } 
            
            console.log(isPrime(11));
