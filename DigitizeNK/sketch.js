function setup() {
  createCanvas(340, 460);
  smooth();
  background('#bebfba')
  
  //top circle
  noStroke();
  fill("#f4c896");
  ellipse(170, 175, 100, 100);
  strokeWeight(0.5);
  stroke('#434341');
  noFill();
  arc(170, 175, 95, 95, PI+HALF_PI, TWO_PI);
  arc(170, 175, 95, 95, HALF_PI, PI);
  arc(170, 175, 85, 85, PI+HALF_PI, TWO_PI);
  arc(170, 175, 85, 85, HALF_PI, PI);
  line(170, 132.5, 170, 217.5);
  
  //left circle
  noStroke();
  fill('#c96445');
  ellipse(71, 311, 35, 35);
  fill('#434341');
  ellipse(111, 280, 100, 100);
  fill('#f1f0ec');
  ellipse(111, 280, 60, 60);
  fill('#434341');
  ellipse(111, 280, 30, 30);
  noFill();
  strokeWeight(0.5);
  stroke(51);
  ellipse(111, 280, 55, 55);

  
  //right circle
  noStroke();
  fill('#434341');
  ellipse(228, 280, 100, 100);
  fill('#eae648');
  ellipse(228, 280, 40, 40);
  strokeWeight(3);
  stroke('#ececea');
  noFill();
  arc(228, 280, 85, 85, PI+QUARTER_PI, HALF_PI-QUARTER_PI);
  arc(228, 280, 85, 85, HALF_PI, PI);
}
