/*
Created by: Nichole Kim
Last edited: 2/23/2017
This program displays visualizations for the places visited by Anthony Bourdain throughout the 6 seasons of "Anthony Bourdain: Parts Unknown" series on Netflix.
*/

var season1 = ["Myanmar 2", "LA Koreatown 7", "Colombia 6", "Libya 1", "Quebec 7", "Morocco 1", "Congo 1", "Peru 6"];
var season2 = ["Jerusalem 4", "Spain 3", "New Mexico 7", "Copenhagen 3", "Sicily 3", "South Africa 1", "Tokyo 2", "Detroit 7"];
var season3 = ["Punjab 2", "Las Vegas 7", "Lyon 3", "Mexico 6", "Mississippi 7", "Russia 3", "Thailand 2", "Brazil 6"];
var season4 = ["Shanghai 2", "The Bronx 7", "Paraguay 6", "Vietnam 2", "Tanzania 1", "Iran 4", "Massachusetts 7", "Jamaica 6"];
var season5 = ["Korea 2", "Miami 7", "Scotland 3", "Budapest 3", "Madagascar 1", "New Jersey 7", "Hawaii 7", "Beirut 4"]
var season6 = ["Cuba 6", "Marseille 3", "Okinawa 2", "Bay Area 7", "Ethiopia 1", "Borneo 2", "Istanbul 2", "Charleston 7"];
var allSeason = [season1, season2, season3, season4, season5, season6];
var finalVal = [];

var keys = 155;
var barStartX = 120;
var barStartY = 150;

function setup() {
  createCanvas(800, 800); // Canvas size 800 * 800
}

