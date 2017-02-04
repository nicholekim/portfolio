function setup() {
  createCanvas(340, 460); // canvas size, based on the art's real dimension
  background('#bebfba'); // background color

  // top circle
  noStroke();
  fill("#f4c896"); // the original art has multiple colors blended, but i extracted out only 1 hex code from it.
  ellipse(170, 175, 100, 100); // big circle
  strokeWeight(0.5);
  stroke('#434341');
  noFill();
  arc(170, 175, 95, 95, PI + HALF_PI, TWO_PI);
  arc(170, 175, 95, 95, HALF_PI, PI);
  arc(170, 175, 85, 85, PI + HALF_PI, TWO_PI);
  arc(170, 175, 85, 85, HALF_PI, PI);
  line(170, 132.5, 170, 217.5); // tried to replicate the thin lines as much as i could, but decided to make them easier to code.

  // left circle
  noStroke();
  fill('#c96445');
  ellipse(71, 311, 35, 35); // red circle hidden behind
  fill('#434341');
  ellipse(111, 280, 100, 100); // big circle
  fill('#f1f0ec');
  ellipse(111, 280, 60, 60); // medium circle
  fill('#434341');
  ellipse(111, 280, 30, 30); // small circle
  noFill();
  strokeWeight(0.5);
  stroke(51);
  ellipse(111, 280, 55, 55); // line around the medium circle

  // right circle
  noStroke();
  fill('#434341');
  ellipse(228, 280, 100, 100); // big circle
  fill('#eae648');
  ellipse(228, 280, 40, 40); // smaller yellow circle
  strokeWeight(3);
  stroke('#ececea');
  noFill();
  arc(228, 280, 85, 85, PI + QUARTER_PI, HALF_PI - QUARTER_PI);
  arc(228, 280, 85, 85, HALF_PI, PI);
}