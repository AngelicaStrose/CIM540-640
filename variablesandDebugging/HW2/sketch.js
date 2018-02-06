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




/*
   #background(0);
   #centerX = mouseX;
   #centerY = mouseY;
   #stroke(125);
   #strokeWeight(5);
   #rect(centerX, centerY, 300, 300);
  /*
   #fill("white");

   #rect(centerX-150,centerY-100,100,100);
   #ellipse(centerX-100, centerY-50,50,50);
   #rect(centerX+25, centerY-100, 100, 100);
   #ellipse(centerX+75, centerY-50, 50, 75);

   #stroke(125);
   #strokeWeight(5);

   #point(centerX, centerY);
   #stroke(255,0,0);
   #line(centerX-50, centerY+50, centerX+50, centerY+50);

   #noStroke();
   #fill(0,0,255);
   #triangle(centerX, centerY, centerX+25, centerY+25, centerX-25, centerY+25);

   //ellipse(150,150,50,50);
   //rect(210,100,100,100);
   //ellipse(260,150,50,50);

  // put drawing code here
  */
}
