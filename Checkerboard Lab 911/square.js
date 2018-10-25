Brendan Smith

/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/

//  Add perameters to your constructor function
function Sqr(loc, vel, width, color){
  //  Add instance variables to your constructor Function
  //What does a square need to know about itself??
  this.loc = location;
  this.width = width;
  this.col = color;

  
  this.run = function(){
    this.render = function(){

      fill(this.col);
      square(this.loc.x, ths.loc.y, this.w, this.w)
    }


  }//  End of Square constructor function
