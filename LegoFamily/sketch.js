// NAME: Nichole Kim  
// LAST EDITED DATE: 1/27/2017
// DESCRIPTION: 
// This program shows a Lego family, which consists of the characters from the movie "Inside Out". 
// Five characters - Joy, Sadness, Anger, Fear, and Disgust - represent the emotions inside Riley's head (hence the black background).
// To add to their personalities, I customized the characters' moving pace: Sadness moves the slowest while Joy moves the fastest.

var angerx = 50;
var angery = 100;
var fearx = 930;
var feary = 100;
var joyx = 50;
var joyy = 450;
var disgustx = 920;
var disgusty = 450;
var sadnessx = 120;
var sadnessy = 500;

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
}

// This function is for "Anger".
// It consists of 3 rectangles (head, torso, legs), and calculation method "min" that helps move Anger to his center position.
function anger() {
  fill('#A3111D');
  rect(angerx, angery, 50, 30); // Anger's head
  fill('#C8ADAC');
  rect(angerx, angery + 30, 50, 15); // Anger's torso
  fill('#513439');
  rect(angerx, angery + 45, 50, 20); // Anger's legs
  angerx = min(angerx + 1, 380); // Moves Anger's x-coordinate to the center
  angery = min(angery + 1, 300); // Moves Anger's y-coordinate to the center
}

// This function is for "Fear".
// It consists of 3 rectangles (head, torso, legs), and calculation methods "min" "max" that help move Fear to his center position.
function fear() {
  fill('#AE86BD');
  rect(fearx, feary, 30, 45); // Fear's head
  fill('#C5C4E6');
  rect(fearx, feary + 45, 30, 50); // Fear's torso
  fill('#4E416E');
  rect(fearx, feary + 95, 30, 30); // Fear's legs
  fearx = max(fearx - 1, 445); // Moves Fear's x-coordinate to the center
  feary = min(feary + 1, 240); // Moves Fear's y-coordinate to the center
}

// This function is for "Joy".
// It consists of 4 rectangles (hair, head, dress, legs), and calculation methods "min" "max" that help move Joy to her center position.
function joy() {
  fill('#3F86D5');
  rect(joyx, joyy, 40, 15); // Joy's hair
  fill('#FBEBCA');
  rect(joyx, joyy + 15, 40, 30); // Joy's head
  fill('#C9DFAA');
  rect(joyx, joyy + 45, 40, 60); // Joy's dress
  fill('#FBEBCA');
  rect(joyx, joyy + 105, 40, 25); // Joy's legs
  joyx = min(joyx + 1.5, 495); // Moves Joy's x-coordinate to the center
  joyy = max(joyy - 1.5, 235); // Moves Joy's y-coordinate to the center
}

// This function is for "Disgust".
// It consists of 4 rectangles (hair, head, torso, legs), and calculation method "max" that helps move Disgust to her center position.
function disgust() {
  fill('#4FA320');
  rect(disgustx, disgusty, 40, 10); // Disgust's hair
  fill('#C3FE97');
  rect(disgustx, disgusty + 10, 40, 25); // Disgust's head
  fill('#52CE8B');
  rect(disgustx, disgusty + 35, 40, 45); // Disgust's torso
  fill('#2B6C4A');
  rect(disgustx, disgusty + 80, 40, 10); // Disgust's legs
  disgustx = max(disgustx - 1, 550); // Moves Disgust's x-coordinate to the center
  disgusty = max(disgusty - 1, 275); // Moves Disgust's y-coordinate to the center
}

// This function is for "Sadness".
// It consists of 4 rectangles (hair, head, torso, legs), as well as 2 arcs & 1 line that represent her glasses.
// Calculation methods "min" "max" were used in all shapes to help move Sadness to her center position.
function sadness() {
  fill('#2769B0');
  rect(sadnessx, sadnessy, 50, 10); // Sadness's hair
  fill('#9BF0FD');
  rect(sadnessx, sadnessy + 10, 50, 35); // Sadness's head
  fill('#BCD2E4');
  rect(sadnessx, sadnessy + 45, 50, 30); // Sadness's torso
  fill('#0F3871');
  rect(sadnessx, sadnessy + 75, 50, 15); // Sadness's legs
  noFill(); // Cancels the fill-in color
  stroke(0); // Sets the stroke
  strokeWeight(1); // Sets the thickness of the stroke
  arc(sadnessx + 13, sadnessy + 25, 20, 20, 0, TWO_PI); // One circle for the glasses
  arc(sadnessx + 37, sadnessy + 25, 20, 20, 0, TWO_PI); // Another circle for the glasses
  line(sadnessx + 23, sadnessy + 25, sadnessx + 27, sadnessy + 25); // Line that connects the two circles
  noStroke(); // Cancels the stroke
  sadnessx = min(sadnessx + 0.5, 605); // Moves Sadness's x-coordinate to the center
  sadnessy = max(sadnessy - 0.5, 275); // Moves Sadness's y-coordinate to the center
}