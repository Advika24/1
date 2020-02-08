let p, q, c = 0,
  v = 1;

function setup() {
  createCanvas(400, 400);
  p = new Particle();
  q = new Particle();
}

function draw() {

  p.display();
  q.display();
  p.update();
  q.update();

}

class Particle {
  constructor() {
    this.posX = (random(0, width));
    this.posY = (random(0, height));
    this.rad = (random(0, 50));
    this.velX = random(0, 5);
    this.velY = random(0, 5);
    this.accX = 0;
    this.accY = 0.05;
  }
  display() {
    
  

    ellipse(this.posX, this.posY, this.rad);
    noStroke();
    if (mouseIsPressed) {
      fill(255 - c);
    } else {
      fill(c);
    }
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
  update() {

    this.posX += this.velX;
    this.posY += this.velY;
    if (this.posX > width || this.posX < 0) {
      this.velX = -this.velX;
    }
    if (this.posY > height || this.posY < 0) {
      this.velY = -this.velY;
    }
    this.velX += this.accX;
    this.velY += this.accY;
  }
}