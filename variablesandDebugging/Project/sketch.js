var button;
var loadBackground;
var loadBackground2;
var loadButton;
var minutes;
var time;



function setup() {



   createCanvas(700,500);




   loadBackground = loadImage("assets/starbg.png");
   loadButton = loadImage("assets/button1.png");
}


function draw() {



  image(loadBackground, 0,0);
  image(loadButton,190,160);

  var clock = 'CLOCK:';
  fill(204,0,102);
  text(clock, 10,10,150,100);
  var minutes = minute();
  var time = second();


  text(minutes, 70,10,70,70);
  text(':', 85, 10,70,70);
  text(time, 90,10,70,70);

}



function mousePressed() {

     var d = dist(mouseX, mouseY, 300, 200);

     if (d < 100) {
       changeBG();

     }

     loadButton = loadImage("assets/transparency.png");

}


function changeBG() {

    loadBackground = loadImage("assets/level1.png");
    image(loadBackground, 0,0);

    if (millis() >= 1500) {
    loadBackground2 = loadImage("assets/level1new.png");
    image(loadBackground2, 0,0);
  }
    // var mil = millis();



}
