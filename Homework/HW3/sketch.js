var centerX = 300;
var centerY = 300;
var sel;
var hatColor = 'black'

function setup() {

   createCanvas(400,400);
   background(255);

   textSize(32);
   text('Eyes', 275, -5,10, 115);
   sel = createSelect();
   sel.position(350,150);
   sel.option('purple');
   sel.option('red');
   sel.option('pink');

   text('Hat', 275, 25,10, 115);

   sel2 = createSelect();
   sel2.position(350,120);
   sel2.option('blue');
   sel2.option('brown');


  /*
   sel.option('purple');
   sel.option('red');
   sel.option('pink');
   sel.changed()
   */
     // put setup code here
}

function draw() {
stroke(135,200,42);
strokeWeight(10);
fill(135,200,42);
rect(centerX-200, centerY-250, 200, 300, 350);
stroke(sel.value());
strokeWeight(10);
fill(sel.value());
triangle(70, 150, 170, 40, 86, 55);
stroke(sel.value());
strokeWeight(50);
point(68,45);
stroke(sel2.value());
point(150, 175);
point(240, 175);
strokeWeight(2);
line(125, 250, 275, 250);






}
