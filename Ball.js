class Ball
{
  constructor(x, y, w) 
  {
    let options = {
     restituition:0.8
    };
    
    this.body = Bodies.circle(x, y, w, options);
    this.w = w;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    var angle=this.body.angle;
    push();
    ellipseMode(CENTER);
    rotate(angle);
    noStroke();
    fill(148,127,146);
    ellipse(pos.x,pos.y, this.w, this.w);
    pop();
  }
}
