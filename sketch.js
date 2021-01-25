var ground;
var wall1, wall2, wall3;
var plat1, plat2, plat3, plat4;
var wall4, wall5;
var button1,button2,button3;
var acid;
var arrow1, arrow2, arrow3, arrow4;
var trigger;
var gate;
var knight, walk;

function preload(){
  
}

function setup() {
  createCanvas(1820,865);

  ground = createSprite(1050,700,1600,20);
  wall1 = createSprite(250,460,20,500);
  wall2 = createSprite(400,220,300,20);
  wall3 = createSprite(540,110,20,220);

  plat1 = createSprite(600,530,250,20);
  plat2 = createSprite(850,390,250,20);
  plat3 = createSprite(710,230,250,20);

  wall4 = createSprite(1570,220,1000,20);
  wall5 = createSprite(1070,115,20,230);

  button1 = createSprite(560,110, 20,50);
  button2 = createSprite(1810,105,20,150);
  button3 = createSprite(320,205,70,20);

  plat4 = createSprite(100,850,150,20);

  acid = createSprite(1000,720,400,20);

  arrow1 = createSprite(1500,800,5,100);
  arrow2 = createSprite(1520,800,5,100);
  arrow3 = createSprite(1540,800,5,100);
  arrow4 = createSprite(1560,800,5,100);

  trigger = createSprite(1400,690,10,10);

  gate = createSprite(1810,550,20,300);

  knight = createSprite(350,630,50,100);



}

function draw() {
  background(0); 
  
  knight.collide(ground);
  knight.collide(plat1);
  knight.collide(plat2);
  knight.collide(plat3);
  knight.collide(plat4);

  knight.collide(wall1);
  knight.collide(wall2);
  knight.collide(wall3);
  knight.collide(wall4);

  
  if(keyDown("space")){
    knight.velocityY = -12;
  }

  knight.velocityY = knight.velocityY + 0.8;

  if(keyDown("right")){
    knight.x = knight.x+12;
  }

  if(keyDown("left")){
    knight.x = knight.x-12;
  }

  if(knight.isTouching(button1)){
    wall5.visible = false;
  }
  if(knight.isTouching(button2)){
    ground.y = ground.y  + 3;
  }
  if(knight.x === 107 && knight.y ===  790){
    plat4.y = plat4.y - 3;
  }

  console.log(knight.x, knight.y);
  drawSprites();
}