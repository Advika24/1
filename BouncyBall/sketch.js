let p, v;

function setup() {
  createCanvas(720, 400);
p=0; 
  v=5
}

function draw() {
  background(220);
  rect(p,10,200,75)
  p=p+v;
  
  if (p>520)
  {
    v=-v;
   } 
 if (p<0){
 v=-v;
}
  
}