"use strict"

var num1 = document.getElementById("input1").value;
var num2 = document.getElementById("input2").value;

if(TestInput(num1) && TestInput(num2)){
  let Tc1 = parseInt(num1);
  let Tc2 = parseInt(num2);
  let summ = Tc1 + Tc2;
  let tf =(9 / 5) * summ + 32;
  document.getElementById("answer").value =tf;
  console.log(tf); 
}else{
  alert("Что-то введено неправильно!")
}

function TestInput(num) {
  if (isNaN(num) || num == "") {
    return false;
  }
  return true;  
}
