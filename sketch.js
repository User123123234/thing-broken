const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine;
var world;
var ground1,ground2, player,realGround;
var cloudImage;
var platforms;

function preload(){
  cloudImage=loadImage('images/cloud.png')

}

function setup() {
createCanvas(displayWidth,displayHeight);
engine=Engine.create()

world=engine.world
//ground1=new Ground(displayWidth/4-20,displayHeight,displayWidth/1.7,200)
//ground2=new Ground(displayWidth-490,displayHeight,displayWidth/1.7,200)
player=new Rectangle2(400,400,70,100)
realGround=new Rectangle(displayWidth/2,displayHeight, 5000,200)

platforms=new Platform(900,600,200,100)

}

function draw() {
  background(0,255,255);  
  //ground1.display()
  //ground2.display()

  if (keyIsDown(RIGHT_ARROW)) {
    player.body.position.x=player.body.position.x+5;
    //pos.y=pos.y;
    }
    else if (keyIsDown(LEFT_ARROW)) {
      player.body.position.x=player.body.position.x-5;
      //pos.y=pos.y;
    }
    else if (keyIsDown(UP_ARROW)) {
      player.body.position.y=player.body.position.y-5;
      //pos.y=pos.y;
    }

  player.display()
platforms.display()
realGround.display()
if(frameCount%100==0){ 
   cloudSpawn()
}
Matter.SAT.collides(player.body, platforms.body)



  Engine.update(engine)
  drawSprites();
}



function cloudSpawn(){
var clouds=createSprite(-20,random(displayHeight/2,0),20,20);
clouds.addImage('cloudImage',cloudImage)
clouds.scale=0.5;
clouds.velocity.x=2;
}