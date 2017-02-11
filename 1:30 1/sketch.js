function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);
}

var circleR = 255;
var circleG = 255;
var circleB = 255;

function draw() {
  fill(circleR, circleG, circleB)
  ellipse(mouseX, mouseY, 20, 20);
  if (mouseIsPressed) {
    circleR = random(255), 
    circleG = random(255), 
    circleB = random(255);
  }
}