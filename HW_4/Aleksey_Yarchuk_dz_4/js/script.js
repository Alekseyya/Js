'use strict'

// Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект:
//  {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо
//  соответствующее сообщение с помощью console.log и вернуть пустой объект.

task1(245);

function task1(number) {
  if (!isNaN(parseInt(number))) {
    if (number > 0 && number <= 999) {
      print(partitionOfNumber(number));
    } else if (number > 999) {
      console.log("Введено число больше 999")
    } else {
      console.log("Введено чило меньше 0 или 0")
    }
  } else {
    console.log("Вы ввели не число!")
  }
}

function print(str) {
  console.log(str);
}

function partitionOfNumber(number) {
  var number = String(number);
  var coutDigit = number.length;
  var obj = null;
  if (coutDigit == 3) {
    obj = { units: number[2], dozens: number[1], hundreds: number[0] };
    return obj;
  } else if (coutDigit == 2) {
    obj = { units: number[1], dozens: number[0] };
    return obj;
  } else {
    obj = { units: number[0] };
    return obj;
  }
}

// Для игры, реализованной на уроке, 
// добавить возможность вывода хода номер
// n (номер задается пользователем)

//надо что бы при вводе номера хода - игроку было показано что он сделал на этом ходу

task2();

function task2() {
  var game = {};

  game = {
    userName: '',
    place: 'start',
    movesLog: [],
    gameStarted: false,
    gameLog: function (n) {
      if (!isNaN(parseInt(n))) {
        console.log(this.movesLog[n - 1]);
      }
    },
    gameMove: function () {
      var answer = prompt(this.userName + ', ваш ход? (exit - выход)');
      this.movesLog.push([this.place + " - " + answer]); //лог действий пользователя
      console.log('\t' + this.movesLog[this.movesLog.length - 1]);

      for (var prop in this.movesLog) {
        console.log('\t', prop, ' : ', this.movesLog[prop]);
      }

      if (answer == 'exit') {
        console.log('exit');
        this.gameStarted = false;
        return;
      }
      switch (this.place) {
        case 'start':
          if (answer == 'left') {
            alert(this.userName + ', слева вы видите дерево (варианты: right, enter)');
          } else if (answer == 'enter') {
            alert('входим в дом');
            this.place = 'houseEntrance';
          }
          break;

        case 'houseEntrance':
          if (answer == 'left') {
            alert(this.userName + ', слева видим лестницу (варианты: right, straight, up)');
          } else if (answer == 'straight') {
            alert('идем вперед');
            this.place = 'houseFirstFloorCenter';
          }
          break;

        default:
          alert(this.userName + ', вы выбрали неизвестное действие!');
      }
    },
    gameStart: function () {
      var answer = prompt('ваше имя? (exit - выход)');
      if (answer == 'exit') {
        console.log('exit');
        this.gameStarted = false;
        return;
      } else {
        this.userName = answer;
        this.gameStarted = true;
      }
    },
  };

  game.gameStart();

  while (game.gameStarted) {
    game.gameMove();
  }
  game.gameLog(2);
}

//На базе игры, созданной на уроке,
// реализовать игру «Кто хочет стать миллионером?»

class Game {
  constructor(nameGame) {
    this.nameGame = nameGame;
  }

  get SummMoney() {
    return this.summMoney;
  }

  set SummMoney(value) {
    this.summMoney = value;
  }

  get GameStarted() {
    return this.gameStarted;
  }

  set GameStarted(value) {
    this.gameStarted = value;
  }

  get UserName() {
    return this.userName;
  }

  set UserName(value) {
    this.userName = value;
  }

  gamePlay() {

    var min = 0;
    var max = listQuestion.length;
    var numberQuestion = Math.round(Math.random() * (max - min) + min);
    var answer = prompt(listQuestion[numberQuestion].Question + "\n" +
      listQuestion[numberQuestion].ListAnswers[0] + "\n" +
      listQuestion[numberQuestion].ListAnswers[1] + "\n" +
      listQuestion[numberQuestion].ListAnswers[2] + "\n" +
      listQuestion[numberQuestion].ListAnswers[2] + "\n");
    if (answer == "exit") {
      this.GameStarted = false;
      alert("У вас на счету $" + this.SummMoney);
      return;
    }
    if (answer == listQuestion[numberQuestion].Answer) {
      if (typeof this.SummMoney === 'undefined') {
        this.SummMoney = parseInt(listQuestion[numberQuestion].Money);
      } else {
        this.SummMoney += parseInt(listQuestion[numberQuestion].Money);
      }

      alert("Зеленых на счету " + "$" + this.SummMoney);
    }
  }
  getRandomArbitrary(min, max) {
    return;
  }
  gameStart() {
    var answer = prompt("ваше имя? (exit - выход)");
    if (answer == 'exit') {
      console.log('exit');
      this.GameStarted = false;
    } else {
      this.GameStarted = true;
      this.UserName = answer;
    }
  }
}


class Anwers {
  get Question() {
    return this.question;
  }
  set Question(value) {
    this.question = value;
  }
  get Answer() { //ответ
    return this.answer[0];
  }
  set Answer(value) { //ответ
    this.answer = value;
  }
  get ListAnswers() {
    return this.listAnswers;
  }
  set ListAnswers(list) {
    this.listAnswers = list;
  }
  get Money() {
    return this.money;
  }
  set Money(value) {
    this.money = value;
  }
  get AnswerIndex() {
    return this.answerIndex;
  }
  set AnswerIndex(value) {
    this.answerIndex = value;
  }
  findAnswerIndex() {
    for (var index = 0; index < this.listAnswers.length; index++) {
      console.log(this.Answer);
      if (this.listAnswers[index].split(" ")[0][0] == this.Answer) {
        this.AnswerIndex = index;
      }
    }
  }
}


var listQuestion = []; //Список вопросов с ответами и правильным ответом

var openFile = function (event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function () {
    var text = reader.result;
    Split(text);
    millioner();
  };
  reader.readAsText(input.files[0]);
};


function Split(text) {
  var questions = text.split("\n/");
  for (var index = 0; index < questions.length; index++) { //проходим каждый вопрос

    var list = questions[index].trim().split("\n");

    var tmpList = []; //массив для ответов
    var answers = new Anwers();
    answers.Question = list[0];
    answers.Money = list[6].split(" ")[1]; //написал тут говнокод, не понимаю почему pop выдает undefined
    answers.Answer = list[5].split(" ")[1];
    for (var indexList = 1; indexList <= 4; indexList++) {
      tmpList.push(list[indexList]);
    }
    answers.ListAnswers = tmpList;
    listQuestion.push(answers);
    answers.findAnswerIndex();
  }

}

function millioner() {

  var game = new Game("Millioner");
  game.gameStart();
  while (game.GameStarted) {
    game.gamePlay();
  }
}