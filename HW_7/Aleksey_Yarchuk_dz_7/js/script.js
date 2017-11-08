///Выводить счёт в режиме реального времени.

//Генерировать временные препятствия на поле.
// Найти где находится змейка.(это где-то в коде есть)
// Разместить рандомный блок на поле(чтобы не пересекался с едой)
// После того как змейка съела еду, генерировать на поле препятствия (красить их в белый цвет) (snake-unit)

//Убрать границы поля. Т.е. при пересечении границы поля змейка появляется с противоположной стороны.


var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300; // интервал в мс между перемещениями змейки
var snake = []; // змейка
var direction = "x-"; // по умолчанию змейка движется вверх, уменьшая координату х
var gameIsRunning = false; // игра не запущена
var snake_timer; // таймер
var food_timer; // таймер
var score = 0;
var points = 0; //очки(съеденные квадратики)

var pointsDiv ="";

var countObstacle =0; //количество препятствий


function init() {
  prepareGameField();

  // вешаем на кнопку старта слушатель
  document.getElementById("snake-start").addEventListener("click", startGame);
  document.getElementById("snake-renew").addEventListener("click", refreshGame);

  // добавляем прослушиваение клавиатуры
  addEventListener("keydown", changeDirection);
}

/*
* Отрисовка игрового поля
* Само игровое поле - это таблица
*/
function prepareGameField() {
  var game_table = document.createElement("table");
  game_table.setAttribute("class", "game-table");

  // в цикле генерируем ячейки игровой таблицы
  for (var i = 0; i < 20; i++) {
    var row = document.createElement("tr");
    row.setAttribute("class", "game-table-row row-" + i);

    for (var j = 0; j < 20; j++) {
      var cell = document.createElement("td");
      cell.setAttribute("class", "game-table-cell cell-" + i + "-" + j);

      row.appendChild(cell);
    }

    game_table.appendChild(row);
  }

  document.getElementById("snake-field").appendChild(game_table);
}

/*
* Инициализация игры
*/
function startGame() {
  gameIsRunning = true;
  pointsDiv = document.getElementsByClassName("points")[0];
  setToZeroPoints(); //Обнуление очков

  respawn();

  snake_timer = setInterval(move, SNAKE_SPEED);
  setTimeout(createFood, 5000);
}

/*
* Располагаем змейку на игровом поле
*/
function respawn() {
  // змейка - это массив элементов td.game-table-cell
  // стартовая длина змейки - 2

  // начинаем из центра
  var start_coord_x = Math.floor(FIELD_SIZE_X / 2);
  var start_coord_y = Math.floor(FIELD_SIZE_Y / 2);

  var snake_head = document.getElementsByClassName("cell-" + start_coord_x + "-" + start_coord_y)[0];
  snake_head.setAttribute("class", snake_head.getAttribute("class") + " snake-unit");

  var snake_tail = document.getElementsByClassName("cell-" + (start_coord_x - 1) + "-" + start_coord_y)[0];
  snake_tail.setAttribute("class", snake_tail.getAttribute("class") + " snake-unit");

  snake.push(snake_head);
  snake.push(snake_tail);
}

/*
* Движение змейки
*/
function move() {
  // собираем классы
  var snake_head_classes = snake[snake.length - 1].getAttribute("class").split(" ");

  // сдвигаем голову на 1 клетку
  var new_unit;
  var snake_coords = snake_head_classes[1].split("-");
  var coord_x = parseInt(snake_coords[1]);
  var coord_y = parseInt(snake_coords[2]);
  
  //информация о слудующей ячейке
  var new_unit_classes;
  

  // определяем новую точку
  if (direction == "x-") {
    if (coord_x - 1 == -1) {
      coord_x = 20;
    }
    new_unit = document.getElementsByClassName("cell-" + (coord_x - 1) + "-" + coord_y)[0];
  }
  else if (direction == "x+") {
    if (coord_x + 1 == 20) {
      coord_x = -1;
    }
    new_unit = document.getElementsByClassName("cell-" + (coord_x + 1) + "-" + coord_y)[0];
  }
  else if (direction == "y+") {
    if (coord_y + 1 == 20) {
      coord_y = -1;
    }
    new_unit = document.getElementsByClassName("cell-" + coord_x + "-" + (coord_y + 1))[0];
  }
  else if (direction == "y-") {
    if (coord_y - 1 == -1) {
      coord_y = 20;
    }
    new_unit = document.getElementsByClassName("cell-" + coord_x + "-" + (coord_y - 1))[0];
  }

  if (new_unit !== undefined) {
    new_unit_classes = new_unit.getAttribute("class").split(" ");
    if (new_unit_classes.includes("obstacle-unit")) {
      finishTheGame();
    }
  }  
  
  // проверяем, что new_unit - это не часть змейки
  // также проверяем, что змейка не дошла до границы
  if (!isSnakeUnit(new_unit) && new_unit !== undefined) {
    // добавляем новую часть змейки
    new_unit.setAttribute("class", new_unit.getAttribute("class") + " snake-unit");
    snake.push(new_unit);

    // если змейка не ела, убираем хвост
    if (!haveFood(new_unit)) {
      // находим удаляемый элемент
      var removed = snake.splice(0, 1)[0];
      var classes = removed.getAttribute("class").split(" ");
      // удаляем маркирующий класс
      removed.setAttribute("class", classes[0] + " " + classes[1]);
    }
  }
  else {
    console.log(coord_x, coord_y);
    finishTheGame();
  }
}

