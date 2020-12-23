const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;
var box1,box2,ground
function preload(){
  bg=loadImage("sprites/bg.png")
}

function setup() {
  createCanvas(1200,400);

  engine=Engine.create();
  world=engine.world;

  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  ground=new Ground(width/2,height,width,40);
  platform=new Ground(150,300,300,170);
  console.log(box2.body.angle)
  pig1=new Pig(810,350);
  log1=new Log(810,260,300,PI/2)

  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  pig2=new Pig(810,220);
  log2=new Log(810,180,300,PI/2)

  box5=new Box(810,160,70,70);
  log3=new Log(760,120,150,PI/7)
  log4=new Log(870,120,150,-PI/7)

 // constrainedLog = new Log(100,200,100,PI/2)

  bird=new Bird(200,40);
  slingshot=new Slingshot(bird.body,{x:200,y:40})

  
}

function draw() {

  background(bg);
  Engine.update(engine)

box1.display(); 
box2.display();
ground.display();
pig1.display();
log1.display();
box3.display(); 
box4.display();
pig2.display();
log2.display();
log3.display();
box5.display();
log4.display();
platform.display();
 bird.display();

 //constrainedLog.display();
 slingshot.display();
 }
 function mouseDragged(){
   Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
 }
 function mouseReleased(){
   slingshot.fly()
 }
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(bird.body)
  }
}