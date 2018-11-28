//Brendan Smith


function Food() {
  this.vec = randomVector().mult(scl);

  this.x = function() {
    return this.vec.x;
  }

  this.y = function() {
    return this.vec.y;
  }
// draws the food object onto the canvas
  this.draw = function() {
    // fills the object with red color
    fill(255, 5, 25);
    rect(this.x(), this.y(), scl, scl);
  }
// splices the food when eaten; scale established
  this.eaten = function() {
    this.vec = randomVector().mult(scl);
  }
}
