var centerX = 300;
var centerY = 300;


function setup() {

   createCanvas(400,400);
   background(255);

     // put setup code here
}

function draw() {
stroke(135,200,42);
strokeWeight(10);
fill(135,200,42);
rect(centerX-200, centerY-250, 200, 300, 350);
stroke(1);
strokeWeight(10);
fill(1);
triangle(70, 150, 170, 40, 86, 55);
stroke(1);
strokeWeight(50);
point(68,45);
stroke(255);
point(150, 175);
point(240, 175);
strokeWeight(2);
line(125, 250, 275, 250);


}
