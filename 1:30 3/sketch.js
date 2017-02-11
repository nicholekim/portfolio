function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  noStroke();
  fill(255);
  if (mouseX >= 100 && mouseX <= 200 && mouseY >= 200 && mouseY <= 300) {
    fill(random(255), random(255), random(255));
  }
  rect(100, 200, 100, 100);
}