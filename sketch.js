const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine;
var world;
var ground, player,realGround;
var cloudImage;
var platform1,platform2,platform3,platform4,platform5,platform6,platform7,platform8;
var rect1,rect2;

function preload(){
  cloudImage=loadImage('images/cloud.png')

}

function setup() {
createCanvas(displayWidth,displayHeight);
engine=Engine.create()

world=engine.world
//ground1=new Ground(displayWidth/4-20,displayHeight,displayWidth/1.7,200)
//ground2=new Ground(displayWidth-490,displayHeight,displayWidth/1.7,200)
player=new Player(400,400,70,100)
realGround=new Rectangle(displayWidth/2,displayHeight, 5000,200)
ground=new Ground(displayWidth/2,displayHeight, 5000,600)

platform1=new Platform(random(0,displayWidth),100,200,100)
platform2=new Platform(random(0,displayWidth),200,200,100)
platform3=new Platform(random(0,displayWidth),300,200,100)
platform4=new Platform(random(0,displayWidth),400,200,100)
platform5=new Platform(random(0,displayWidth),500,200,100)
platform6=new Platform(random(0,displayWidth),600,200,100)
platform7=new Platform(random(0,displayWidth),700,200,100)
platform8=new Platform(random(0,displayWidth),800,200,100)

rect1=new Rectangle(random(0,displayWidth),100,200,50)
}

function draw() {
  background(0,255,255);  
  //ground1.display()
  //ground2.display()

  if (keyIsDown(RIGHT_ARROW)) {
    Matter.Body.setVelocity(player.body, { x: 10, y: 0 })
    //pos.y=pos.y;
    }
    else if (keyIsDown(LEFT_ARROW)) {
      Matter.Body.setVelocity(player.body, { x: -10, y: 0 })
      //pos.y=pos.y;
    }
    else if (keyIsDown(UP_ARROW)) {
      Matter.Body.setVelocity(player.body, { x: 0, y: -10 })
      //pos.y=pos.y;
    } 

    platform1.body.position.x=platform1.body.position.x+2;
    platform2.body.position.x=platform2.body.position.x-2;
    platform3.body.position.x=platform3.body.position.x+2;
    platform4.body.position.x=platform4.body.position.x-2;
    platform5.body.position.x=platform5.body.position.x+2;
    platform6.body.position.x=platform6.body.position.x-2;
    platform7.body.position.x=platform7.body.position.x+2;
    platform8.body.position.x=platform8.body.position.x-2;

    rect1.body.position.x=platform8.body.position.x;
    rect1.body.position.y=platform8.body.position.y;


if (platform1.body.position.x>displayWidth+100){
  platform1.body.position.x=-100
}

if (platform3.body.position.x>displayWidth+100){
  platform3.body.position.x=-100
}

if (platform5.body.position.x>displayWidth+100){
  platform5.body.position.x=-100
}

if (platform7.body.position.x>displayWidth+100){
  platform7.body.position.x=-100
}
//other side
if (platform2.body.position.x<-100){
  platform2.body.position.x=displayWidth+100;
}

if (platform4.body.position.x<-100){
  platform4.body.position.x=displayWidth+100;
}

if (platform6.body.position.x<-100){
  platform6.body.position.x=displayWidth+100;
}

if (platform8.body.position.x<-100){
  platform8.body.position.x=displayWidth+100;
}
  player.display()

  platform1.display()
  platform2.display()
  platform3.display()
  platform4.display()
  platform5.display()
  platform6.display()
  platform7.display()
  platform8.display()

rect1.display()

realGround.display()
ground.display()


if(frameCount%100==0){ 
   cloudSpawn()
}
//Matter.SAT.collides(player.body, platforms.body)

  Engine.update(engine)
  drawSprites();
}



function cloudSpawn(){
var clouds=createSprite(-20,random(displayHeight/2,0),20,20);
clouds.addImage('cloudImage',cloudImage)
clouds.scale=0.5;
clouds.velocity.x=2;
}