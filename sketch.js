
var fixRec,movRec;

function setup() {
  createCanvas(800,400);
  fixRec = createSprite(400, 200, 50, 80);
  fixRec.shapeColor="yellow";
  
  movRec = createSprite(400,100,80,50);
  movRec.shapeColor="blue";
}

function draw() {
  background(0);  
  movRec.x = mouseX;
  movRec.y = mouseY;

  if(movRec.x - fixRec.x < fixRec.width/2 + movRec.width/2 && fixRec.x - movRec.x < fixRec.width/2 + movRec.width/2 && movRec.y - fixRec.y < fixRec.height/2 + movRec.height/2 && fixRec.y - movRec.y < fixRec.height/2 + movRec.height/2){
    movRec.shapeColor="red";
  } 
    else{
      movRec.shapeColor="blue";
    }
  
  drawSprites();
}