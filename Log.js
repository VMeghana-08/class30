class Log extends BaseClass{
    constructor(x,y,height,angle){
        super(x,y,20,height)
        this.image=loadImage("sprites/wood2.png")
      
        Matter.Body.setAngle(this.body,angle)
        Matter.Body.set(this.body,this.friction,'1.5')
        console.log(this.body.friction)

    }
    display(){
       super.display();
    }
}





