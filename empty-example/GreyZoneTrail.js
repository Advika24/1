function setup() {
  createCanvas(640, 480);
  c = 0
  v = 1
}

function draw() {


  strokeWeight(3);
  if (mouseIsPressed) {
    stroke(255 - c);
  } else {
    stroke(c);
  }


  if (mouseIsPressed) {
    fill(c);
  } else {
    fill(255 - c);
  }
  textSize(72);
  text('GreyZone', mouseX, mouseY);
  c = c + v
  if (c > 255) {
    v = -v;
    c = c + v;
  }
  if (c < 0) {
    v = -v;
    c = c + v;


  }
}