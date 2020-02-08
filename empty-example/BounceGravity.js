let p1 =[];
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i< 100; i++){
  p1[i]= new Particle();}
}

function draw() {
  for( let i = 0; i< p1.length ; i++){
  p1[i].display();
  p1[i].update();}
}

class Particle{
  constructor(){
   this.posX=random(0,width);
    this.posY=random(0,height);
    this.velX=random();
    this.velY=random();
    this.accX=0.5;
    this.accY=0;
  }
  
  display(){
    //rect(this.posX, this.posY, 10,10);
   fill = (0);
    stroke(125);
    strokeWeight(10);
    textSize(18);
    text( "BOUNCE", this.posX, this.posY);
  }
  
  update(){
  this.posX+= this.velX;
    this.posY+=this.velY;
     if (this.posX>width || this.posX<0) {
      this.velX=-this.velX;}
    if (this.posY>height) {
      this.posY=0;}
         if(this.posY<0){
      this.posY= height;}
    this.velX+=this.accX;
     this.velY+=this.accY;
      
      
  }
}

function mouseClicked(){
let p= new Particle();
  p.posX=mouseX;
  p.posY=mouseY;
  p1.push(p);
}