function draw() {
  background(0); // background set to black & to refresh everytime in draw
  drawLabels(); // draws the labels around the visualization
  drawKeys(); // draws the continent color keys

  drawStackBar('red', barStartX, barStartY, 60, finalVal[0][0] * 50); // draws Africa bar for season 1
  drawStackBar('#FF8C00', barStartX, barStartY + finalVal[0][0] * 50, 60, finalVal[0][1] * 50); // draws Asia bar for season 1
  drawStackBar('#FFD700', barStartX, barStartY + finalVal[0][0] * 50 + finalVal[0][1] * 50, 60, finalVal[0][2] * 50); // draws Europe bar for season 1
  drawStackBar('#008000', barStartX, barStartY + finalVal[0][0] * 50 + finalVal[0][1] * 50 + finalVal[0][2] * 50, 60, finalVal[0][3] * 50); // draws Middle East bar for season 1
  drawStackBar('#20B2AA', barStartX, barStartY + finalVal[0][0] * 50 + finalVal[0][1] * 50 + finalVal[0][2] * 50 + finalVal[0][3] * 50, 60, finalVal[0][4] * 50); // draws Oceania bar for season 1
  drawStackBar('#1E90FF', barStartX, barStartY + finalVal[0][0] * 50 + finalVal[0][1] * 50 + finalVal[0][2] * 50 + finalVal[0][3] * 50 + finalVal[0][4] * 50, 60, finalVal[0][5] * 50); // draws Latin America bar for season 1
  drawStackBar('#8A2BE2', barStartX, barStartY + finalVal[0][0] * 50 + finalVal[0][1] * 50 + finalVal[0][2] * 50 + finalVal[0][3] * 50 + finalVal[0][4] * 50 + finalVal[0][5] * 50, 60, finalVal[0][6] * 50); // draws North America bar for season 1

  drawStackBar('red', barStartX + 100, barStartY, 60, finalVal[1][0] * 50); // draws Africa bar for season 2
  drawStackBar('#FF8C00', barStartX + 100, barStartY + finalVal[1][0] * 50, 60, finalVal[1][1] * 50); // draws Asia bar for season 2
  drawStackBar('#FFD700', barStartX + 100, barStartY + finalVal[1][0] * 50 + finalVal[1][1] * 50, 60, finalVal[1][2] * 50); // draws Europe bar for season 2
  drawStackBar('#008000', barStartX + 100, barStartY + finalVal[1][0] * 50 + finalVal[1][1] * 50 + finalVal[1][2] * 50, 60, finalVal[1][3] * 50); // draws Middle East bar for season 2
  drawStackBar('#20B2AA', barStartX + 100, barStartY + finalVal[1][0] * 50 + finalVal[1][1] * 50 + finalVal[1][2] * 50 + finalVal[1][3] * 50, 60, finalVal[1][4] * 50); // draws Oceania bar for season 2
  drawStackBar('#1E90FF', barStartX + 100, barStartY + finalVal[1][0] * 50 + finalVal[1][1] * 50 + finalVal[1][2] * 50 + finalVal[1][3] * 50 + finalVal[1][4] * 50, 60, finalVal[1][5] * 50); // draws Latin America bar for season 2
  drawStackBar('#8A2BE2', barStartX + 100, barStartY + finalVal[1][0] * 50 + finalVal[1][1] * 50 + finalVal[1][2] * 50 + finalVal[1][3] * 50 + finalVal[1][4] * 50 + finalVal[1][5] * 50, 60, finalVal[1][6] * 50); // draws North America bar for season 2

  drawStackBar('red', barStartX + 200, barStartY, 60, finalVal[2][0] * 50); // draws Africa bar for season 3
  drawStackBar('#FF8C00', barStartX + 200, barStartY + finalVal[2][0] * 50, 60, finalVal[2][1] * 50); // draws Asia bar for season 3
  drawStackBar('#FFD700', barStartX + 200, barStartY + finalVal[2][0] * 50 + finalVal[2][1] * 50, 60, finalVal[2][2] * 50); // draws Europe bar for season 3
  drawStackBar('#008000', barStartX + 200, barStartY + finalVal[2][0] * 50 + finalVal[2][1] * 50 + finalVal[2][2] * 50, 60, finalVal[2][3] * 50); // draws Middle East bar for season 3
  drawStackBar('#20B2AA', barStartX + 200, barStartY + finalVal[2][0] * 50 + finalVal[2][1] * 50 + finalVal[2][2] * 50 + finalVal[2][3] * 50, 60, finalVal[2][4] * 50); // draws Oceania bar for season 3
  drawStackBar('#1E90FF', barStartX + 200, barStartY + finalVal[2][0] * 50 + finalVal[2][1] * 50 + finalVal[2][2] * 50 + finalVal[2][3] * 50 + finalVal[2][4] * 50, 60, finalVal[2][5] * 50); // draws Latin America bar for season 3
  drawStackBar('#8A2BE2', barStartX + 200, barStartY + finalVal[2][0] * 50 + finalVal[2][1] * 50 + finalVal[2][2] * 50 + finalVal[2][3] * 50 + finalVal[2][4] * 50 + finalVal[2][5] * 50, 60, finalVal[2][6] * 50); // draws North America bar for season 3

  drawStackBar('red', barStartX + 300, barStartY, 60, finalVal[3][0] * 50); // draws Africa bar for season 4
  drawStackBar('#FF8C00', barStartX + 300, barStartY + finalVal[3][0] * 50, 60, finalVal[3][1] * 50); // draws Asia bar for season 4
  drawStackBar('#FFD700', barStartX + 300, barStartY + finalVal[3][0] * 50 + finalVal[3][1] * 50, 60, finalVal[3][2] * 50); // draws Europe bar for season 4
  drawStackBar('#008000', barStartX + 300, barStartY + finalVal[3][0] * 50 + finalVal[3][1] * 50 + finalVal[3][2] * 50, 60, finalVal[3][3] * 50); // draws Middle East bar for season 4
  drawStackBar('#20B2AA', barStartX + 300, barStartY + finalVal[3][0] * 50 + finalVal[3][1] * 50 + finalVal[3][2] * 50 + finalVal[3][3] * 50, 60, finalVal[3][4] * 50); // draws Oceania bar for season 4
  drawStackBar('#1E90FF', barStartX + 300, barStartY + finalVal[3][0] * 50 + finalVal[3][1] * 50 + finalVal[3][2] * 50 + finalVal[3][3] * 50 + finalVal[3][4] * 50, 60, finalVal[3][5] * 50); // draws Latin America bar for season 4
  drawStackBar('#8A2BE2', barStartX + 300, barStartY + finalVal[3][0] * 50 + finalVal[3][1] * 50 + finalVal[3][2] * 50 + finalVal[3][3] * 50 + finalVal[3][4] * 50 + finalVal[3][5] * 50, 60, finalVal[3][6] * 50); // draws North America bar for season 4

  drawStackBar('red', barStartX + 400, barStartY, 60, finalVal[4][0] * 50); // draws Africa bar for season 5
  drawStackBar('#FF8C00', barStartX + 400, barStartY + finalVal[4][0] * 50, 60, finalVal[4][1] * 50); // draws Asia bar for season 5
  drawStackBar('#FFD700', barStartX + 400, barStartY + finalVal[4][0] * 50 + finalVal[4][1] * 50, 60, finalVal[4][2] * 50); // draws Europe bar for season 5
  drawStackBar('#008000', barStartX + 400, barStartY + finalVal[4][0] * 50 + finalVal[4][1] * 50 + finalVal[4][2] * 50, 60, finalVal[4][3] * 50); // draws Middle East bar for season 5
  drawStackBar('#20B2AA', barStartX + 400, barStartY + finalVal[4][0] * 50 + finalVal[4][1] * 50 + finalVal[4][2] * 50 + finalVal[4][3] * 50, 60, finalVal[4][4] * 50); // draws Oceania bar for season 5
  drawStackBar('#1E90FF', barStartX + 400, barStartY + finalVal[4][0] * 50 + finalVal[4][1] * 50 + finalVal[4][2] * 50 + finalVal[4][3] * 50 + finalVal[4][4] * 50, 60, finalVal[4][5] * 50); // draws Latin America bar for season 5
  drawStackBar('#8A2BE2', barStartX + 400, barStartY + finalVal[4][0] * 50 + finalVal[4][1] * 50 + finalVal[4][2] * 50 + finalVal[4][3] * 50 + finalVal[4][4] * 50 + finalVal[4][5] * 50, 60, finalVal[4][6] * 50); // draws North America bar for season 5

  drawStackBar('red', barStartX + 500, barStartY, 60, finalVal[5][0] * 50); // draws Africa bar for season 6
  drawStackBar('#FF8C00', barStartX + 500, barStartY + finalVal[5][0] * 50, 60, finalVal[5][1] * 50); // draws Asia bar for season 6
  drawStackBar('#FFD700', barStartX + 500, barStartY + finalVal[5][0] * 50 + finalVal[5][1] * 50, 60, finalVal[5][2] * 50); // draws Europe bar for season 6
  drawStackBar('#008000', barStartX + 500, barStartY + finalVal[5][0] * 50 + finalVal[5][1] * 50 + finalVal[5][2] * 50, 60, finalVal[5][3] * 50); // draws Middle East bar for season 6
  drawStackBar('#20B2AA', barStartX + 500, barStartY + finalVal[5][0] * 50 + finalVal[5][1] * 50 + finalVal[5][2] * 50 + finalVal[5][3] * 50, 60, finalVal[5][4] * 50); // draws Oceania bar for season 6
  drawStackBar('#1E90FF', barStartX + 500, barStartY + finalVal[5][0] * 50 + finalVal[5][1] * 50 + finalVal[5][2] * 50 + finalVal[5][3] * 50 + finalVal[5][4] * 50, 60, finalVal[5][5] * 50); // draws Latin America bar for season 6
  drawStackBar('#8A2BE2', barStartX + 500, barStartY + finalVal[5][0] * 50 + finalVal[5][1] * 50 + finalVal[5][2] * 50 + finalVal[5][3] * 50 + finalVal[5][4] * 50 + finalVal[5][5] * 50, 60, finalVal[5][6] * 50); // draws North America bar for season 6

  displayValues(); // displays the region names when mouse is hovered
}

