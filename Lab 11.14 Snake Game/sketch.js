//Brendan Smith
//AP Comp Sci Principles
//Snake Game

//  Global variables
var scl = 20;
var snake;
var food;
var score = 0;

function setup() {
  createCanvas(800, 800);
  snake = new Snake();
  food  = new Food();
  frameRate(17);
}
// draw function
function draw() {
  background(25,50,225);

  text("your score " + score, 380, 50)
  noStroke ();
  snake.eat(food);
  snake.move();
  snake.draw();
  food.draw();
  Score();
}
//score
function Score(){
if (score > 3)
  fill(255,0,5);
  text("YOU WILL LOOSE!", 380, 40);
}

// Key Pressed is a function that allows the player to move the snake
function keyPressed() {
  //uses w, a, s, d keys to move instead of arrows
  if (keyCode === 87) {
    snake.dir(0, -1);w
  } else if (keyCode === 83) {
    snake.dir(0, 1);a
  } else if (keyCode === 68) {
    snake.dir(1, 0);s
  } else if (keyCode === 65) {
    snake.dir(-1, 0);d
  }
}
// snake navigates by established columns and rows on the canvas
function cols() {
  return floor(width / scl);
}

function rows() {
  return floor(height / scl);
}

function randomVector() {
  return createVector(floor(random(cols())), floor(random(rows())));
}
