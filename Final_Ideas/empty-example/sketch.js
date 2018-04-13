var slider;
var angrySong1;
var button1;
var angrySongBool = false;
var val;
//var sp = getSpotifyApi(1);
//var models = sp.require("sp://import/scripts/api/month")

function preload() {

angrySong1 = loadSound('assets/Sail.mp3')

}


function setup() {

createCanvas(600,800);
colorMode(HSB);
slider = createSlider(0,360,60, 80);
slider.position(156, 630);








}

function draw() {


  if (angrySongBool == true) {

    button1 = createButton('PLAY');
    button1.position(195, 650);
    button1.mousePressed(angrySong);



  }



  val = slider.value();
  background(val,100,100, 1);


  text(slider.value(), 50,50);  //for debug purposes




}

function angrySong() {

  if (slider.value() = 0) {

    angrySongBool = true;

  }

  if(angrySong1.isPlaying() ) {

    angrySong1.stop();

  }

  else {

  angrySong1.play();

}



}
