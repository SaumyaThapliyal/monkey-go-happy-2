var monkey , monkey_running
var banana ,bananaImage, obstacleImage;
var FoodGroup, obstacleGroup;
var obstaclesGroup;
var bananaImage;
var bananaGroup;
var jungle
function preload(){
  
  
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(400,400);
  

  monkey = createSprite(44,200,20,200);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  obstaclesGroup = createGroup();
  
  monkey.setCollider("circle",0,0,150);
  
  bananaGroup = createGroup();

invisibleGround = createSprite(200,370,400,10);
  invisibleGround.visible = false;
  
}

function draw() {
  background(220);
  
  
    
      monkey.velocityY = monkey.velocityY+0.3;
  if(keyDown("space")&&monkey.y>=315){
    monkey.velocityY = -12;
    monkey.colid;
  }
  
  obstacles();
    bananas();
    
    if(monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach();
    }
    
    monkey.collide(invisibleGround);
 
  
  drawSprites();
  

  
 
}
function obstacles(){

   if(frameCount % 100 === 0){

             var obstacle = createSprite(400,326,10,10);
             obstacle.addImage("obstacle",obstacleImage);
             obstacle.velocityX= (-3);
             obstacle.scale = 0.5;          
             obstacle.lifetime = 500;
     
     var rand = Math.round(random(1,4));
     
     switch(rand){
      
             case 1: obstacle.scale = 0.1;
                     break;
             case 2:obstacle.scale = 0.20;
                    break;
             case 3: obstacle.scale = 0.25;
                     break;
             case 4: obstacle.scale = 0.15;
                     break;
             default:break;
     
     }
     
     obstaclesGroup.add(obstacle);
     
   }
   
  




}
function bananas(){
  if(frameCount % 80 === 0){
        var banana = createSprite(400,230,10,10);
        banana.addImage(bananaImage);
        banana.velocityX= (-4);
        banana.scale=0.03;
        bananaGroup.add(banana);
  }


}
