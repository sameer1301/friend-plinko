function Particle(x,y,r){
    var options = {
        //isStatic: true,
        shapeColor:random(0,355),
        friction: 0,
        restitution:0.2,
        density:10
    }
    x+= random(-1,1);
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world, this.body);
}

Particle.prototype.show = function(){
    fill(255,0,0);
    stroke(0,255,255);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(0,0,this.r*2);
    pop();
}