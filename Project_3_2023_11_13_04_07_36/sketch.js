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
  background("lavender");
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
