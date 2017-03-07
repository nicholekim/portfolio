function setup() {
  createCanvas(340, 460); // canvas size, based on the art's real dimension
  background('#bebfba'); // background color

  // top circle
  noStroke(); // sets the stroke to no stroke
  fill("#f4c896"); // Fills in the top circle. The original art has multiple colors blended, but I extracted out only 1 hex code from it.
  ellipse(170, 175, 100, 100); // big circle
  strokeWeight(0.5); // sets the stroke thickness to 0.5
  stroke('#434341'); // sets the stroke color
  noFill(); // Cancels the fill-in 
  arc(170, 175, 95, 95, PI + HALF_PI, TWO_PI); // Creates the outer arc on the right top part of the top circle
  arc(170, 175, 95, 95, HALF_PI, PI); // Creates the outer arc on the left bottom part of the top circle 
  arc(170, 175, 85, 85, PI + HALF_PI, TWO_PI); // Creates the inner arc on the right top part of the top circle
  arc(170, 175, 85, 85, HALF_PI, PI); // Creates the inner arc on the left bottom part of the top circle
  line(170, 132.5, 170, 217.5); // The vertical line that connects the two arcs. Tried to replicate the thin lines as much as I could, but decided to make them easier to code.

  // left circles
  noStroke(); // Cancels the stroke
  fill('#c96445'); // Color that fills in the red circle
  ellipse(71, 311, 35, 35); // The red circle hidden behind
  fill('#434341'); // Color of the biggest one of the left circles
  ellipse(111, 280, 100, 100); // big circle
  fill('#f1f0ec'); // Color of the medium circle
  ellipse(111, 280, 60, 60); // medium circle
  fill('#434341'); // Color of the smallest circle
  ellipse(111, 280, 30, 30); // small circle
  noFill(); // Cancels the fill-in
  stroke(51); //  Sets the stroke color around the medium circle
  ellipse(111, 280, 55, 55); // line around the medium circle

  // right circle
  noStroke(); // Cancels the stroke
  fill('#434341'); // Color of the big circle
  ellipse(228, 280, 100, 100); // big circle
  fill('#eae648'); // Color of the smaller yellow circle
  ellipse(228, 280, 40, 40); // smaller yellow circle
  strokeWeight(3); // Sets the stroke thickness to 3
  stroke('#ececea'); // Sets the stroke color of the white arcs on the right circle
  noFill(); // Cancels the fill-in for the arcs
  arc(228, 280, 85, 85, PI + QUARTER_PI, HALF_PI - QUARTER_PI); // Bigger arc on the right side 
  arc(228, 280, 85, 85, HALF_PI, PI); // Smaller arc on the left side
}