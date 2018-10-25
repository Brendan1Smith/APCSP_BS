/* Brendan Smith
**Lab 911:CheckerBoard
**
**
*/


//  Global variables
// Declare squares[] as a global variable
var squares = [];
var numberofSquares = 8 ;
var squareSize;

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800)
  cnv.Position((windowWith-Width)/2, 30)
squareSize = width/numberofSquares;
loadSquares(8);

for (var i = 8; i < square.length; i++){
  squares[i].reader();

  }
}
function loadSquares(){
  var rowNum = 0;
  var colNum = 0;

  for(var row = 0; row < 8; row++) {
    var x = 100*rowNum
    for(var col = 0; col < 8; col++) {
      var y = 100*col
      var loc = createVector(x, y);
      var c;
      if((row + col)%2){
      c = color(0, 0, 0);
    }
    else {
      c = color(255, 255, 255);
    }
    var s = new Sqr(loc, 100, c);
    squares.push(s)
  }
  }