/*
* Проверяем элемент на принадлежность змейке
*/
function isSnakeUnit(unit) {
  var check = false;

  if (snake.includes(unit)) {
    check = true;
  }

  return check;
}

/*
* Проверяем встречу с едой
*/
function haveFood(unit) {
  var check = false;

  var unit_classes = unit.getAttribute("class").split(" ");

  // змейка нашла еду
  if (unit_classes.includes("food-unit")) {
    check = true;
    
    // создаём новую еду
    createFood();

    // увеличиваем очки
    score++;
  }
  if(check){
    addPoints();
  }

  return check;
}

//Добавление очков
function addPoints(){
  points += 1;
  pointsDiv.innerHTML = "Points: " + points;
}

//Обнуление очков
function setToZeroPoints(){
  points = 0;
  pointsDiv.innerHTML = "Points: " + points;
}

/*
* Создаём еду
*/
function createFood() {
  var foodCreated = false;

  while (!foodCreated) {
    // выбираем случайную клетку
    var food_x = Math.floor(Math.random() * (FIELD_SIZE_X));
    var food_y = Math.floor(Math.random() * (FIELD_SIZE_Y));

    var food_cell = document.getElementsByClassName("cell-" + food_x + "-" + food_y)[0];
    var food_cell_classes = food_cell.getAttribute("class").split(" ");

    // если тут нет змейки
    if (!food_cell_classes.includes("snake-unit") && !food_cell_classes.includes("obstacle-unit")) {
      // ставим сюда еду
      var classes = "";
      for (var i = 0; i < food_cell_classes.length; i++) {
        classes += food_cell_classes[i] + " ";        
      }

      food_cell.setAttribute("class", classes + "food-unit");
      foodCreated = true;
    }
  }
  //поздаем препятствие после создание еды
  if(foodCreated){
    createObstacle();
  }
}

var obstacle_cell;
var obstacle_cell_classes;
  
function createObstacle() {
  var obstacleCreated = false;
  var count = countObstacle + 1;
  while (countObstacle <= count) {

    createCountCoordinate();

    // если тут нет змейки и еды
    if (!obstacle_cell_classes.includes("snake-unit") && !obstacle_cell_classes.includes("food-unit") 
                                                      && !obstacle_cell_classes.includes("obstacle-unit")) {
      // ставим сюда барьер
      var classes = "";
      for (var i = 0; i < obstacle_cell_classes.length; i++) {
        classes += obstacle_cell_classes[i] + " ";        
      }

      obstacle_cell.setAttribute("class", classes + "obstacle-unit");
      countObstacle += 1; //счетчик показывающий, что добавили одно препятствие            
    }    
  }
}

function createCountCoordinate(){
  var obstacle_x = Math.floor(Math.random() * (FIELD_SIZE_X));
  var obstacle_y = Math.floor(Math.random() * (FIELD_SIZE_Y));

  obstacle_cell = document.getElementsByClassName("cell-" + obstacle_x + "-" + obstacle_y)[0];
  obstacle_cell_classes = obstacle_cell.getAttribute("class").split(" ");  
}

/*
* Меняем направление движения змейки
*/
function changeDirection(e) {
      switch (e.keyCode) {
            case 37:  // если нажата клавиша влево
      // если до этого двигались вправо, то ничего не произойдет            
      if (direction != "y+")
        direction = "y-";
                  break;
            case 38:   // если нажата клавиша вверх
      if (direction != "x+")
        direction = "x-";
                  break;
            case 39:   // если нажата клавиша вправо
      if (direction != "y-")
        direction = "y+";
                  break;
            case 40:   // если нажата клавиша вниз
                  if (direction != "x-")
        direction = "x+";
                  break;
      }
}

/*
* Действия для завершения игры
*/
function finishTheGame() {
  gameIsRunning = false;
  clearInterval(snake_timer);
  alert("GAME OVER! Your score is " + score);
}

/*
* Новая игра
*/
function refreshGame() {
  location.reload();
}

// стартуем
window.onload = init;