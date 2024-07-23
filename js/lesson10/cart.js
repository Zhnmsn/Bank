'use strict';

const cart = {
  items: [],
  totalPrice: 11,
  count: 0,

  print() {
    const obj = JSON.stringify(this.items);
    return obj;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  increaseCount(number) {
    this.count += number;
    return this.count;
  },

  add(item, priceOfItem, countOfItem) {
    const itemsObj = {
      name: item,
      price: priceOfItem,
      amount: this.increaseCount(countOfItem),
    };
    return this.items.push(itemsObj);
  },

  calculateItemPrice() {
    const sum = this.items.reduce((acc, curr) =>
      acc += (curr.price * curr.amount), 0);
    return sum + this.totalPrice;
  },

  get getTotalPrice() {
    return this.calculateItemPrice();
  },

};

cart.add('item1', 100, 7);
cart.add('item2', 200, 2);
cart.add('item3', 50, 12);
cart.calculateItemPrice();

console.log(cart.print() + `\n` + cart.getTotalPrice);


