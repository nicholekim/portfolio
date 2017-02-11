function setup() {
  createCanvas(400, 400);
  background(0);
}

var circle = 30

function draw() {
  background(255);
  noStroke();
  fill(0);
  ellipse(200, 200, circle, circle);
  if (dist(200, 200, mouseX, mouseY) <= circle / 2) {
    circle ++;
  } else {
    circle = 30;
  }
}