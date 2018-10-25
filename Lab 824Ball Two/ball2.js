/
**  Ball Constructor Function
**  Brendan Smith
**  Aug 20, 2018
*/

function Ball(location, velocity, radius, col){
    this.loc = location;
    this.vel = velocity;
    this.rad = radius;
    this.col = col;
}
     this.update = function(){
       this.loc.x = this.loc.x - this.vel.x
       this.checkEdges();
       this.render();
    }

     this.checkEdges = function(){
       if(this.loc.x < 0) this.vel.x = -this.vel.x;
       if(this.loc.x > width) this.vel.x = -this.vel.x;
       if(this.loc.y < 0) this.vel.y = -this.vel.y;
       if(this.loc.y > height) this.vel.y = -this.vel.y;
     }

     this.render = function(){
        fill(this.col);
        ellipse(this.locX, this.locY, rad, rad);
     }

  }
