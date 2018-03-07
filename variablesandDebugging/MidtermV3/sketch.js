var loadBackground;
var counter = 0;
var timeLeft = 10;

function setup() {

   createCanvas(700,500);

   loadBackground = loadImage("assets/TICKredone.png");

   button = createButton('ENTER');
   button.position(310,405);
   button.mousePressed(changeBG);


}


function draw() {

  image(loadBackground, 0,0);


}



function changeBG() {
  button.position(1000,1000);
  loadBackground = loadImage("assets/GameMenu.png");

  mathB = createButton("MATH");
  mathB.position(300,300);
  mathB.mousePressed(mathMenu);
  englishB = createButton("ENGLISH");
  englishB.position(293,350);
  popCultureB = createButton("POP CULTURE");
  popCultureB.position(280,400);
  randomB = createButton ("RANDOM KNOWLEDGE");
  randomB.position(260,450);



//r = 255;


}


function mathMenu() {

loadBackground = loadImage("assets/Black.png");

function timeIt() {
  counter++;
  text(timeLeft - counter, 5, 30);
  fill('white');
  textSize(32);



}
setInterval(timeIt,1000);




mathB.position(1000,1000);
englishB.position(1000,1000);
popCultureB.position(1000,1000);
randomB.position(1000,1000);
setTimeout(failScreen,10000);

}

var math1 = "Sasha bought a sandwich for $6.00, a bag of chips for $1.70, and a drink for $1.80. The tax was $0.75. She gave the cashier $15.00. How much change should Sasha have received?"
var math2 = "Kristin’s mom had to make payments each month to pay off her car. At the end of 12 months she had paid a total of $144 dollars. How much was her monthly payment?";
var math3 = "What's 17 x 5?";
var math4 = "What's 220 / 4?";
var math5 = "What's 1476 + 6294?";

var answer = "";


var questions = [math1, math2, math3, math4, math5];
var options = [["$4.75", "$4.70", "$4.15", "$5.50"], ["$14", "$16", "$12", "$8"], ["80", "85", "90", "75"], ["55", "60", "65", "75"], ["7780", "7790", "7770", "7760"]];
var answers = ["$4.75", "$12", "85", "55", "7770"];

var currQuestion = questions[Math.floor(Math.random()*questions.length)];

text(questions[currQuestion], 100, 100);
fill('white');

//text(answer, 20, 350);


function failScreen() {

loadBackground = loadImage("assets/failScreen.png");

}
