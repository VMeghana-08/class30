class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
          }
        this.pointB=pointB
          this.sling = Constraint.create(options)
          this.sling1=loadImage("sprites/sling1.png")
          this.sling2=loadImage("sprites/sling2.png")
          this.sling3=loadImage("sprites/sling3.png")
          World.add(world,this.sling)
    }
attach(body){
this.sling.bodyA=body
}
fly(){
    this.sling.bodyA=null

}

    display(){
        image(this.sling1,200,20)
        image(this.sling2,172,13)
       
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position
            var pointB=this.pointB
            strokeWeight(4)
            stroke("#54270F")
            if(pointA.x<220){
                line(pointA.x-20,pointA.y+5,pointB.x-15,pointB.y+10)
                line(pointA.x-20,pointA.y+5,pointB.x+25,pointB.y+10)
                image(this.sling3,pointA.x-25,pointA.y-10,15,30)
            }
            else{
                line(pointA.x+20,pointA.y+10,pointB.x-15,pointB.y+10)
                line(pointA.x+20,pointA.y+10,pointB.x+25,pointB.y+10)
                image(this.sling3,pointA.x+25,pointA.y-5,15,30)
            }
           
        }
       

    }
}