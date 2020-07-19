var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  car  = createSprite(50,200,40,20);
  wall = createSprite(1500,200,60,height/2);
  speed = random(55,90);
  weight = random(400,1500);
  car.shapeColor = "white";
  wall.shapeColor = "white";
}

function draw() {
  background(0); 
  
  car.depth = wall.depth;
  car.depth = car.depth+1;
  
  car.velocityX = speed;
  if (car.x-wall.x < wall.width/2+car.width/2 && 
    wall.x-car.x < wall.width/2+car.width/2){
    car.velocityX = 0;
    deformation = 0.5*weight*speed*speed/22500
    if (deformation>180){
      car.shapeColor = "red";
    }
    if (deformation>100 && deformation<180){
      car.shapeColor = "yellow"
    }
    if (deformation<100){
      car.shapeColor = "green";
    }
    }
  drawSprites();
}