// draws the labels for the visualization.
// sets the text size, font, and color
// displays the title & season numbers
function drawLabels() {
  noStroke();
  textSize(24);
  textFont('Corbel');
  fill(255);
  text("Places visited by Anthony Bourdain", 225, 40);
  text("in all 6 seasons of TV Series <Parts Unknown>", 180, 70);
  textSize(16);
  fill(255);
  text("Season 1            Season 2             Season 3              Season 4             Season 5            Season 6", 120, 580);
}

// draws the continent keys for color codes
// assigns each continent to its respective color
function drawKeys() {
  textSize(13);
  text("Continents", 370, 670);
  fill('red');
  rect(keys, 680, 70, 30);
  text("Africa", keys + 15, 730);
  fill('#FF8C00');
  rect(keys + 70, 680, 70, 30);
  text("Asia", keys + 90, 730);
  fill('#FFD700');
  rect(keys + 140, 680, 70, 30);
  text("Europe", keys + 155, 730);
  fill('#008000');
  rect(keys + 210, 680, 70, 30);
  text("Middle", keys + 225, 730);
  text("East", keys + 230, 745);
  fill('#20B2AA');
  rect(keys + 280, 680, 70, 30);
  text("Oceania", keys + 290, 730);
  fill('#1E90FF')
  rect(keys + 350, 680, 70, 30);
  text("Latin", keys + 370, 730);
  text("America &", keys + 357, 745);
  text("Carribbean", keys + 355, 760);
  fill('#8A2BE2');
  rect(keys + 420, 680, 70, 30);
  text("North", keys + 440, 730);
  text("America", keys + 435, 745);
}

