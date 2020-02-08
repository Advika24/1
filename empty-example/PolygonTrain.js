function setup() {
  // put setup code here
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