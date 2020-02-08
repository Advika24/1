let p1 = [];
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
  for( let i = 0; i< p1.length ; i++){
  p1[i].display();
  p1[i].update();}
  

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


    strokeWeight(1);
    ellipse(this.posX, this.posY, this.rad);
    noFill();
    if (mouseIsPressed) {
      stroke(255 - c);
    } else {
      stroke(c);
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

function mouseClicked() {
  let p = new Particle();
  p.posX = mouseX;
  p.posY = mouseY;
  p1.push(p);
}