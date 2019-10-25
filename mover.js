var Mover = function(){
  this.x= 100/1;
  this.y = 100/1;
  
};

Mover.prototype.update = function(){
    this.x+=random(-3, 3);
    this.y +=random( -3, 3);
};

Mover.prototype.show = function(){
   
    fill(random(255)%100,random(255)%10,random(40)%10);
    noStroke();
     ellipse (this.x, this.y,20,20);
     ellipse(this.x, this.y, 10, 10);
 
};
