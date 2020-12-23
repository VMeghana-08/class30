class BaseClass{
    constructor(x,y,width,height){
        var options={
         restitution:0.8,
         friction:0.4,
         density:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.friction=this.body.friction
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/base.png")
       // Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);
        

    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push ()
        translate(pos.x,pos.y)
        rotate (angle)
        imageMode(CENTER)
       // stroke ("green");
       // strokeWeight(4);
       // fill (255)
        image(this.image,0,0,this.width,this.height)
        pop ()
    }
}





