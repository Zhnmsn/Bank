"use strict"

const cart = {
    items : [],
    totalPrice : 10,
    count : 22220,

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
            name : item,
            price : priceOfItem,
            amount : this.increaseCount(countOfItem),
        };  
            return this.items.push(itemsObj);
    },

    calculateItemPrice() {
            this.totalPrice = this.items.reduce((acc, curr) => 
                acc = acc +(curr.price * curr.amount), 0);
            return this.totalPrice ;
},
} 
    
    




