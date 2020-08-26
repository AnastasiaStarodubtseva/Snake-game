const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d"); //context

const ground = new Image();
ground.src = "./img/ground.png";

const foodImg = new Image();
foodImg.src = "./img/food.png";

let box = 32;

let score = 0;

let food = {
  x: Math.floor((Math.random() * 17 + 1)) * box, //Math.random() возвращает случайное число 0-1  Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого
  y: Math.floor((Math.random() * 15 + 3)) * box
};

let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box
}; //позиция где изначально будет находится змейка

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
  if(event.keyCode == 37 && dir != "right")
    dir = "left";
  else if(event.keyCode == 38 && dir != "down")
    dir = "up";
  else if(event.keyCode == 39 && dir != "left")
    dir = "right";
  else if(event.keyCode == 40 && dir != "up")
    dir = "down";
}

function drawGame() {
  ctx.drawImage(ground, 0, 0); //координаты по X и Y
  ctx.drawImage(foodImg, food.x, food.y);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = "green"; //fillStyle устанавливает или возвращает цвет, градиент или шаблон, используемый для заливки графического объекта
    ctx.fillRect(snake[i].x, snake[i].y, box, box); //fillRect() рисует "залитый" прямоугольник
  }
  ctx.fillStyle = "white";
  ctx.font = "50px Arial";
  ctx.fillText(score, box * 2.5, box * 1.7); //позиции текста box (x, y)

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  snake.pop(); // .pop удаляет последний элемент в массиве

  if(dir == "left") snakeX -= box;
  if(dir == "right") snakeX += box;
  if(dir == "up") snakeY -= box;
  if(dir == "down") snakeY -= box;
}

let game = setInterval(drawGame, 100); //функция drawGame будет вызываться каждые 100милисекунд