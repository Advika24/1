 

function setup() {
  createCanvas(500, 500);
  series(500);
}

function series(n) {
  ellipse(n/2, height/2, n,n);
 ellipse (width-n/2, height/2, n, n);
  
  if(n>5){
   series(n*0.5);}

  
 
}
