'use strict'

const personalComputer = 'dell';
const laptop = 'hp';
const screen = 'samsung';

const amountOfpersonalComputer = 100;
const amountOflaptop = 10;
const amountOfscreen = 3;

const categoryOfpersonalComputer = 'technics';
const categoryOflaptop = 'technics';
const categoryOfscreen = 'technics';

const priceOfpersonalComputer = '500$';
const priceOflaptop = '600$';
const priceOfscreen = '100$';

console.log(personalComputer);
console.log(laptop);
console.log(screen);


const allPricePersonalComputer = parseInt(priceOfpersonalComputer) * amountOfpersonalComputer;
const allPriceLaptop = parseInt(priceOflaptop) * amountOflaptop;
const allPriceScreen = parseInt(priceOfscreen) * amountOfscreen;

console.log('Общая стоимость ПК:', allPricePersonalComputer, '$');
console.log('Общая стоимость ноутбуков:', allPriceLaptop, '$');
console.log('Общая стоимость мониторов:', allPriceScreen, '$');

const allPrice = allPricePersonalComputer + allPriceLaptop + allPriceScreen;
console.log('Общая стоимость товара:', allPrice, '$');



const userItemName = prompt('Введите наименование товара');
console.log(typeof userItemName);
const userAmountItem = Number(prompt('Введите количество товара'));
console.log(typeof userAmountItem);
const userСCategoryItem = prompt('Введите категорию товара');
console.log(typeof userСCategoryItem);
const userPriceItem = Number(prompt('Введите цену товара'));
console.log(typeof userPriceItem);

console.log('На складе',  userAmountItem, 'едениц товара', userItemName, 'общей стоимостью', userAmountItem*userPriceItem, '$' );