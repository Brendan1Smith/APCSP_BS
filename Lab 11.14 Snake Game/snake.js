//Brendan Smith
//AP Comp Sci Principles
//Snake Game

function Snake() {
  this.x = cols()/2 * scl;
  this.y = rows()/2 * scl;
  this.xspeed = -1;
  this.yspeed = 0;
  this.tail = [];
  this.points = 0;

  this.dir = function(x, y) {
    if (x != 0 && this.xspeed != x * (-1)
        || y != 0 && this.yspeed != y * (-1)) {
      this.xspeed = x;
      this.yspeed = y;
    }
  }

  this.eat = function(food) {
    if (this.x === food.x() && this.y === food.y()) {
      food.eaten();
      this.points++;
      this.tail.push(createVector(this.x, this.y));
    }
  }

  this.move = function() {
    // puts the last square of tail at the front of the line
    if (this.tail.length > 0) {
      var tipOfTail = this.tail.pop();
      tipOfTail.x = this.x;
      tipOfTail.y = this.y;
      this.tail.unshift(tipOfTail);
    }

    // allows the snake to move its head
    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;

    // wrap the right and bottom edges
    this.x %= width;
    this.y %= height;

    // same thing but for the top and left edges
    if (this.x < 0) {
      this.x = width - scl;
    }
    if (this.y < 0) {
      this.y = height - scl;
    }
  }
// draws the snake on the cans
  this.draw = function() {
    fill(0,255,0);
    rect(this.x, this.y, scl, scl);
    for(var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x,
          this.tail[i].y,
          scl, scl);
  }
  }
}
//end of constructor function
