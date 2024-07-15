"use strict"

const cart = {
    items : [],
    totalPrice : 0,
    count : 0,

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

    getTotalPrice() {
        this.totalPrice = this.calculateItemPrice();
        return this.totalPrice;
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
    
    
cart.add('item1', 100, 7);
cart.add('item1', 200, 4);
cart.add('item1', 50, 12);


console.log(cart.print() + `\n` + cart.getTotalPrice()); 




    