// function that is used to draw the stack bar graphs for each season
function drawStackBar(continentColor, x, y, w, h) {
  fill(continentColor);
  rect(x, y, w, h);
}

// the lines below have been pulled out of a function so that they don't repeat themselves
// haven't figured out a different way to do it, especially within a function
for (var seasonIndex = 0; seasonIndex < allSeason.length; seasonIndex++) { // starts a for loop to go over all seasons (season1 ~ season 6)
  var regionCountAfrica = 0; // local variable used to count # of Africa regions
  var regionCountAsia = 0; // local variable used to count # of Asia regions
  var regionCountEurope = 0; // local variable used to count # of Europe regions
  var regionCountME = 0; // local variable used to count # of Middle East regions
  var regionCountOceania = 0; // local variable used to count # of Oceania regions
  var regionCountLA = 0; // local variable used to count # of Latin America regions
  var regionCountNA = 0; // local variable used to count # of North America regions
  for (var contIndex = 0; contIndex < allSeason[seasonIndex].length; contIndex++) { // starts a for loop to go over each object in each season array
    var continentCode = allSeason[seasonIndex][contIndex].split(" ").slice(-1)[0]; // the number at the end of each object (which indicates the continent) is taken out & is assigned to the variable continentCode
    switch (continentCode) { // switch statement is used to select one of many blocks of code to be executed.
      case '1': // when continentCode is 1, code below is executed
        regionCountAfrica++; // this local variable is increased - later can be used to indicate how many regions of that continent exists
        break; // breaks out of the switch block
      case '2': // when continentCode is 2, code below is executed
        regionCountAsia++; // this local variable is increased - later can be used to indicate how many regions of that continent exists
        break; // breaks out of the switch block
      case '3': // when continentCode is 3, code below is executed
        regionCountEurope++; // this local variable is increased - later can be used to indicate how many regions of that continent exists
        break; // breaks out of the switch block
      case '4': // when continentCode is 4, code below is executed
        regionCountME++; // this local variable is increased - later can be used to indicate how many regions of that continent exists
        break; // breaks out of the switch block
      case '5': // when continentCode is 5, code below is executed
        regionCountOceania++; // this local variable is increased - later can be used to indicate how many regions of that continent exists
        break; // breaks out of the switch block
      case '6': // when continentCode is 6, code below is executed
        regionCountLA++; // this local variable is increased - later can be used to indicate how many regions of that continent exists
        break; // breaks out of the switch block
      case '7': // when continentCode is 7, code below is executed
        regionCountNA++; // this local variable is increased - later can be used to indicate how many regions of that continent exists
        break; // breaks out of the switch block
    }
    finalVal[seasonIndex] = [regionCountAfrica, regionCountAsia, regionCountEurope, regionCountME, regionCountOceania, regionCountLA, regionCountNA]; // this array finalVal stores the local variables above, which can be used to draw respective stack bar graphs
  }
}

