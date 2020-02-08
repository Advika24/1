let img;

function preload() {
  img = loadImage('8c224461eb93e9bd1df4b9a9c904d69b.jpg');
  
}

function setup() {
  img.resize(0,400);
  createCanvas(img.width, img.height);
  //image(img,0,0);
}

function draw() {
  //background(220);
 
 let x= random ( 0, width);
  let y = random (0, height);
  let col= img.get ( x,y);
  fill (col);
  noStroke();
  rect(x,y,1,100)
}

function keyPressed(){
if (key=='s'){
saveCanvas('particle.jpg');
  print('file saved');
}
}