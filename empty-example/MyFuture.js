let x0, y0, t, step;

function setup() {
  createCanvas(600, 600);
  frameRate(1);
  colorMode(HSB);
  noStroke();
  x0 = 0;
  y0 = 0;
  z0=0;
  t = 0.05;
  step = 5;
  count= 0;

  for (let j = 0; j < height; j += step) {
    for (let i = 0; i < width; i += step) {
      let n = noise(x0, y0, z0);
      let f = map(n, 0, 1, 0, 128);
      fill(f, 64);
      ellipse(i, j, step * 2, step * 2);
      x0 += t;
    }
    y0 += t;
    x0 = 0;
  }
  count++;
  y0=0;
  //z0+= t;
  
}

function draw() {
 // background(220);
}