// this function displays the region names when mouse is hovered on the stack bar graphs
// the continent code in each string is taken out
function displayValues() {
  fill(255);
  textSize(16);
  if (barStartX < mouseX && mouseX < (barStartX + 60) && barStartY < mouseY && mouseY < (barStartY + 400)) {
    text(season1[0].replace(/[0-9]/g, ''), mouseX, mouseY);
    text(season1[1].replace(/[0-9]/g, ''), mouseX, mouseY + 20);
    text(season1[2].replace(/[0-9]/g, ''), mouseX, mouseY + 40);
    text(season1[3].replace(/[0-9]/g, ''), mouseX, mouseY + 60);
    text(season1[4].replace(/[0-9]/g, ''), mouseX, mouseY + 80);
    text(season1[5].replace(/[0-9]/g, ''), mouseX, mouseY + 100);
    text(season1[6].replace(/[0-9]/g, ''), mouseX, mouseY + 120);
    text(season1[7].replace(/[0-9]/g, ''), mouseX, mouseY + 140);
  } else if ((barStartX + 100) < mouseX && mouseX < (barStartX + 160) && barStartY < mouseY && mouseY < (barStartY + 400)) {
    text(season2[0].replace(/[0-9]/g, ''), mouseX, mouseY);
    text(season2[1].replace(/[0-9]/g, ''), mouseX, mouseY + 20);
    text(season2[2].replace(/[0-9]/g, ''), mouseX, mouseY + 40);
    text(season2[3].replace(/[0-9]/g, ''), mouseX, mouseY + 60);
    text(season2[4].replace(/[0-9]/g, ''), mouseX, mouseY + 80);
    text(season2[5].replace(/[0-9]/g, ''), mouseX, mouseY + 100);
    text(season2[6].replace(/[0-9]/g, ''), mouseX, mouseY + 120);
    text(season2[7].replace(/[0-9]/g, ''), mouseX, mouseY + 140);
  } else if ((barStartX + 200) < mouseX && mouseX < (barStartX + 260) && barStartY < mouseY && mouseY < (barStartY + 400)) {
    text(season3[0].replace(/[0-9]/g, ''), mouseX, mouseY);
    text(season3[1].replace(/[0-9]/g, ''), mouseX, mouseY + 20);
    text(season3[2].replace(/[0-9]/g, ''), mouseX, mouseY + 40);
    text(season3[3].replace(/[0-9]/g, ''), mouseX, mouseY + 60);
    text(season3[4].replace(/[0-9]/g, ''), mouseX, mouseY + 80);
    text(season3[5].replace(/[0-9]/g, ''), mouseX, mouseY + 100);
    text(season3[6].replace(/[0-9]/g, ''), mouseX, mouseY + 120);
    text(season3[7].replace(/[0-9]/g, ''), mouseX, mouseY + 140);
  } else if ((barStartX + 300) < mouseX && mouseX < (barStartX + 360) && barStartY < mouseY && mouseY < (barStartY + 400)) {
    text(season4[0].replace(/[0-9]/g, ''), mouseX, mouseY);
    text(season4[1].replace(/[0-9]/g, ''), mouseX, mouseY + 20);
    text(season4[2].replace(/[0-9]/g, ''), mouseX, mouseY + 40);
    text(season4[3].replace(/[0-9]/g, ''), mouseX, mouseY + 60);
    text(season4[4].replace(/[0-9]/g, ''), mouseX, mouseY + 80);
    text(season4[5].replace(/[0-9]/g, ''), mouseX, mouseY + 100);
    text(season4[6].replace(/[0-9]/g, ''), mouseX, mouseY + 120);
    text(season4[7].replace(/[0-9]/g, ''), mouseX, mouseY + 140);
  } else if ((barStartX + 400) < mouseX && mouseX < (barStartX + 460) && barStartY < mouseY && mouseY < (barStartY + 400)) {
    text(season5[0].replace(/[0-9]/g, ''), mouseX, mouseY);
    text(season5[1].replace(/[0-9]/g, ''), mouseX, mouseY + 20);
    text(season5[2].replace(/[0-9]/g, ''), mouseX, mouseY + 40);
    text(season5[3].replace(/[0-9]/g, ''), mouseX, mouseY + 60);
    text(season5[4].replace(/[0-9]/g, ''), mouseX, mouseY + 80);
    text(season5[5].replace(/[0-9]/g, ''), mouseX, mouseY + 100);
    text(season5[6].replace(/[0-9]/g, ''), mouseX, mouseY + 120);
    text(season5[7].replace(/[0-9]/g, ''), mouseX, mouseY + 140);
  } else if ((barStartX + 500) < mouseX && mouseX < (barStartX + 560) && barStartY < mouseY && mouseY < (barStartY + 400)) {
    text(season6[0].replace(/[0-9]/g, ''), mouseX, mouseY);
    text(season6[1].replace(/[0-9]/g, ''), mouseX, mouseY + 20);
    text(season6[2].replace(/[0-9]/g, ''), mouseX, mouseY + 40);
    text(season6[3].replace(/[0-9]/g, ''), mouseX, mouseY + 60);
    text(season6[4].replace(/[0-9]/g, ''), mouseX, mouseY + 80);
    text(season6[5].replace(/[0-9]/g, ''), mouseX, mouseY + 100);
    text(season6[6].replace(/[0-9]/g, ''), mouseX, mouseY + 120);
    text(season6[7].replace(/[0-9]/g, ''), mouseX, mouseY + 140);
  }

}