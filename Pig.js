class Pig extends BaseClass{
    constructor(x,y){
        super(x,y,50,50)
        this.image=loadImage("sprites/enemy.png")
        this.visibility=255
      /*  var options={
         restitution:0.8,
         friction:0.3,
         density:1
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        
        this.width=50;
        this.height=50;
       // Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);
        */

    }
    display(){
       // console.log(this.body.speed)
        if(this.body.speed<3){
            super.display();  
        }
        else{
            World.remove(world,this.body)
            push ()
            this.visibility=this.visibility-5
            tint (255,this.visibility)
            image(this.image,this.body.position.x,this.body.position.y,50,50)
            pop ()

        }
       
       /* var pos=this.body.position
        var angle=this.body.angle
        push ()
        translate(pos.x,pos.y)
        rotate (angle)
        rectMode(CENTER)
        fill (0,255,0)
        rect(0,0,this.width,this.height)
        pop ()*/
    }
}





