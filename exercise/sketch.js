var x = 250;
var dir = 1;

function setup() {
  createCanvas(500, 300);
  background(240, 12, 183);
  noStroke();
}

function draw() {
  background(240, 12, 183);
  fill(255);
  ellipse(x, 150, 50, 50);
  x = x + dir;
  if (x > 475 || x < 25) { // direction change
    dir = dir * -1;
  }
  // x = min(x + 1, 500);  -- when dir doesn't exist. to go to the other direction, use max
}