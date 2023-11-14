let state = 0;
let music1;
let music2;
let music3;
let music4;
let music5;
let music6;

function preload() {
  // music1 = loadSound("9 to 5.mp3");
  // music2 = loadSound("Feel Invincible.mp3");
  // music3 = loadSound("Rock This Town.mp3");
  // music4 = loadSound("Happier.mp3");
  // music5 = loadSound("Country Boy (Shake It For Me).mp3");
  // music6 = loadSound("Ballroom Of Romance.mp3");
  
}

function setup() {
  createCanvas(800,600);
  state = 0;
  textAlign(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(255);
  if (state == 0) {
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
  background(255);
  fill(0);
  textSize(60);
  textFont('Muloka Kerash');
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
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    state = 2;
  } else if (keyCode === DOWN_ARROW) {
    state = 3;
  } else if (keyCode === LEFT_ARROW) {
    state = 4;
  } else if (keyCode === RIGHT_ARROW) {
    state = 5;
  } else if (keyCode === 32) {
    state = 6;
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
  //music2.loop = true;
  //music2.play();
  fill(255);
  textSize(60);
  textFont('Metalista');
  text("Feel Invincible", width / 2, 60);
}

function rockSongScreen() {
  background(229, 57, 53);
  //music3.loop = true;
  //music3.play();
  fill(0);
  textSize(60);
  textFont('Rockinline');
  text("Rock This Town", width / 2, 60);
}

function popSongScreen() {
  background(250, 211, 225);
  //music4.loop = true;
  //music4.play();
  fill(0);
  textSize(60);
  textFont('mvboli');
  text("Happier", width / 2, 60);
}

function CountrySongScreen() {
  background(224, 196, 153);
  //music5.loop = true;
  //music5.play();
  fill(0);
  textSize(60);
  textFont('barbaro punta');
  text("Country Boy", width / 2, 60);
  text("(Shake It For Me)", width / 2, 120)
}

function CelticSongScreen() {
  background(133, 200, 136);
  //music6.loop = true;
  //music6.play();
  fill(0);
  textSize(60);
  textFont('CELTG');
  text("Ballroom of Romance", width / 2, 60);
}
