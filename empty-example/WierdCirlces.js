function setup() {
  createCanvas(400, 400);
  for(let j = 0; j<height; j+=25)
  {
  for (let i=0; i<width; i+=25){
    let r = map(i,0, width, 2, 20);
    let q = map(j,0, height, 2, 20);
    ellipse(i,j,r,q);
  }
}
}

function draw() {
  //background(220);


}