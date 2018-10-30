/**
**  ColorBar Constructor Function
**  Brendan Smith
**  Aug 20, 2018
*/
// Defines what the color bar needs in setup
function colorbar(loc, w, h, clr, clrAvg){
  this.loc = loc;
  this.w = w;
  this.h = h;
  this.clr = clr;
  this.clrAvg = clrAvg;

  this.run = function(){
    this.render();
  }
// Fills bar with random colors
  this.render = function(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

}
