let state = 0;
let music1;
let music2;
let music3;
let music4;
let music5;
let music6;

function preload() {
  music1 = loadSound("9 to 5.mp3");
  music2 = loadSound("Feel Invincible.mp3");
  music3 = loadSound("Rock This Town.mp3");
  music4 = loadSound("Happier.mp3");
  music5 = loadSound("Country Boy (Shake It For Me).mp3");
  music6 = loadSound("Ballroom Of Romance.mp3");
  
}

function setup() {
  createCanvas(400, 400);
  state = 0;
  music.setVolume(0.5);
  textAlign(CENTER);
  imageMode(CENTER);
  resetSketch();
}

function draw() {
  clear();
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
  music.stop();
  background(255);
  fill(0);
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

function classicSongScreen() {
  background(255);
  music1.play();
  fill(0);
  textSize(15);
  text("Country Boy", width / 2, 20);
}

function metalSongScreen() {
  background(255);
  music2.play();
  fill(0);
  textSize(15);
  text("Feel Invincible", width / 2, 20);
}

function rockSongScreen() {
  background(255);
  music3.play();
  fill(0);
  textSize(15);
  text("Rock This Town", width / 2, 20);
}

function popSongScreen() {
  music4.play();
  fill(0);
  textSize(15);
  text("Happier", width / 2, 20);
}

function CountrySongScreen() {
  music5.play();
  fill(0);
  textSize(15);
  text("Country Boy (Shake It For Me)", width / 2, 20);
}

function CelticSongScreen() {
  music6.play();
  fill(0);
  textSize(15);
  text("Ballroom of Romance", width / 2, 20);
}

function resetSketch() {
  
}
