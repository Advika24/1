let p, v, y;

function setup() {
  createCanvas(720, 400);
p=0; 
  v=5
  y=10;
}

function draw() {
  background(220);
  rect(p,y,200,75);
  p=p+v;
  
  if (p>520)
  {
    v=-v;
   } 
 if (p<0){
 v=-v;
   y+=y;
   
}
  
}