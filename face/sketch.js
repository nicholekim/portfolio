var mic;
var vol;

function setup() {
  createCanvas(600, 600);
  background(200);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(200);
  vol = mic.getLevel();
  face();
  ears();
  crown();
  eyes();
  mouth();
}

function face() {
  noStroke();
  fill(244, 244, 181);
  ellipse(300, 300, 300, 300);
}

function ears() {
  var newVol1 = map(vol, 0, 1, 50, 200);
  ellipse(150, 300, newVol1, newVol1);
  ellipse(450, 300, newVol1, newVol1);
}

function crown() {
  fill(250, 7, 7);
  triangle(150, 250, 220, 50, 300, 250);
  triangle(225, 250, 295, 50, 375, 250);
  triangle(300, 250, 370, 50, 450, 250);
}

function eyes() {
  var newVol1 = map(vol, 0, 1, 50, 500);
  var newVol2 = map(vol, 0, 1, 20, 200);
  fill(0);
  ellipse(250, 300, newVol1, newVol1);
  ellipse(350, 300, newVol1, newVol1);
  fill(255);
  ellipse(250, 300, newVol2, newVol2);
  ellipse(350, 300, newVol2, newVol2);
}

function mouth() {
  fill(220);
  arc(300, 350, 150, 100, 0, PI);
  fill(255);
  rect(280, 350, 40, 25);
  stroke(0);
  line(300, 350, 300, 375);
}