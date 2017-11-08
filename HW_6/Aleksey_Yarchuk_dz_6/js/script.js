//1. Доработать функцию замены картинки в галерее таким образом,
// чтобы она проверяла наличие картинки по указанному в src адресу.
//<img src="картинка1.jpg" onerror="this.src='картинка2.jpg'" />

var imageList = "";
var imageInBigImageDiv = "";

var BIG_IMAGES_FOLDER = 'img/gallery/';

function showBigImage(arg) {
  clearBigImage();

  var imgName = arg.target.className.split(' ')[1];
  var bigImageName = BIG_IMAGES_FOLDER + imgName + '.jpg';

  var bigImage = document.createElement('img');
  bigImage.src = bigImageName;
  bigImage.style.height = '350px';
  bigImage.style.width = '350px';
  //Проверка для задания!!
  bigImage.onerror = function () {
    var flag = confirm("Проверьте большую картинку в галерее");
    if (flag == true || flag == false) {
      clearBigImage();
    }
  };

  createSlider();
  //Добавляем картинку перед стрелкой направо
  var sourceDiv = document.getElementsByClassName('big-image__Swith')[1];
  var parentDiv = sourceDiv.parentNode;
  parentDiv.insertBefore(bigImage, sourceDiv);

  //прописываем стили для класса Big-image
  var bigImageNameDiv = document.getElementsByClassName("big-image")[0];
  bigImageNameDiv.style.display = "flex";
  bigImageNameDiv.style.alignItems = "center";
  bigImageNameDiv.style.marginBottom = "20px"

  imageInBigImageDiv = document.querySelector(".big-image > img");
}



function clearBigImage() {
  let bigImageDiv = document.getElementsByClassName("big-image")[0];
  bigImageDiv.innerHTML = "";
}


function init() {

  var images = document.getElementsByClassName("image");
  for (var i = 0, max_i = images.length; i < max_i; i++) {
    //console.log(images[i]);
    images[i].addEventListener("click", showBigImage);
    images[i].addEventListener("click", addToBacket);
  }
  imageList = images;
}

window.onload = init;

///Реализовать модуль корзины.
// Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить»,
// при нажатии на которую происходит добавление имени и цены товара в блок корзины. 
//Корзина должна уметь считать общую сумму заказа.

var backet = [];


function addToBacket(product) {
  let arrSrc = product.target.src.split("/");
  let productName = arrSrc[arrSrc.length - 1].split(".")[0];
  addProductToBacket(productName);
  printToBacket();
}


function addProductToBacket(productName) {
  let findResult = findProductInBacket(productName);

  if (typeof findResult === "object") {
    findResult.count += 1;
  } else if (typeof !findResult === "boolean") {
    var product = { name: "", count: 1 };
    product.name = productName;
    backet.push(product);
  }
}


function findProductInBacket(productName) {
  for (var prod = 0; prod < backet.length; prod++) {
    if (backet[prod].name == productName) {
      return backet[prod];
    }
  }
  return false;
}

function printToBacket() {
  var arrProducts = "";
  for (let counterProduct = 0; counterProduct < backet.length; counterProduct++) {
    arrProducts = arrProducts + " " + backet[counterProduct].name + " " + backet[counterProduct].count + "\n";
  }

  if (document.querySelector(".backet > textarea") == null) {
    var backetTextArea = document.createElement("textarea");
    backetTextArea.className = "backet__textarea";
    backetTextArea.innerText = arrProducts;

    var backetDiv = document.getElementsByClassName("backet")[0];
    backetDiv.appendChild(backetTextArea);
  } else {
    var textArea = document.getElementsByClassName("backet__textarea")[0];
    textArea.innerText = arrProducts;
  }

}

//	* Добавить в галерею функцию перехода к следующему изображению.
// По сторонам от большой картинки должны быть стрелки “вперед” и “назад”, 
// по нажатию на которые происходит замена изображения на следующее или предыдущее. 


function createSlider() {
  var bigImage = document.getElementsByClassName("big-image")[0];

  var leftSwitch = createSwitch("img/left.png"); //закинуть картинки
  var rightSwitch = createSwitch("img/right.png");

  rightSwitch.addEventListener("click", pressRight);
  leftSwitch.addEventListener("click", pressLeft);

  bigImage.appendChild(leftSwitch);
  var bigImageSwitch = document.getElementsByClassName("big-image")[0];
  bigImageSwitch.appendChild(rightSwitch);

}

function createSwitch(path) {
  var tswitch = document.createElement("div");
  tswitch.className = "big-image__Swith";
  var switchImage = document.createElement("img");
  switchImage.src = path;
  tswitch.appendChild(switchImage);
  return tswitch;
}
//прочитать количество img в библиотеке
//найти в данном теге big-image тег img взять с этого тега src, сравнить его с img src в библиотеке,
//найти его номер и доделать функции влево и српво с undefined в массиве

function pressRight(arg) {
  var currentIndexImage = findIndexImageInList();
  var nextIndexImage = currentIndexImage + 1;

  if (nextIndexImage == imageList.length) { //если следующего нету, берем первый
    showBigImages(0); //ставим первый
  } else {
    showBigImages(nextIndexImage);
  }
}

function pressLeft() {
  var currentIndexImage = findIndexImageInList();
  var previousIndexImage = currentIndexImage - 1;

  if (previousIndexImage == -1) {
    showBigImages(imageList.length - 1);
  } else {
    showBigImages(previousIndexImage);
  }
}

function findIndexImageInList() {
  var bigImageArr = document.querySelector(".big-image > img").src.split("/");
  var bigImage = bigImageArr[bigImageArr.length - 1].split(".")[0];

  for (var index = 0; index < imageList.length; index++) {
    var pathArr = imageList[index].src.split("/");
    var nameImg = pathArr[pathArr.length - 1].split(".")[0];

    if (nameImg == bigImage) {
      return index;
    }
  }
}

function showBigImages(index) {
  clearBigImage();
  console.log(imageList[index]);
  var imgName = imageList[index].className.split(' ')[1];
  var bigImageName = BIG_IMAGES_FOLDER + imgName + '.jpg';

  var bigImage = document.createElement('img');
  bigImage.src = bigImageName;
  bigImage.style.height = '350px';
  bigImage.style.width = '350px';
  //Проверка для задания!!
  bigImage.onerror = function () {
    var flag = confirm("Проверьте большую картинку в галерее");
    if (flag == true || flag == false) {
      clearBigImage();
    }
  };

  createSlider();
  
  //Добавляем картинку перед стрелкой направо
  var sourceDiv = document.getElementsByClassName('big-image__Swith')[1];
  var parentDiv = sourceDiv.parentNode;
  parentDiv.insertBefore(bigImage, sourceDiv);

  //прописываем стили для класса Big-image
  var bigImageNameDiv = document.getElementsByClassName("big-image")[0];
  bigImageNameDiv.style.display = "flex";
  bigImageNameDiv.style.alignItems = "center";
  bigImageNameDiv.style.marginBottom = "20px"
}