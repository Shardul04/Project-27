
class Roof{
    constructor(x,y){
        
        this.bottomBody=Bodies.rectangle(x-50,y+50, 200, 20, {isStatic:true});
      
        this.wallthickness= 200;
        this.dustbinHight=20;
        this.DustbinWidth=200;

        World.add(world, this.bottomBody);

    }
    display(){
        var posBottom=this.bottomBody.position;

        push();
        translate(posBottom.x, posBottom.y);
        rectMode(CENTER);
        fill(280); 
        rect(0,0,this.wallthickness, this.dustbinHight);
        pop();
    }
}
