var rec1, rec2, rec3, movingRect;

function setup() {
  createCanvas(1200,800);
  rec1 = createSprite(300, 100, 50, 80);
  rec1.shapeColor = "green";

  rec2 = createSprite(100, 100, 50, 80);
  rec2.shapeColor = "green";
  rec2.veolcityY = +5;

  rec3 = createSprite(200,100,50,80);
  rec3.shapeColor = "green";
  rec3.velocityY = +5;
  
  movingRect = createSprite(200, 800,80,30);
  movingRect.shapeColor = "green";


  movingRect.velocityY = -5;
  rec1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  BounceOff(movingRect, rec3);
  
  drawSprites();
}

function BounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 +object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}