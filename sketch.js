var car1, car2, car3, car4;
var speed, weight, wall;

function setup() {
  createCanvas(1440,400);

  wall = createSprite(1200,200,50,height/2);
 

  speed = random(50,150);
  weight  = random(400,1500);

  car1 = createSprite(50, 200, 20, 20);

  car1.velocityX = speed;
 
}

function draw() {
  background("black");  

  deformation();
  drawSprites();
}

function deformation(){
  if (wall.x - car1.x < (car1.width - wall.width/2) ){
    car1.velocityX = 0;
    var deformation_car = 0.5 * weight * speed * speed / 22509;
    
    if (deformation_car > 180){
      car1.shapeColor = color(255,0,0);
    }
    if (deformation_car > 100 && deformation_car < 180){
      car1.shapeColor = color(230,230,0);
    }
    if (deformation_car < 100){
      car1.shapeColor = color(0,254,0);
    }
  }

}