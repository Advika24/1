let r;

function setup() {
  createCanvas(600, 600);
  let r = 150;
}

function draw() {
  background(220);
  r = mouseX;
  background(220);
  noStroke();
  fill(0);
  for (let t = 0; t < 360; t = t + 2) {
    d = radians(t);
    let x = width / 2 + t * sin(d) + random(0, 15);
    let y = height / 2 + t * cos(d) + random(0, 15);
    ellipse(x, y, 5, 5);
  }
}