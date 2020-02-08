let p, q;

function setup() {
  createCanvas(400, 400);
  p = new Particle();
  q = new Particle();
}

function draw() {
  background(220);
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
    this.velX = random(0,5);
    this.velY = random(0,5);
    this.accX=0;
    this.accY=0.05;
  }
  display() {
    ellipse(this.posX, this.posY, this.rad);
  }
  update() {
      this.posY += this.velY;
    this.posY += this.velY;
    if (this.posX>width || this.posX<0) {
      this.velX=-this.velX;}
    if (this.posY>width || this.posY<0) {
      this.velY=-this.velY;}
  }
}