var arr = ["apple", "bear", "cat", "dog"];

function setup() {
  createCanvas(500, 500);
  textSize(20);
}

function draw() {
  background(200);
  for (i = 0; i < arr.length; i++) { // arr.length is equal to 4
    text(arr[i], 100, i * 25 + 50); // arr[i] is how you access the value
  }
}
// arr[1] = "bird" --> replaces bear with bird