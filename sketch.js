
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstaceImage
var FoodGroup, obstacleGroup
var score
var invisibleground;
var BANANAS= 0
var gameState = "PLAY"
var heart;
var survivaltime
var bg
var b 
function preload(){
  
  
 
  monkeystop = loadImage("sprite_0.png");
  bananaImage = loadImage("money.png");
  obstaceImage = loadImage("obstacle.png");
  bg = loadImage("jungle image 3.jpg");
  stand = loadAnimation("run3.png")
  
 monkey_running = loadAnimation( "run2.png" ,"run3.png" , "run5.png" , "run 6.png" , "run 7.png", "run 8.png" )

 
}



function setup() {
  
  createCanvas(600,400)

  b = createSprite(300,200)
  b.addImage(bg)
  b.velocityX = -3

 invisibleground = createSprite(10,397,600,5);
  
monkey = createSprite(150,355,40,40);
  
  monkey.addAnimation("monkeyrunning", monkey_running);
  
  monkey.scale = 0.60;
  
  monkey.addAnimation("standing", stand)
  FoodGroup = new Group();
  obstacleGroup = new Group(); 
  
  
}


function draw() {
 background(0)
 invisibleground.visible = false;
   
 if(b.x < 0 ){

   b.x = 300

 }
  if(gameState === "PLAY")
  {
    survivaltime = Math.round(frameCount/40)
    BANANAS <=1;
    monkey.visible = true;
    obstacleGroup.visible = true;
    FoodGroup.visible = true;
 
   
  
  if(FoodGroup.collide(monkey))
  {
    FoodGroup.destroyEach();
    monkey.scale = monkey.scale + 0.02
    BANANAS = BANANAS + 1 
  }
    
    
   monkey.velocityY = monkey.velocityY+2
    
 
    if(keyDown("space")&& monkey.y >=240)
 {
   monkey.velocityY = -17;

 }
  
    if(obstacleGroup.isTouching(monkey)){
      gameState = "END"
    
    }
     
      
     
      
      
    
        
        
      }
   if(gameState === "END"){

   
      survivaltime = 0 
    //  BANANAS = 0
      monkey.changeAnimation("standing", stand)
      b.velocityX = 0;
      
     // monkey.scale = monkey.scale - 0.02
      obstacleGroup.destroyEach();
      
     obstacleGroup.setLifetimeEach(-1)
    
      FoodGroup.setVelocityXEach(0)
      FoodGroup.destroyEach();
     
      if(keyDown("space")){
      monkey.velocityY = 0;
      monkey.velocityX = 0;

      }
     
      
    }
    
  
    
  
      
  
    
     monkey.collide(invisibleground)
    rocks()
  bananass()
  drawSprites();
  fill("yellow")
  textSize(20);
  text("SCORE: "+ BANANAS,300,60)
  textSize(20);
  text("survival Time:"+survivaltime,300,20);

}
function rocks()
{
  if(frameCount%280 === 0)
  {
    
    obstacle = createSprite(600,385,30,30);
    obstacle.velocityX = -6;
    obstacle.lifetime = 140;
    obstacle.addImage("image",obstaceImage)
    obstacle.scale = 0.2;
 
    obstacleGroup.add(obstacle);
  }
}
  
function bananass()
  {
    if(frameCount%250=== 0){
      
      banana = createSprite(600,200,10,10);
      banana.velocityX = -3;
      banana.lifetime = 190;
      
      banana.addImage("banana",bananaImage);
      banana.scale = 0.3;
      
      FoodGroup.add(banana);
    
      
    }
    
    
    
  }
  
  
  
  

