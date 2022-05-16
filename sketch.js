let r,g,b;

function preload(){
  img01 = loadImage('images/rikiya.png');
  img02 = loadImage('images/IMG_2538.PNG');
  img03= loadImage('images/pngegg.png');
  img04= loadImage('images/human.png');
  img05= loadImage('images/pika.png');
}

function setup() {
  createCanvas(360, 360);
  background(255);
  r = random(255);
  g = random(255);
  b = random(255);
  noLoop();
  imageMode(CENTER);
}

function draw() {
  for (let i = 0; i < 9000; i++){
    fill(random(255),random(255),random(255),random(255));
    stroke(r,g,b);
    image(img02,310,85,180,220);
    image(img04,150,110,230,230);
    image(img03,60,130,200,290);
    image(img05,20,260,300,300);
    image(img01,210,210,300,390);
    rect(random(360), random(360), random(100));
    ellipse(random(360), random(360),random(100));
    triangle(random(160), random(160), random(280), random(250), random(350), random(360),random(100));
  }
}