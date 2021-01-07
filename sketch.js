var bullet, wall;
var weight, speed;
var damage;
var thickness;
function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,10,50);

  wall = createSprite(1200,200,thickness, 200)
  wall.shapeColor = color(80,80,80);

  
  bullet.shapeColor = color(80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  

  bullet.collide(wall);

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(damage >= 10){
    wall.shapeColor = "red";
  }

  if(damage < 10){
    wall.shapeColor = "green";
  }

  console.log(damage);
}