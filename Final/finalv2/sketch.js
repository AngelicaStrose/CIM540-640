var colored;

function setup() {

song = loadSound('assets/song1.mp3');
button = createButton('Click to hear some music!');
button.position(250,0);
button.mousePressed(music);

createCanvas(500,500);

}

function draw() {

noStroke();

//red
fill(255,0,0);
rect(0,0,20,20);

//orange
fill(255,165,0);
rect(0,20,20,20);

//yellow
fill(255,255,0);
rect(0,40,20,20);
//green
fill(0,255,0);
rect(0,60,20,20);
//cyan
fill(0,255,255);
rect(0,80,20,20);
//blue
fill(0,0,255);
rect(0,100,20,20);
//magenta
fill(255,0,255);
rect(0,120,20,20);
//brown
fill(165,42,42);
rect(0,140,20,20);
//white
fill(255);
rect(0,160,20,20);
//black
fill(0);
rect(0,180,20,20);

//clear button
text('Erase',0,220);

}

function mousePressed() {

  if(collide(0,0)) {
    colored = "red";

  }

  else if(collide(0,20)) {
    colored = "orange";
  }

  else if(collide(0,40)) {
    colored = "yellow";
  }

  else if(collide(0,60)) {
    colored = "green";
  }

  else if(collide(0,80)) {
    colored = "cyan";
  }

  else if(collide(0,100)) {
    colored = "blue";
  }

  else if(collide(0,120)) {
    colored = "magenta";
  }

  else if(collide(0,140)) {
    colored = "brown";
  }
  else if(collide(0,160)) {
    colored = "white";
  }
  else if(collide(0,180)) {
    colored = "black";
  }
  else if (collide(0,210)) {
    colored = "white";
  }

}

function mouseDragged() {

    stroke(colored);
  	strokeWeight(10);
  	line(mouseX, mouseY, pmouseX, pmouseY)

}

function collide(x,y) {

if (mouseX >= x && mouseX <= x + 20 && mouseY >= y && mouseY <= y + 20) {
  return true;
}

return false;

}

function music() {

  if (song.isPlaying()) {
    song.stop();

  }

  else {

    song.play();


  }


}
