class SlingShoot{
constructor(bodyA,pointB){
    var options={bodyA:bodyA,
                pointB:pointB,
    stiffness:0.4,
    length:10

    

    }
    this.pointB=pointB
    this.Sling=Matter.Constraint.create(options);
    World.add(world,this.Sling)

}

display(){
    var pointA =this.Sling.bodyA.position;
   var pointB=this.pointB;

   strokeWeight(4);
   line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}