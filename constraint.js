class constraintClass{

constructor(A,B){

var options={
bodyA:A,
bodyB:B,
length:10,
stiffness:0.5
}

this.body=Matter.Constraint.create(options);
World.add(world,this.body);
}

display(){

    strokeWeight(2);

    line(this.body.bodyA.position.x,this.body.bodyA.position.y,
        this.body.bodyB.position.x,this.body.bodyB.position.y,)

}
}  
