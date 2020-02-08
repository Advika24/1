function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);
  
  let hr= hour();
  let min= minute();
  let sec= second();
  
  

  stroke(255, 100, 150);
  strokeWeight(10);
  fill(255);
  let end = map (sec, 0, 60, 0, -360);
  arc (200, 200, 300, 300, 0, end);
  
}