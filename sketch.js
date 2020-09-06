var fix,move,hi,hello

function setup() {
  createCanvas(1200,400);
  fix = createSprite(100,200,50,80);
  fix.shapeColor = "green";
  move = createSprite(100,300,80,30);
  move.shapeColor = "green";
  hi = createSprite(400,100,60,20)
  hi.shapeColor = "green"
  hello = createSprite(400,300,40,40);
  hello.shapeColor = "green"
  //move.velocityX = -2
  //fix.velocityX = 2
  move.velocityY = -2
  fix.velocityY = 2

  
}

function draw() {
  background(255,255,255); 
  
  if(isTouching(move,fix)){
    bounceOff(move,fix)
  }
        
    
    
    
    //else{
      //hi.shapeColor = "green"
      //hello.shapeColor = "green"
   // }
    //(move.y-fix.y < fix.height/2+move.height/2&&
    //fix.y-move.y < fix.height/2+move.height/2){
    //move.shapeColor = "red";
   // fix.shapeColor = "red";
  //}else{}
    //move.shapeColor = "green"
    //fix.shapeColor =  "green";
 // }
  
  //move.y = World.mouseY
  //move.x = World.mouseX
 
  //fix.debug = true;
  //move.debug = true;
  drawSprites();
  //isTouching();
  //bounceOff()
}






