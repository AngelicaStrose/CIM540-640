var loadBackground;
var loadGameMenu;
var loadBlackScreen;
var counter = 0;
var timeLeft = 10;
var currentBGImage;
var gameMenuBool = false;
var mathMenuBool = false;
var generateButtonsBool = false;
var mathB, englishB, popCultureB, randomB;
var englishMenuBool = false;
var popCultureMenuBool = false;
var randomBool = false;
var timeLeft = 30;
var timeItBool = true;
var mathQuestions = ["Sasha bought a sandwich for $6.00, a bag of chips for $1.70, and a drink for $1.80. The tax was $0.75. She gave the cashier $15.00. How much change should Sasha have received?", "What's 17 x 5?", "What's 1476 + 6294?"];
var mathOptions = [["$4.75", "$4.70", "$4.15", "$5.50"],["80", "85", "90", "75"],["7780", "7790", "7770", "7760"]];
var mathAnswers = ["$4.75", "85", "7770"];

var currQuestion = 0;
var mathAnswer = "";



function preload() {

  loadBackground = loadImage("assets/TICKredone.png");
  loadGameMenu = loadImage("assets/GameMenu.png");
  loadBlackScreen = loadImage("assets/Black.png");
  loadGameOver = loadImage("assets/failScreen.png");


}

function setup() {

   createCanvas(700,500);

   enterButton = createButton('ENTER');
   enterButton.position(310,405);
   enterButton.mousePressed(gameMenu);

   mathB = createButton('MATH');
   mathB.position(1000,1000);

   englishB = createButton('ENGLISH');
   englishB.position(1000,1000);

   popCultureB = createButton('POP CULTURE');
   popCultureB.position(1000,1000);

   randomB = createButton('RANDOM KNOWLEDGE');
   randomB.position(1000,1000);

   currentBGImage = loadBackground;
}


function draw() {


  image(currentBGImage,0,0);

  if (gameMenuBool == true) {
    enterButton.position(1000,1000);

    mathB.mousePressed(mathMenu);
    mathB.position(300,300);

    englishB.mousePressed(englishMenu);
    englishB.position(293,350);

    popCultureB.mousePressed(popCultureMenu);
    popCultureB.position(280,400);

    randomB.mousePressed(randomMenu);
    randomB.position(260,450);


  }

  if (mathMenuBool == true) {
    mathB.position(1000,1000);
    englishB.position(1000,1000);
    popCultureB.position(1000,1000);
    randomB.position(1000,1000);
/*

    text(mathQuestions[currQuestion], 305,140);

    for(var i=0; i < mathQuestions[currQuestion].length; i++) {

      text(mathOptions[currQuestion][i], 50, 250 + (100*i));
      var currDist = dist(mouseX, mouseY, 50,250 + (100*i));

      if(currDist < 20) {

        currOption = i;
        text("Your current option is: " + options[currQuestion][currOption],20,120);

      }

    }
    text(mathAnswer, 20,150);
*/
  }

  if (englishMenuBool == true) {
    mathB.position(1000,1000);
    englishB.position(1000,1000);
    popCultureB.position(1000,1000);
    randomB.position(1000,1000);

  }

  if (popCultureMenuBool == true) {
    mathB.position(1000,1000);
    englishB.position(1000,1000);
    popCultureB.position(1000,1000);
    randomB.position(1000,1000);

  }

  if (randomBool == true) {
    mathB.position(1000,1000);
    englishB.position(1000,1000);
    popCultureB.position(1000,1000);
    randomB.position(1000,1000);

  }

  if(timeItBool==true && mathMenuBool==true) {

    text('Questions', 250, 150);
    text('Answers', 250, 260);
    setInterval(timeIt(), 1000);
    setTimeout(failScreen,30000);



  }

  if(timeItBool==true && englishMenuBool==true) {

    text('Questions', 250, 150);
    text('Answers', 250, 260);

    setInterval(timeIt(), 1000);
    setTimeout(failScreen,30000);



  }

  if(timeItBool==true && randomBool==true) {
    text('Questions', 250, 150);
    text('Answers', 250, 260);

    setInterval(timeIt(), 1000);
    setTimeout(failScreen,30000);



  }

  if(timeItBool==true && popCultureMenuBool==true) {

    text('Questions', 250, 150);
    text('Answers', 250, 260);

    setInterval(timeIt(), 1000);
    setTimeout(failScreen,30000);



  }


}





function gameMenu() {

    gameMenuBool = true;
    currentBGImage = loadGameMenu;
    //generateButtonsBool = false;

}

function mathMenu() {

  mathMenuBool = true;

  mathB.position(1000,1000);
  englishB.position(1000,1000);
  popCultureB.position(1000,1000);
  randomB.position(1000,1000);

  currentBGImage = loadBlackScreen;



}


function englishMenu() {

 englishMenuBool = true;

  mathB.position(1000,1000);
  englishB.position(1000,1000);
  popCultureB.position(1000,1000);
  randomB.position(1000,1000);

  currentBGImage = loadBlackScreen;



}


function popCultureMenu() {

  popCultureMenuBool = true;

  mathB.position(1000,1000);
  englishB.position(1000,1000);
  popCultureB.position(1000,1000);
  randomB.position(1000,1000);

  currentBGImage = loadBlackScreen;

}

function randomMenu() {

  randomBool = true;

  mathB.position(1000,1000);
  englishB.position(1000,1000);
  popCultureB.position(1000,1000);
  randomB.position(1000,1000);

  currentBGImage = loadBlackScreen;

}

function timeIt() {

  var counter=0;
  counter++;
  text(timeLeft - counter, 5, 30);
  fill('white');
  textSize(32);




}

function failScreen() {

currentBGImage = loadGameOver;

}

/*
function gameMenuFunction() {
    if (gameMenu == true) {
        gameMenu = false;

    } else {

        gameMenu = true;

    }
}
*//*
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
ok so

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
*/
