"use strict"

task3();
task4();
task5(document.querySelectorAll(".home-work__task-answer")[4].querySelectorAll("input")[0].value, document.querySelectorAll(".home-work__task-answer")[4].querySelectorAll("input")[1].value);
task6();
task8();

function task3(params) {
  let a = document.querySelectorAll(".home-work__task-answer input")[0].value,
    b = document.querySelectorAll(".home-work__task-answer input")[1].value;

  document.querySelectorAll(".home-work__task-answer h5")[0].innerText = "a = " + a;
  document.querySelectorAll(".home-work__task-answer h5")[1].innerText = "b = " + b;

  if (a % 2 == 0 && b % 2 == 0) {
    document.querySelectorAll(".home-work__task-answer span")[0].innerText = "Разность " + (parseInt(a) - parseInt(b));
  }
  if (a < 0 && b < 0) {
    document.querySelectorAll(".home-work__task-answer span")[0].innerText = "Произведение " + parseInt(a) * parseInt(b);
  }
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    document.querySelectorAll(".home-work__task-answer span")[0].innerText = "Сумма " + (parseInt(a) + parseInt(b));

  }

}
function task4(params) {
  let a = document.querySelectorAll(".home-work__task-answer")[3].querySelectorAll("input")[0].value;

  var str = "";
  var array = [];
  if (Number.isInteger(parseInt(a))) {
    switch (a = parseInt(a)) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        for (var num = a, iter = 0; num <= 15; num++ , iter++) {
          array[iter] = num;
        }
        break;
      default:
        alert("Введено неправильне число");
        break;
    }
  }
  document.querySelectorAll(".home-work__task-answer")[3].querySelector("h5").innerText = array.toString();
  console.log(array.toString());
}

function task5(a, b) {
  a = parseInt(a);
  b = parseInt(b);

  let arr = [];
  arr[0] = "Сложение =" + summ(a, b);
  arr[1] = "Вычитание =" + subtraction(a, b);
  arr[2] = "Умножение =" + multiplication(a, b);
  arr[3] = "Деление =" + division(a, b);
  document.querySelectorAll(".home-work__task-answer")[4].querySelector("h5").innerText = arr.toString();
}
function summ(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}

function task6(params) {
  let a = document.querySelectorAll(".home-work__task-answer")[5].querySelectorAll("input")[0].value;
  let b = document.querySelectorAll(".home-work__task-answer")[5].querySelectorAll("input")[1].value;
  if(parseInt(a)!=NaN && parseInt(b)!=NaN){
    a=parseInt(a);
    b=parseInt(b); 
    document.querySelectorAll(".home-work__task-answer")[5].querySelectorAll("h5")[0].innerText= "Сложение ="+task6Switch(a,b, summ);
    document.querySelectorAll(".home-work__task-answer")[5].querySelectorAll("h5")[1].innerText= "Вычитание ="+task6Switch(a,b, subtraction);
    document.querySelectorAll(".home-work__task-answer")[5].querySelectorAll("h5")[2].innerText= "Деление ="+task6Switch(a,b, division);
    document.querySelectorAll(".home-work__task-answer")[5].querySelectorAll("h5")[3].innerText= "Умножение ="+task6Switch(a,b,multiplication)
  }
  
}
function task6Switch(a,b,operation) {
  switch (operation) {
    case summ:
      return summ(a,b);      
    case subtraction:
      return subtraction(a,b);
    case multiplication:
      return multiplication(a,b);
    case division:
      return division(a,b);  
    default:
      break;
  }
}

function task8() {
  let x = document.querySelectorAll(".home-work__task-answer")[7].querySelectorAll("input")[0].value;
  let y = document.querySelectorAll(".home-work__task-answer")[7].querySelectorAll("input")[1].value;
  document.querySelectorAll(".home-work__task-answer")[7].querySelectorAll("h5")[0].innerText=power(x,y)
}
function power(x,y) {
  console.log(y);
  if(y==0){
    return 1;
  }else{
   return x*power(x,y-1);
  }
}