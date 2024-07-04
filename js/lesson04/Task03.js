"use strict"


const calculate = (sum, count, promo) => {
    if (count > 10) {
        sum = sum - sum*0.03;
    } 
    if (sum > 30000) {
        let discont = 0;
       discont = (sum - 30000) * 0.15;
        sum = sum - discont;
    }
    switch (promo) {
        case 'METHED':
            sum = sum - sum * 0.1;
            break;
        case 'G3H2Z1':
            if(sum>2000) {
                sum -=500;
            }
            break;
        default :
                console.log('Promo is not used');
            break;       
    }
    return sum;
}
let avv = calculate(2200, 13, 'G3H2Z1');
console.log(avv);
