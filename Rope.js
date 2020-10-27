class Rope{
    constructor(body1,body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var option = {
            bodyA:body1,    
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
           /* stiffness:0.04,
            length:10*/
        }
    this.pointB = PointB;
        this.rope = Constraint.create(option);
        World.add(world,this.rope);
    }  
    /*fly(){
        this.sling.bodyA = null;
    }*/
    display(){

        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x
        var Anchor2Y=PointB.y

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
       
        }
}
