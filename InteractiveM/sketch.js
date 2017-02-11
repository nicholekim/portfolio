// Created by: Nichole Kim
// Last edited 1/4/2017
// Minion that moves its eye & bounces alternatively, as the user clicks the mouse.

var x = 500;
var y = 400;
var page = 0;
var eyeDir = 0;
var jumpValue = 1;
var jumpDir = 3;

function setup() {
  createCanvas(1000, 800); // Canvas created in 1000 * 800 dimension
}

function draw() {
  background(0, 255, 255); // background set in Draw - helps reset the eye movement.
  minion(x, y); // calls the minion function below with perimeters x and y.
  if (page == 0) { // if statement saying when page equals to 0, Minion moves its eye left and right.
    eyeDir = mouseX - x; // the value of mouse's x-coordinate position minus x is assigned to the variable eyeDir
    eyeDir = min(eyeDir, 45); // limits the eye movement on the right side
    eyeDir = max(-45, eyeDir); // limits the eye movement on the left side
  } else { // else statement saying when page is not equal to 0, Minion bounces up and down.
    y = y + jumpDir; // value y plus the value of jumpDir (the speed with which the monster moves) is assigned as the new value y
    if (y + jumpValue > 565 || y + jumpValue < 280) { // if statement that limits the monster's movement to the size of the canvas
      jumpDir = jumpDir * -1; // jumpDir is multiplied with -1 to switch the direction with which the monster moves.
    }
  }
}

// Function minion that consists of different body parts, which are also defined as separate functions.
// Makes use of perimeters x and y.
// Contains the variable eyeDir, which helps with the monster's eye movement
// Also contains the variable jumpValue, which allows the monster's bouncing action
function minion(x, y) {
  body(x, y + jumpValue);
  arms(x, y + jumpValue);
  lips(x, y + jumpValue);
  pants(x, y + jumpValue);
  eye(x + eyeDir, y + jumpValue);
}

// Function that depicts the Minion's yellow body, google strap, and hair strands
function body(x, y) {
  noStroke();
  fill('#FCE027');
  rect(x - 100, y - 150, 200, 300);
  arc(x, y - 150, 200, 200, PI, TWO_PI);
  arc(x, y + 150, 200, 100, 0, PI);
  fill('#211A2D');
  rect(x - 100, y - 160, 200, 20);
  stroke('#231F20');
  strokeWeight(3);
  line(x, y - 250, x, y - 280);
  line(x, y - 250, x + 10, y - 275);
  line(x, y - 250, x - 10, y - 275);
  line(x, y - 250, x - 20, y - 270);
  line(x, y - 250, x + 20, y - 270);

}

// Function that is responsible for the Minions's arms and hands
function arms(x, y) {
  noStroke();
  fill('#FCE027');
  rect(x - 200, y + 20, 100, 30);
  rect(x + 100, y + 20, 100, 30);
  fill('#20211C');
  rect(x - 220, y + 20, 30, 30);
  rect(x + 200, y + 20, 30, 30);
}

// Function that shows the smiling lips of the Minion
function lips(x, y) {
  noFill();
  stroke(0, 0, 0);
  strokeWeight(3);
  arc(x, y - 100, 100, 100, QUARTER_PI, PI - QUARTER_PI);
}

// Function that depicts the jean overalls that Minion is wearing, complete with the pocket in the front. Also includes Minion's feet.
function pants(x, y) {
  noStroke();
  fill('#0976BB');
  arc(x, y + 150, 200, 100, 0, PI);
  rect(x - 100, y + 100, 200, 50);
  rect(x - 50, y + 20, 100, 80);
  rect(x - 100, y + 5, 200, 15);
  rect(x - 60, y + 180, 50, 40);
  rect(x + 10, y + 180, 50, 40);
  fill('#20211C');
  rect(x - 60, y + 220, 50, 15);
  rect(x + 10, y + 220, 50, 15);
  noFill();
  stroke(0);
  strokeWeight(3);
  rect(x - 25, y + 30, 50, 50);
}

// Function that includes the Minion's eye & the gray lens part of his goggle.
function eye(x, y) {
  noStroke();
  fill('#FFFFFF');
  ellipse(x, y - 150, 100, 70);
  fill('#A57757');
  ellipse(x, y - 150, 30, 30);
  fill('#2E2923');
  ellipse(x, y - 150, 15, 15);
  fill('#FFFFFF');
  ellipse(x - 5, y - 155, 5, 5);
  rect(x - 70, y - 160, 10, 20);
  rect(x + 60, y - 160, 10, 20);
  noFill();
  stroke('#939697');
  strokeWeight(15);
  arc(x, y - 150, 110, 110, 0, TWO_PI);
}

// Function that works to switch between the two Minions (eye-moving vs. bouncing). Also resets the eye movement for the bouncing Minion.
function mousePressed() {
  page = 1 - page;
  eyeDir = 0;
}
