//1. Где можн можно применить замыкание
// В создании массива координат препятствий


// function createCountCoordinate() {
//   var obstacle_x = 0;
//   var obstacle_y = 0;
//   var arr = [];
//   function newCoordinate(){    
//     obstacle_x = Math.floor(Math.random() * (FIELD_SIZE_X));
//     obstacle_y = Math.floor(Math.random() * (FIELD_SIZE_Y));
//     arr.push(obstacle_x);
//     arr.push(obstacle_y);
//     return arr;
//   }
//   return newCoordinate();
// }


// a. выведет undefined в if будует false 

// if (!("a" in window)) {
// var a = 1;
// }
// console.log(a);

// console.log(!("a" in window));

//с. Первой увидит функцию
function a(x) {
return x * 2;
}
//var a;
alert(a);