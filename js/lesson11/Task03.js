'use strict';


const rectangle = {
  width: 5,
  height: 5,

  set changeWidth(newWidth) {
    this.width = newWidth;
  },

  set changeHeight(newHeight) {
    this.height = newHeight;
  },

  get getPerimetr() {
    return (this.width + this.height) * 2 + ' см';
  },

  get getArea() {
    return this.width * this.height + ' cм';
  },
};

console.log(rectangle.getArea);

rectangle.changeHeight = 10;
rectangle.changeWidth = 18;

console.log(rectangle.getArea);
console.log(rectangle.getPerimetr);
