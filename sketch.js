var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,800);
  
speed = random(45,80)
weight = random(400,1500);
car = createSprite(50,200,50,50);
wall = createSprite(900,200,60,height/2)
wall.shapeColor = "white";
deformation = 0.5*weight*speed*speed/22500;
}

function draw() {
  background(0,0,255);  
  drawSprites();
  car.velocityX = speed;



  if(car.isTouching(wall) && deformation < 170){
   car.velocityX = 0;
    car.shapeColor = "green";

  }
  
  if(car.isTouching(wall) && deformation < 180){
    car.velocityX = 0;
     car.shapeColor = "yellow";
 
   }
  if(car.isTouching(wall) && deformation > 180){
    car.velocityX = 0;
    car.shapeColor = "red";
  }


}