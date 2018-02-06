var centerX = 100;
var centerY = 200;
var backgroundColor = 'white';

var button;
var noseColor = "black";

var sel;
var eyeColor = "black";

function setup() {

   createCanvas(400,400);
   background(255);
   button = createButton("Click me");
   button.mousePressed(changeBG);
   button2 = createButton("red");
   button.mousePressed(function() {

      noseColor = "red";



   });

sel = createSelect();
sel.option("blue");
sel.option("green");
sel.option("brown");
sel.changed(function(){

eyeColor = sel.value(); 

});


 }




function draw() {

   background(backgroundColor);
   centerX = mouseX;
   centerY = mouseY;

   stroke(0);
   strokeWeight(1);

   fill(eyeColor);
   rect(centerX-150,centerY-100,100,100);
   //eye1
   var xOffset = map(mouseX, 0, width, -20, 10);
   var yOffset = map(mouseY, 0, height, -20, 10);

   console.log("yOffset: " + yOffset + " xOffset: " + xOffset);
   fill(eyeColor);

   ellipse(centerX-100 + xOffset, centerY-50 + yOffset,50,50);
   rect(centerX+25, centerY-100, 100, 100);
   fill(eyeColor);
   //eye2
   ellipse(centerX+75 + xOffset, centerY-50 + yOffset, 50, 75);

   stroke(125);
   strokeWeight(5);

   point(centerX, centerY);
   stroke(255,0,0);
   line(centerX-50, centerY+50, centerX+50, centerY+50);

   noStroke();
   fill(noseColor);
   triangle(centerX, centerY, centerX+25, centerY+25, centerX-25, centerY+25);

   //ellipse(150,150,50,50);
   //rect(210,100,100,100);
   //ellipse(260,150,50,50);

  // put drawing code here
}

function mousePressed() {

  backgroundColor = "blue";


}

function mouseReleased() {

  backgroundColor = "red";

}

function changeBG() {

  noseColor = "green";
}
