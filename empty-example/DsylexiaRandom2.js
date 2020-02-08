function setup() {
  createCanvas(600, 600);
  //background(220);
  colorMode(HSB);

}

function draw() {
  noStroke();

  if (mouseIsPressed) {
    fill(255);
    stroke(random(10, 200), 50, random(20, 250));
    strokeWeight(5);
    ellipse(mouseX, mouseY, 20, 20);
  } else {
    fill(random(10, 200), 50, random(20, 250));
    ellipse(mouseX, mouseY, mouseX, mouseY);
  }
}

function keyPressed() {
  if (key == s) {
    ellipse(mouseX, mouseY, mouseX, mouseY);
    fill(255);
  }






}