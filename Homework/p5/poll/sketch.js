
var choices = {

  "kitkat" : [0,40,75, "red"], //0 stands for results, next 2 are cordinates
  "cake" : [0,100,75, "green"],
  "icecream" : [0,40,75, "blue"],
  "donuts" : [0,260,75, "purple"]


};







function setup() {
  createCanvas(400,200);

  console.log(choices);
  console.log(choice["kitkat"]);
  console.log(choices["kitkat"][3]);


    for (keys in choices) {

      console.log(keys + ":" + choices[keys]);

    }
}

function draw() {

  background(255);

  for(keys in choices) {

  fill(choices[keys][3]);
  ellipse(choices[keys][1], choices[keys][2], choices[keys][0], choices["kitkat"][0]);
  fill(0);
  textAlign(CENTER);
  text(keys, choices[keys][1], choices[keys][2]-20); // put drawing code here
  text(choices[keys][0], choices[keys][1], choices[keys][2]+100);
  }
}

function mousePressed() {

  for(keys in choices) {
    var curDist = dist(mouseX, mouseY, choices[keys][1], choices[keys][2]);
    if(curDist < 20) {
      choices[keys][0]++;

    }

  }

}
