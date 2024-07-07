"use strict"


const allCashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
    ];

    let res;
    let newArr = [];
    let all = 0;
    let average;
    
    const getAveragePriceGoods = (arr) => {
        for(let[key,value] of arr) {
            res = value/key;
            newArr.push(Math.round(res));
        } 
        for (let k = 0; k < newArr.length; k++) {
            all += newArr[k];
        }
        average = Math.round(all/newArr.length);
    }
        
    getAveragePriceGoods(allCashbox);
    console.log(`Средняя стоимость товара по категориям - ${newArr} ----- Cредняя стоимость одного товара в магазине - ${average}`);
    
    
    