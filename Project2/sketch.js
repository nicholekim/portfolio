/* 
Created by: Nichole Kim
Last edited: 2/11/2017
Able to move the rocket up & down and change the sceneries
*/

var rocket;
var cloud1;
var cloud2;
var cloud3;
var stars;
var birds;
var rocketHeight = 750;
var cloudHeight = 500;
var starsHeight = 0;
var birdsX = 400;
var skyColor = 255;


function preload() {
  rocket = loadImage("rocket.png"); // image of rocket preloaded
  cloud1 = loadImage("cloud1.png"); // image of cloud1 preloaded
  cloud2 = loadImage("cloud2.png"); // image of cloud2 preloaded
  cloud3 = loadImage("cloud3.png"); // image of cloud3 preloaded
  stars = loadImage("stars.png"); // image of stars preloaded
  birds = loadImage("birds.png"); // image of birds preloaded
}

function setup() {
  createCanvas(600, 800); // Canvas size set to 600 * 800
}

function draw() {
  background(0, 0, skyColor); // background set to refresh everytime. variable skyColor changes as rocket moves
  image(cloud1, 100, cloudHeight, 200, 129); // image of cloud1 loaded. variable cloudHeight changes as rocket moves
  image(cloud2, 450, cloudHeight - 200, 200, 200); // image of cloud2 loaded. variable cloudHeight changes as rocket moves
  image(cloud2, 20, cloudHeight - 700, 200, 200); // image of cloud2 loaded. variable cloudHeight changes as rocket moves
  image(cloud3, 200, cloudHeight - 450, 159, 132.5); // image of cloud3 loaded. variable cloudHeight changes as rocket moves
  image(birds, birdsX, 250, 500, 500); // image of birds loaded. variable birdsX changes as rocket moves
  image(stars, -200, starsHeight - 1000, 1044, 864); // image of stars loaded. variable starsHeight changes as rocket moves
  image(rocket, 250, rocketHeight, 100, 175); // image of rocket loaded. variable rocketHeight changes as rocket moves
  menu(); // calls the function menu from below
  if (keyIsDown(UP_ARROW)) { // if statement saying if user presses up arrow, the statements below are executed
    cloudHeight = cloudHeight + 5; // cloudHeight is increased by 5
    starsHeight = starsHeight + 5; // starsHeight is increased by 5
    birdsX = birdsX - 5; // birdsX is decreased by 5
    skyColor = skyColor - 1.7; // Sky's color changes by decreasing B value by 1.7
    rocketHeight = rocketHeight - 5; // rocketHeight is decreased by 5
  } else if (keyIsDown(DOWN_ARROW)) { // else if statement saying if user presses down arrow, the statements below are executed
    cloudHeight = cloudHeight - 5; // cloudHeight is decreased by 5
    starsHeight = starsHeight - 5; // starsHeight is decreased by 5
    birdsX = birdsX + 5; // birdsX is increased by 5
    skyColor = skyColor + 1.7; // Sky's color changes by increasing B value by 1.7
    rocketHeight = rocketHeight + 5; // rocketHeight is increased by 5
  }
}

// Instructs user to press the keys to move the rocket
function menu() {
  fill(255);
  textSize(15);
  textFont("Arial");
  text("Press UP & DOWN arrow", 30, 770);
}