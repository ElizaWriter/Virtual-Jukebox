let state = 0;
let music1;
let music2;
let music3;
let music4;
let music5;
let music6;
let disk1;
let disk2;
let disk3;
let disk4;
let disk5;
let disk6;
let bg;

function preload() {
  // music1 = loadSound("9 to 5.mp3");
  // music2 = loadSound("Feel Invincible.mp3");
  // music3 = loadSound("Rock This Town.mp3");
  // music4 = loadSound("Happier.mp3");
  // music5 = loadSound("Country Boy (Shake It For Me).mp3");
  // music6 = loadSound("Ballroom Of Romance.mp3");
}

function setup() {
  bg = loadImage ('vintage-vinyl.png');
  createCanvas(800,600);
  state = 0;
  textAlign(CENTER);
  
}

function draw() {
  if (state == 0) {
    background(bg);
    splashScreen();
  } else if (state == 1) {
    classicSongScreen();
  } else if (state == 2) {
    metalSongScreen();
  } else if (state == 3) {
    rockSongScreen();
  } else if (state == 4) {
    popSongScreen();
  } else if (state == 5) {
    CountrySongScreen();
  } else if (state == 6) {
    CelticSongScreen();
  }
}

function splashScreen() {
  fill(0);
  strokeWeight(3);
  stroke(255,255,255,90);
  textFont('Krungthep');
  textSize(60);
  text("Retro Music Picker", width / 2, height / 4);
  textSize(20);
  text("By Elizabeth Enloe & ", width / 2, height / 3);
  text(
    "Use the mouse to select the song you wish to play!",
    width / 2,
    height / 2 + height / 5
  );
  textSize(20);
  fill("Black");
  text("Click to Start", width / 2, height / 2);
}

function mouseClicked () {
  state = 1;
  music1.stop();
  music2.stop();
  music3.stop();
  music4.stop();
  music5.stop();
  music6.stop();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    state = 2;
    music1.stop();
    music2.stop();
    music3.stop();
    music4.stop();
    music5.stop();
    music6.stop();
  } else if (keyCode === DOWN_ARROW) {
    state = 3;
    music1.stop();
    music2.stop();
    music3.stop();
    music4.stop();
    music5.stop();
    music6.stop();
  } else if (keyCode === LEFT_ARROW) {
    state = 4;
    music1.stop();
    music2.stop();
    music3.stop();
    music4.stop();
    music5.stop();
    music6.stop();
  } else if (keyCode === RIGHT_ARROW) {
    state = 5;
    music1.stop();
    music2.stop();
    music3.stop();
    music4.stop();
    music5.stop();
    music6.stop();
  } else if (keyCode === 32) {
    state = 6;
    music1.stop();
    music2.stop();
    music3.stop();
    music4.stop();
    music5.stop();
    music6.stop();
  }
}

function classicSongScreen() {
  background(190);
  //music1.play();
  //music1.loop = true;
  fill(0);
  textSize(60);
  textFont('DIN');
  text("9 to 5", width / 2, 60);
}

function metalSongScreen() {
  background(0);
  // music2.loop = true;
  // setVolume(0.5);
  // music2.play();
  fill(255);
  textSize(60);
  textFont('Krungthep');
  text("Feel Invincible", width / 2, 60);
}

function rockSongScreen() {
  background(229, 57, 53);
  //music3.loop = true;
  //music3.play();
  fill(0);
  textSize(60);
  textFont('Gill Sans');
  text("Rock This Town", width / 2, 60);
}

function popSongScreen() {
  background(250, 211, 225);
  //music4.loop = true;
  //music4.play();
  fill(0);
  textSize(60);
  textFont('Bookerly Display');
  text("Happier", width / 2, 60);
}

function CountrySongScreen() {
  background(224, 196, 153);
  //music5.loop = true;
  //music5.play();
  fill(0);
  textSize(60);
  textFont('Bookerly');
  text("Country Boy", width / 2, 60);
  text("(Shake It For Me)", width / 2, 120)
}

function CelticSongScreen() {
  background(133, 200, 136);
  //music6.loop = true;
  //music6.play();
  fill(0);
  textSize(60);
  textFont('Apple Chancery');
  text("Ballroom of Romance", width / 2, 60);
}
