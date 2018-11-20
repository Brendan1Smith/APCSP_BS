//Brendan Smith
//AP Comp Sci Principles
//Snake Game

function Snake(loc, vel){
  this.loc = loc;//vector the location of the head
  this.vel = vel;//director=direction of the movement

//run function, update and render
  this.run = function(){
    this.update();
    this.render();
  }
// update function, velocity, header, height
this.update = function(){
  this.loc.add(this.vel);
  this.loc.x = constrain(this.loc.x, 0, width-w);
  this.loc.y = constrain(this.loc.y, 0, width-w);
}
// render function, global var w + header - height
this.render = function(){
  fill(0,255,0) // green color of snake
  rect(this.loc.x, this.loc.y, w, w)
}





}//end of constructor function
