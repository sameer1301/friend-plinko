function Plinko(x,y,r){
    var options = {
        isStatic: true,
        friction: 0,
        restitution:1,
        density:20
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world, this.body);
}

Plinko.prototype.show = function(){
    fill(0,0,100);
    stroke(255,0,0);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(0,0,this.r*2);
    pop();
}