function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  fill(100,128);
  noStroke();
  drawSq(width/2,height/2,width);
  
}
function drawSq(posX, posY,side){
if(side>=3){
  rect (posX, posY, side, side);
  
  
  drawSq(posX-side/3, posY-side/3, side/3);
drawSq(posX+side/3, posY+side/3, side/3);
drawSq(posX+side/3, posY-side/3, side/3);
drawSq(posX-side/3, posY+side/3, side/3);
drawSq(posX-side/3, posY, side/3);
  drawSq(posX, posY+side/3, side/3);
drawSq(posX+side/3, posY, side/3);
  drawSq(posX, posY-side/3, side/3);}

}