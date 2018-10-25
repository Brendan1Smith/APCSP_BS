/*
**  Ball Constructor Function
**  yoName
**  Aug 20, 2018
*/

function Ball(locX, locY, rad, col){
  // Instance variables
   this.locX = locX;
   this.locY = locY;
   this.speedX = random(-3.0, 3.0);
   this.speedY = random(-3.0, 3.0);
   this.rad = rad;
   this.col = col;
  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
