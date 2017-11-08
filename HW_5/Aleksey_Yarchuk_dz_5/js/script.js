// Создать функцию, генерирующую шахматную доску. 
//При этом можно использовать любые html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом, т.е.
// чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы
// – латинскими буквами A, B, C, D, E, F, G, H.
window.onload = task1();

function task1(params) {
  //Написать for чтобы проходил каждую строку
  for (var row = 1; row <= 8; row++) {
    var listOfRow = document.querySelectorAll(".chest-board__row:nth-child(" + row + ") " + ".chest-board__column");
    //проходим по столбцам
    for (var column = 1; column <= 8; column++) {
      if (even(column)) {
        listOfRow[column].style.backgroundColor = "black";
      } else {
        listOfRow[column].style.backgroundColor = "white";
      }
    }
  }

}
//Для четных белый
function even(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

//Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру,
// например К-король, Ф – ферзь и тп., 
//причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.

var listFigure = ["Ладья", "Конь", "Слон", "Ферзь", "Король", "Ферзь", "Конь", "Ладья"];
var Peshka = "Пешка";



function task2() {
  //перекрашивание доски
  repainBoard();
  //Поставить черные
  for (let row = 1; row <= 2; row++) {
    var listOfRow = document.querySelectorAll(".chest-board__row:nth-child(" + row + ") " + ".chest-board__column");
    printFigure(listOfRow, row);
  }
  //поставить белые
  var lastRow = document.getElementsByClassName("chest-board__row").length - 1;
  for (let row = lastRow, numberRow = 1; numberRow <= 2; numberRow++ , row--) {
    var listOfRow = document.querySelectorAll(".chest-board__row:nth-child(" + row + ") " + ".chest-board__column");
    printFigure(listOfRow, numberRow);
  }
}

function printFigure(listOfRow, row) {
  if (row == 1) {
    for (let column = 1; column <= 8; column++) {
      listOfRow[column].innerText = listFigure[column - 1];
    }
  }
  if (row == 2) {
    for (let column = 1; column <= 8; column++) {
      listOfRow[column].innerText = Peshka;
    }
  }
}
function repainBoard() {
  for (let row = 8; row >= 1; row--) {
    let listOfRow = document.querySelectorAll(".chest-board__row:nth-child(" + row + ") " + ".chest-board__column");
    for (let column = 1; column <= 8; column++) {
      if (even(row)) { //четные строки закрашиваются так        
        if (even(column)) {
          listOfRow[column].style.backgroundColor = "white";
        } else {
          listOfRow[column].style.backgroundColor = "brown";
        }
      } else { // нечетные так
        if (even(column)) {
          listOfRow[column].style.backgroundColor = "brown";
        } else {
          listOfRow[column].style.backgroundColor = "white";
        }
      }
    }
  }
}

///3.	* Заменить буквы, обозначающие фигуры картинками.

//Через appendChild добавить тег img, в css поставить свойство background-img
/// https://goo.gl/bEihQq

var objctImg = {
  pawn: "https://goo.gl/pk3TKJ",
  horse: "https://goo.gl/wp5VF5",
  elephant: "https://goo.gl/4jck2j",
  rook: "https://goo.gl/usMXa1",
  queen: "https://goo.gl/Gvek76",
  king: "https://goo.gl/Tgxrv1"
};
var arrRigthPositionFigures = ["rook", "horse", "elephant", "queen", "king", "elephant", "horse", "rook"];



function task3(params) {
  repainBoard();
  //Поставить черные фигуры(картинки)
  for (let row = 1; row <= 2; row++) {
    var listOfRow = document.querySelectorAll(".chest-board__row:nth-child(" + row + ") " + ".chest-board__column");
    printImg(listOfRow, row);
  }
  //поставить белые фигуры(Картинки)
  var lastRow = document.getElementsByClassName("chest-board__row").length - 1;
  for (let row = lastRow, numberRow = 1; numberRow <= 2; numberRow++ , row--) {
    var listOfRow = document.querySelectorAll(".chest-board__row:nth-child(" + row + ") " + ".chest-board__column");
    printImg(listOfRow, numberRow);
  }
}

function printImg(listOfRow, row) {
  if (row == 1) {
    for (let column = 1; column <= 8; column++) {
      let newImg = document.createElement("div");
      newImg.className = "chest-board__img";      
      newImg.innerHTML = "<img src=" + findFugure(column - 1) + ">";
      listOfRow[column].appendChild(newImg);
    }
  }
  if (row == 2) {
    for (let column = 1; column <= 8; column++) {
      let newImg = document.createElement("div");
      newImg.className = "chest-board__img";      
      newImg.innerHTML = "<img src=" + objctImg.pawn + ">";
      listOfRow[column].appendChild(newImg);      
    }
  }
}

function findFugure(indexInRightPosition) {
  switch(arrRigthPositionFigures[indexInRightPosition]){
     case "rook":     
     return objctImg.rook;
          
     case "horse":
     return objctImg.hourse;
     
     case "elephant":
     return objctImg.elephant;
     
     case "queen":
     return objctImg.queen;
    
     case "king":
     return objctImg.king;
    
     default:
     console.log(arrRigthPositionFigures[indexInRightPosition]);
     alert("Ошибка поиска");
  }
  
  //дописать если нет вариантов
}
