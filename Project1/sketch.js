/* 
Created by: Nichole Kim
Last edited: 2/11/2017
Sand beach where you can create the sea waves' movement using the mouse and voice.
*/

var sand;
var page = 0;
var x = 500;
var y = 0;
var mic;
var vol;

function preload() {
  sand = loadImage("sand.jpg"); // Image of the sandbeach loaded
}

function setup() {
  createCanvas(500, 500); // Canvas size 500 * 500
  image(sand, 0, 0, 500, 500); // Calls the preloaded image of the sandbeach
  noStroke(); // sets the default as no stroke
  mic = new p5.AudioIn(); // Creates the voice input
  mic.start(); // starts the mic input
}

function draw() {
  background(sand); // Background image recalled - helps refresh the background
  textSize(15); // text size set to 15
  textFont("Arial"); // text font set to Arial
  waves(x, y); // Calls the waves function below with perimeters x and y
  if (page == 0) { // if statement saying when page equals to 0, the wave function executes the statements below
    fill(0); // sets the text color to black
    text("Move the waves by making sound", 220, 450); // print the text
    text("Click mouse to move waves with mouse", 220, 470); // print the text
    vol = mic.getLevel(); // get the overall volume to replace the value for variable vol
    var newVol = map(vol, 0, 2, 100, 1200); // variable newVol is mapped to the following range
    y = newVol; // the value in newVol replaces the value for y
  } else { // else statement saying when page does not equal to 0, the wave function executes the statements below
    fill(0); // sets the text color to black
    text("Click mouse to go back", 220, 450); // print the text
    y = max(mouseY, 50); // mouse's y-coordinate position replaces the value for perimeter y, until y > 50
    y = min(350, mouseY); // mouse's y-coordinate position replaces the value for perimeter y, until y < 350
  }
}

// Function waves that consists for 4 different colored rectangles with different levels of transparency.
// Mimics how the waves look like at the beach
function waves(x, y) {
  fill(255, 255, 255, 200);
  rect(0, 0, x, y + 70);
  fill(0, 150, 255, 150);
  rect(0, 0, x, y + 50);
  fill(0, 50, 204, 150);
  rect(0, 0, x, y);
  fill(0, 0, 200, 60);
  rect(0, 0, x, y - 100);
}

// Function that works to switch between the two different ways to move the waves.
function mousePressed() {
  page = 1 - page;
}