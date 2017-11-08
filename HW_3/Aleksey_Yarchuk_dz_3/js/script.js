
//Вывод простых чисел от 0 до 100
task1(0);

function task1(n) {
  console.log("Вывод простых чисел от 0 до 100");
  if (n == 1 || n == 0) {
    n = 2;
  }
  if (n > 100) {
    console.log("Введите число от 0 до 100");
  }
  while (n <= 100) {
    if (DivisionNumber(n)) { // если нету длителей кроме самого себя и единицы
      console.log(n);
    }
    ++n;
  }
  console.log("*************************");
}
function DivisionNumber(n) {
  for (var d = 2; d < n; d++) {
    if (n % d == 0) {
      return false;
    }
  }
  return true;
}

//Выод чисел от 0 до 10 с помощью do..while

task2(0);

function task2(n) {
  console.log("Вывод чисел от 0 до 10 с помощью do..while")
  if (n >= 0 && n < 10) {
    do {
      if (n == 0) {
        console.log(n++ + " - это ноль");
      } else if (Even(n)) {
        console.log(n++ + " - четное число")
      } else {
        console.log(n++ + " - нечетное число")
      }

    } while (n < 10)
  } else {
    console.log("Вы ввели число не от 0 до 10 или вообще не число")
  }
  console.log("***********************************");
}
function Even(n) {
  if (n % 2 == 0) {
    return true;
  }
  return false;
}

//Вывод чисел от 0 до 10 с помощью for без тела

task3(0);

function task3(n) {
  console.log("Вывод чисел от 0 до 10 с помощью for без тела");
  for (; n < 10; console.log(n++)) { }
  console.log("********************")
}

//Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:

task4(20);

function task4(n) {

  var str = ""
  var count = 1;
  do {
    console.log(str = str + "x");
    ++count;
  } while (count <= n);
  console.log("**************************");
}

//Нарисовал елочку 
christmasTree();

function christmasTree() {
  var topCounter = "x";
  var heightTop = 10;
  var heightDown = 4;
  for (var topTree = 1; topTree <= heightTop; topTree++) { //верхняя часть елки количество с каждой строны
    Shift(topTree, topCounter, heightTop);
    topCounter.trim();
    for (var drawElem = 1; drawElem <= 2; drawElem++) {
      topCounter += "x";
    }
  }

  for (var downTree = 1; downTree <= heightDown; downTree++) { //рисуем ногу елки
    let shift = "";
    for (var shiftCounter = 1; shiftCounter <= heightTop; shiftCounter++) {
      shift += " ";
    }
    console.log(shift + "x");
  }

}
function Shift(count, topCounter, heightTop) {
  var shift = heightTop - count;
  for (var index = 0; index <= shift; index++) {
    topCounter = " " + topCounter;
  }
  console.log(topCounter);
}

function Test(a, b) {
  return a * b;
}


let arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(0, 3, 4));

Binary();

function Binary(params) {
  var presentValue = 100;
  var xMinValue=0;
  var a = 1.29277228;
  var b = 0.54829493;
  var c = 25.11820012;
  var d = 45.62683815;
  var xMiddle = presentValue;
  var tmp=0;
  while (true) {
    if (monotonusFunction(xMiddle, a, b, c, d) > 0) {
      tmp = xMiddle;
      xMiddle = (xMinValue + presentValue) / 2;
    } else {
      xMiddle = (tmp + xMiddle) / 2;
    }
    if (monotonusFunction(xMiddle, a, b, c, d) == 0) {
      break;
    }
  }
  console.log(tmp);
}

//console.log(monotonusFunction(73.59536854928633,0.59912051,0.64030348,263.33721367,387.92069617));

function monotonusFunction(x, a, b, c, d) {
  return (a * x + b * Math.sqrt(Math.pow(x, 3)) - c * Math.exp(-x / 50) - d).toFixed(12);
}


module.exports = Test;