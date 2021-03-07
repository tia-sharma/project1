var cat, catWalkingImg, jerry, mouseTeasingImg, garden, backgroundImg;
var catStill, mouseStill, mouse_jerry, cat_tom;

function preload() {
catWalkingImg = loadImage("images/cat2.png","images/cat3.png");
catStill = loadImage("images/cat1.png");
mouseStill = loadImage("images/mouse1.png");
mouseTeasingImg = loadImage("images/mouse2.png","images/mouse3.png");
backgroundImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(150,300,50,50);
    garden.addImage("garden", backgroundImg);
    
    cat = createSprite(450,550,50,50);
    cat.addImage(catStill);
    cat.scale=0.1;
    cat.radius = 0.1;

    jerry = createSprite(100,550,50,50);
    jerry.addImage("mouse1", mouseStill);
    jerry.scale=0.1;
    jerry.radius = 0.1;

}

function draw() {

    background(255);
    
  keyPressed();

  if(cat.x - jerry.x < cat.width/2 - jerry.width/2 && cat.x - jerry.x < cat.width/2 + jerry.width/2 && cat.y - jerry.y < cat.height/2 + jerry.height/2 && jerry.y - cat.y < cat.height/2 + jerry.height/2){
    cat.velocityX=0;
      cat.addAnimation("catstill", catStill);
      cat.changeAnimation("catstill");
      jerry.addAnimation("mousestill", mouseStill);
      jerry.changeAnimation("mousestill");
  } 


    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catWalking" catWalkingImg);
      cat.changeAnimation("catWalking");
      jerry.addAnimation("mouseTeasing" mouseTeasingImg);
      jerry.changeAnimation("mouseTeasing");
      
  }


}
