var centerX = 250;
var centerY = 250;

var carnival;
var party;
var bgImage;
var carnivalButton;
var partyButton;

function preload() {

  carnival = loadImage("assets/carnival.jpg");
  party = loadImage("assets/party.jpg");

}

function setup() {
    createCanvas(500, 500);
    bgImage = carnival;
    carnivalButton = createButton("Going to Carnival");
    carnivalButton.position(10,10);
    carnivalButton.mousePressed(function() {

      bgImage = carnival;

    })

    partyButton = createButton("Going to Party");
    partyButton.position(10,40);
    partyButton.mousePressed(function() {

      bgImage = party;

    })

}

function draw() {

  background(255);
  image(bgImage,0,0);


  fill(255, 255, 255);

  strokeWeight(1);
  //face
  ellipse(centerX, centerY, 100, 100);
  //nose
  ellipse(centerX, centerY + 10, 20, 20);
  //eyse
  ellipse(centerX - 10, centerY - 10, 10, 20);
  ellipse(centerX + 10, centerY - 10, 10, 20);
  rectMode(CENTER);
  rect(centerX, centerY + 30, 50, 15, 5);
  rect(centerX, centerY + 30, 50, 1, 1);

  noFill();
  strokeWeight(4);
  arc(centerX, centerY, 100, 100, 0, PI);


  if(mouseX < width/2) {

    console.log("Left side of screen");
    stroke("purple");

  }

  else if(mouseX >  width/2) {

    console.log("Right side of screen");
    stroke("blue");

  }

  strokeWeight(30);
  arc(centerX, centerY, 100, 100, PI, TWO_PI);

}
