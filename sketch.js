//Brendan Smith
//AP Comp Sci Principles
//Snake Game

//global variables
var w = 20;
var cols, rows;
var snake;
var food;
var score = 20;

function setup() {
//set up code
var cnv = createCanvas(800, 800);
cols = width/w;
rows = height/w;
cnv.position((windowWidth-width/2, height/2), CreateVector(1, 0));
}
// draw function, snake.run() food.run(), if tangled new Game
function draw() {
snake.run(),


}
// adjust snake, velocity
function keyPressed(){
text(keyCode, 50, 50);

if(keyCode === UP_ARROW){
  snake.vel = createVector(0, -1)
  }
}
