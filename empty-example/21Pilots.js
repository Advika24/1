let p = 0,
  v = 1;
let song;

function preload(){
 soundFormats("mp3");
  song = loadSound("Twenty_One_Pilots_--ringtone-1876461.mp3");
}
function setup() {
 
  createCanvas(720, 400)

}

function draw() {
  background(220);
  rect(p, 10, 200, 75);
  p = p + v;

  if (p >=520) {
    v = -v;
    song.play();
  }
  if (p <= 0) {
    v = -v;
    song.play();}


  
}
function mouseClicked(){
song.play();


}