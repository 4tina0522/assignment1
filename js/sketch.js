const barWidth = 50;
let lastBar = -2;
let Coin;
let ellipseX;
let ellipseY;
let font,
  fontsize = 25;
let r, g, b;

function preload(){
  //Load model
  Coin = loadModel('assets/Coin.obj', true);
  font = loadFont('assets/Heiti.otf');
}

function setup() {
  // put setup code here to run once
  createCanvas(windowWidth, windowHeight, WEBGL);
  r = random(255);
  g = random(255);
  b = random(255);
  colorMode(HSB, height, height, height);
  noStroke();
  background(0);
  textFont(font);
  textSize(fontsize);
  textAlign(LEFT, RIGHT);
}

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(255);
  text('問', x, 80);

  fill(255);
  text('號', x, 150);

  fill(255);
  text('問', x, 220);

  fill(255);
  text('號', x, 290);
}
function draw(){
  // put drawing code here to run in a loop
  background(r, g, b);

  textAlign(RIGHT);
  drawWords(width * 0.1);
  textAlign(CENTER);
  drawWords(width * 0.25);
  textAlign(LEFT);
  drawWords(width * 0.4);

  scale(1.5);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(Coin);


  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
  let barX = whichBar * barWidth;
  fill(mouseY, height, height);
  rect(barX, 0, barWidth, height);
     lastBar = whichBar;
   }

   textSize(50);
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
