
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
  
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  FoodGroup=new Group();
  obstacleGroup=new Group();
}



function setup() {
 createCanvas=(600,600);
  
  monkey=createSprite(80,350,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;

 
}


function draw() {
background("green");
  if(keyDown("space")){
    monkey.velocityY=-10
  }
  monkey.velocityY=monkey.velocityY+0.5;
  
   ground.x=ground.width/2;
  
  monkey.collide(ground);
  textSize=20;
  stroke("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time="+survivalTime,150,15);

  
food();
    obstacles();
  drawSprites();
}
function food(){
  if (frameCount%80===0){
  banana=createSprite(200,200,10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4
  banana.setLifetime=50;
  banana.y=Math.round(random(120,200));
   FoodGroup.add(banana);
  }
}
function obstacles(){
  if (frameCount%300===0){
  obstacle=createSprite(250,330,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.setLifetime=50;
  obstacle.velocityX=-4;
  obstacleGroup.add(obstacle);
}
}



