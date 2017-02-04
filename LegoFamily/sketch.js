// Created by: Nichole Kim  
// Last edited date: 1/30/2017
// Brief description: 
// This program shows a Lego family, which consists of the characters from the movie "Inside Out". 
// Five characters - Joy, Sadness, Anger, Fear, and Disgust - represent the emotions inside Riley's head (hence the black background).
// To add to their personalities, I customized the characters' moving pace: Sadness moves the slowest while Joy moves the fastest.

var angerX = 50;
var angerY = 100;
var fearX = 930;
var fearY = 100;
var joyX = 50;
var joyY = 450;
var disgustX = 920;
var disgustY = 450;
var sadnessX = 120;
var sadnessY = 500;

function setup() {
  createCanvas(1000, 600); // Canvas created in 1000 * 600 dimension.
  noStroke(); // "No stroke" set as the default.
}

function draw() {
  background(0); // Background color added before all the functions below, so that it resets everytime the characters move.
  anger(); // Function for the character "Anger".
  fear(); // Function for the character "Fear".
  joy(); // Function for the character "Joy".
  disgust(); // Function for the character "Disgust".
  sadness(); // Function for the character "Sadness".
  angerX = min(angerX + 1, 380); // Moves Anger's x-coordinate to the center
  angerY = min(angerY + 1, 300); // Moves Anger's y-coordinate to the center
  fearX = max(fearX - 1, 445); // Moves Fear's x-coordinate to the center
  fearY = min(fearY + 1, 240); // Moves Fear's y-coordinate to the center
  joyX = min(joyX + 1.5, 495); // Moves Joy's x-coordinate to the center
  joyY = max(joyY - 1.5, 235); // Moves Joy's y-coordinate to the center
  disgustX = max(disgustX - 1, 550); // Moves Disgust's x-coordinate to the center
  disgustY = max(disgustY - 1, 275); // Moves Disgust's y-coordinate to the center
  sadnessX = min(sadnessX + 0.5, 605); // Moves Sadness's x-coordinate to the center
  sadnessY = max(sadnessY - 0.5, 275); // Moves Sadness's y-coordinate to the center
}

// This function is for "Anger".
// It consists of 3 rectangles (head, torso, legs), and calculation method "min" that helps move Anger to his center position.
function anger() {
  fill('#A3111D');
  rect(angerX, angerY, 50, 30); // Anger's head
  fill('#C8ADAC');
  rect(angerX, angerY + 30, 50, 15); // Anger's torso
  fill('#513439');
  rect(angerX, angerY + 45, 50, 20); // Anger's legs
}

// This function is for "Fear".
// It consists of 3 rectangles (head, torso, legs), and calculation methods "min" "max" that help move Fear to his center position.
function fear() {
  fill('#AE86BD');
  rect(fearX, fearY, 30, 45); 
  fill('#C5C4E6');
  rect(fearX, fearY + 45, 30, 50); 
  fill('#4E416E');
  rect(fearX, fearY + 95, 30, 30); 
}

// This function is for "Joy".
// It consists of 4 rectangles (hair, head, dress, legs), and calculation methods "min" "max" that help move Joy to her center position.
function joy() {
  fill('#3F86D5');
  rect(joyX, joyY, 40, 15); 
  fill('#FBEBCA');
  rect(joyX, joyY + 15, 40, 30); 
  fill('#C9DFAA');
  rect(joyX, joyY + 45, 40, 60); 
  fill('#FBEBCA');
  rect(joyX, joyY + 105, 40, 25); 
}

// This function is for "Disgust".
// It consists of 4 rectangles (hair, head, torso, legs), and calculation method "max" that helps move Disgust to her center position.
function disgust() {
  fill('#4FA320');
  rect(disgustX, disgustY, 40, 10); 
  fill('#C3FE97');
  rect(disgustX, disgustY + 10, 40, 25); 
  fill('#52CE8B');
  rect(disgustX, disgustY + 35, 40, 45); 
  fill('#2B6C4A');
  rect(disgustX, disgustY + 80, 40, 10);
}

// This function is for "Sadness".
// It consists of 4 rectangles (hair, head, torso, legs), as well as 2 arcs & 1 line that represent her glasses.
// Calculation methods "min" "max" were used in all shapes to help move Sadness to her center position.
function sadness() {
  fill('#2769B0');
  rect(sadnessX, sadnessY, 50, 10);
  fill('#9BF0FD');
  rect(sadnessX, sadnessY + 10, 50, 35); 
  fill('#BCD2E4');
  rect(sadnessX, sadnessY + 45, 50, 30); 
  fill('#0F3871');
  rect(sadnessX, sadnessY + 75, 50, 15); 
  noFill(); 
  stroke(0); 
  strokeWeight(1); 
  arc(sadnessX + 13, sadnessY + 25, 20, 20, 0, TWO_PI); 
  arc(sadnessX + 37, sadnessY + 25, 20, 20, 0, TWO_PI); 
  line(sadnessX + 23, sadnessY + 25, sadnessX + 27, sadnessY + 25); 
  noStroke(); 
}