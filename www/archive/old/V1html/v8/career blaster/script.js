var posx;
var posy;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth/1.25;
canvas.height = window.innerWidth/2.4;

//Images
mapImg = new Image();
mapImg.src = "map.png";
startImg = new Image();
startImg.src = "startScreen.png";
lockImg = new Image();
lockImg.src = "lock.png";
circleImg = new Image();
circleImg.src = "circle.png";
place1Img = new Image();
place1Img.src = "place1.png";
place2Img = new Image();
place2Img.src = "place2.png";
place3Img = new Image();
place3Img.src = "place3.png";

//Global Variables
var lock1 = true;
var lock2 = true;
var questionLoopDone = false;
var engineer = 0;
var arts = 0;
var science = 0;
var education = 0;
var trade = 0;
var service = 0;
var english = 0;
var setup = 0;
var score = 0;
var scene = -1;
var question = 1;
var answer = false;
var textSize;
var field = "test";
var point = 0;
var greater = "";
var greatJob = "";
//Main Questions
var engineer1 = "Do you like working with your hands?";
var engineer2 = "Do you like working with computers?";
//var engineer3 = "Do you like drawing?";
//var trade3 = "Do you like electricity?";
var trade2 = "Are you interested in how bathrooms work?";
var trade1 = "Are you good at building and fixing things?";
//var science3 = "Do you like chemicals?";
var science2 = "Are you scared of blood?";
var science1 = "Are you interested in nature?";
var art1 = "Do you like listening to music?";
var art2 = "Are you creative?";
var english1 = "Do you like helping kids?";
var english2 = "Do you like protecting others?";
var service1 = "Are you interested in how foods made?";
var service2 = "Are you good at solving arithmetic problems?";

//Engineering Questions
var engineField1 = "Do you like developing physical solutions?"; //Mechanical Engineering
var engineField2 = "Do you like problem solving?"; //Computer Science
var engineField3 = "Do you like planning & designing buildings?"; //Architect
//Trade Questions
var tradeField1 = "Are you interested in wires?"; //electrician
var tradeField2 = "Are you intrigued by water pipes?"; //plumber
var tradeField3 = "Do you like using tools?"; //mechanic
//Science Questions
var sciField1 = "Do you like performing experiments?"; //chemist
var sciField2 = "Do you want to help the injured?"; //Doctor
var sciField3 = "Are you interested in the universe?"; //physicist
//Art Questions
var artField1 = "Do you like drawing?"; //artist
var artField2 = "Do you like to sing or play instruments?"; //musician
var artField3 = "Do you like to impersonate others?"; //drama
//English Questions
var englishField1 = "Do you like debates?"; // Lawyer
var englishField2 = "Do you like working with others?"; //businessman
var englishField3 = "Do you like to teach others?"; //teacher
//Service Questions
var serviceField1 = "Do you like cooking food?"; //chef
var serviceField2 = "Do you like organizing numbers?"; //cashier
var serviceField3 = "Do you like plane rides?" //flight attendant

var software = 0;
var mechanical = 0;
var architect = 0;

var electrician = 0;
var plumber = 0;
var mechanic = 0;

var chemist = 0;
var doctor = 0;
var physicist = 0;

var artist = 0;
var musician = 0;
var drama = 0;

var lawyer = 0;
var businessman = 0;
var teacher = 0;

var chef = 0;
var cashier = 0;
var flight = 0;


var questionList = [engineer1, engineer2, trade1, trade2, science1, science2, art1, art2, english1, english2, service1, service2];

var engineList = [engineField1, engineField2, engineField3];
var tradeList = [tradeField1, tradeField2, tradeField3];
var sciList = [sciField1, sciField2, sciField3];
var artList = [artField1, artField2, artField3];
var englishList = [englishField1, englishField2, englishField3];
var serviceList = [serviceField1, serviceField2, serviceField3];
setInterval(tick, 1000 / 30);

//the loop that runs all the code
function tick() {
  if (setup == 0){
    start()
  }
  draw();

}
function start(){
  textSize = canvas.width*20/600;
  ctx.font = textSize + "px Georgia";
  ctx.fillStyle = " #FFFFFF";
  setup = 1;
}


function buttonA(){
  if ((scene == 1 && question >0 && question <13)||(scene == 2 && question >= 13 && question <16)){
  answer = true;
  point = 0;
  }
}
function buttonB(){
  if ((scene == 1 && question >0 && question <13)||(scene == 2 && question >= 13 && question <16)){
  answer = true;
  point = 1;
  }
}
function buttonC(){
  if ((scene == 1 && question >0 && question <13)||(scene == 2 && question >= 13 && question <16)){
  answer = true;
  point = 2;
  }
}
function buttonD(){
  if ((scene == 1 && question >0 && question <13)||(scene == 2 && question >=13 && question <16)){
  answer = true;
  point = 3;
  };
}

canvas.onmouseenter = function(event){
  var rect = canvas.getBoundingClientRect();
  canvas.onmousemove = function(event){
    posx = event.clientX - rect.left;
    posy = event.clientY - rect.top; 
  }
}


//Start Screen On Click
canvas.onclick = function(event){
  if (scene == -1){
    scene = 0;
  }
}


//Draw
function draw(){
  count++;

  if (scene == -1){
     startScene();
  }else if (scene == 0){
    scene0();
    locks();
  }else if (scene == 1){
    scene1();
  }else if (scene == 2){
    scene2();
  }else{
    scene3();
  }
}

function locks(){
  if (lock1 == true){
    ctx.drawImage(lockImg, canvas.width/2.1, canvas.height/3.3, canvas.width/23, canvas.width/23);
  }
  if (lock2 == true){
    ctx.drawImage(lockImg, canvas.width/1.35, canvas.height/1.5, canvas.width/23, canvas.width/23);
  }
}


//Scenes
function startScene(){
  ctx.drawImage(startImg, 0, 0, canvas.width, canvas.height);
}

function scene0(){
  ctx.drawImage(mapImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(circleImg, (canvas.width/4.5), (canvas.height/3), canvas.width/23, canvas.width/23);
  ctx.drawImage(circleImg, canvas.width/2.1, canvas.height/3.3, canvas.width/23, canvas.width/23);
  ctx.drawImage(circleImg, canvas.width/1.35, canvas.height/1.5, canvas.width/23, canvas.width/23);
  canvas.onclick = function(event){
    if ((posx >= canvas.width/4.5) && (posx <= canvas.width/3.5) && (posy >= canvas.height/3) && (posy <= canvas.height/2)){
      scene = 1;
    }
    else if ((posx >= canvas.width/2.1) && (posx <= canvas.width/1.1) && (posy >= canvas.height/3.3) && (posy <= canvas.height/2.3) && (lock1 == false)) {
      scene = 2;
    }
    else if ((posx >= canvas.width/1.35) && (posx <= canvas.width/0.35) && (posy >= canvas.height/1.5) && (posy <= canvas.height/0.5) && (lock2 == false)) {
      scene = 3;
    }
  }
}

function scene1(){
    ctx.drawImage(place1Img, 0, 0, canvas.width, canvas.height);
    questionLoop1();
}

function scene2(){
    ctx.drawImage(place2Img, 0, 0, canvas.width, canvas.height);
    questionLoop2();
}

var coins = [
  [500,500,0]
];
bankImg = new Image();
bankImg.src = "bank.jpg";
coinImg = new Image();
coinImg.src = "coin.png";

var count = 0;

var coinX;
var coinY;

var coinDist;

function drawCoin(x,y) {
  ctx.drawImage(coinImg, x, y, canvas.width/20, canvas.width/20);
}

function scene3() {
  ctx.drawImage(bankImg, 0, 0, canvas.width, canvas.height);
  //drawCoin(0,0);
  if (count >= 30) {
    coinX = (Math.random()*canvas.width);
    coinY = (Math.random()*canvas.height);

    var elem = [coinX,coinY,0];
    coins.push(elem);
    count = 0;
  }

  //draw the coins
  for (var i = 0; i < coins.length; i++) {
    drawCoin((coins[i][0]), (coins[i][1]));

    //add to the age
    coins[i][2]++;

    //splice it if the age is too high
    if (coins[i][2] > 60) {
      coins.splice(i,1);
    }

    //coinDist = Math.sqrt( ()    ()   );

    //calculate the distance mouse to coin center
  }

  ctx.fillText("Your best job option is: " + greatJob, canvas.width/4, canvas.height/2);
  ctx.fillText("Score: " + score, 10, 50);
  
}

//Question Set 1
function questionLoop1(){
  if(question == 1){
    ctx.fillText(questionList[question-1], canvas.width/4, canvas.height/2);
    if (answer == true){
      engineer += point;
      question++;
      answer = false;
    }
  }else if(question == 2){
    ctx.fillText(questionList[question-1], canvas.width/4, canvas.height/2);
    if (answer == true){
      engineer += point;
      question++;
      answer = false;
    }
  }else if(question == 3){
    ctx.fillText(questionList[question-1], canvas.width/4, canvas.height/2);
    if (answer == true){
      trade += point;
      question++;
      answer = false;
    }
  }else if(question == 4){
    ctx.fillText(questionList[question-1], canvas.width/4, canvas.height/2);
    if (answer == true){
      trade += point;
      question++;
      answer = false;
    }
  }else if(question == 5){
    ctx.fillText(questionList[question-1], canvas.width/4, canvas.height/2);
    if (answer == true){
      science += point;
      question++;
      answer = false;
    }
  }else if(question == 6){
    ctx.fillText(questionList[question-1], canvas.width/4, canvas.height/2);
    if (answer == true){
      science += point;
      question++;
      answer = false;
    }
  }else if(question == 7){
    ctx.fillText(questionList[question-1], canvas.width/4, canvas.height/2);
    if (answer == true){
      arts += point;
      question++;
      answer = false;
    }
  }else if(question == 8){
    ctx.fillText(questionList[question-1], canvas.width/4, canvas.height/2);
    if (answer == true){
      arts += point;
      question++;
      answer = false;
    }
  }else if(question == 9){
    ctx.fillText(questionList[question-1], canvas.width/4, canvas.height/2);
    if (answer == true){
      english += point;
      question++;
      answer = false;
    }
  }else if(question == 10){
    ctx.fillText(questionList[question-1], canvas.width/4, canvas.height/2);
    if (answer == true){
      english += point;
      question++;
      answer = false;

    }
  }else if(question == 11){
    ctx.fillText(questionList[question-1], canvas.width/4, canvas.height/2);
    if (answer == true){
      service += point;
      question++;
      answer = false;
    }
  }else if(question == 12){
    ctx.fillText(questionList[question-1], canvas.width/4, canvas.height/2);
    if (answer == true){
      service += point;
      question++;
      answer = false;
      lock1 = false;

    }
  }else if(question > 12){
    if (engineer>=arts && engineer>=science && engineer>=education && engineer>=trade && engineer>=service){
      greater = "engineer";
    }else if (arts>=engineer && arts>=science && arts>=education && arts>=trade && arts>=service){
      greater = "arts";
    }else if (service>=arts && service>=science && service>=education && service>=trade && service>=engineer){
      greater = "service";
    }else if (science>=arts && science>=engineer && science>=education && science>=trade && science>=service){
      greater = "science";
    }else if (education>=arts && education>=science && education>=engineer && education>=trade && education>=service){
      greater = "education";
    }else if (trade>=arts && trade>=science && trade>=education && trade>=engineer && trade>=service){
      greater = "trade";
    }
    ctx.fillText("Island two unlocked!", canvas.width/4, canvas.height/2);
    ctx.fillText("Click anywhere to continue", canvas.width/4, (canvas.height/2 + canvas.height/6));
    if (answer == true){
      question++;
      answer = false;
    }
    canvas.onclick = function(event){
      scene = 0;
    }
  }
}

function questionLoop2(){
  if (greater == "engineer"){
    if(question == 13){
    ctx.fillText(engineList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        mechanical += point;
        question++;
        answer = false;
      }
    }else if(question == 14){
      ctx.fillText(engineList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        software += point;
        question++;
        answer = false;
      }
    }else if(question == 15){
      ctx.fillText(engineList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        architect += point;
        question++;
        answer = false;
      }
    }
    if (software>=architect && software>=mechanical){
      greatJob = "Software";
    }if (mechanical>=software && mechanical>=architect){
      greatJob = "Mechanical Engineer";
    }if (architect>=software && architect>=mechanical){
      greatJob = "Architect";
    }
  }else if (greater == "arts"){
    if(question == 13){
    ctx.fillText(artList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        artist += point;
        question++;
        answer = false;
      }
    }else if(question == 14){
      ctx.fillText(artList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        musician += point;
        question++;
        answer = false;
      }
    }else if(question == 15){
      ctx.fillText(artList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        drama += point;
        question++;
        answer = false;
      }
    }
    if (artist>=musician && artist>=drama){
      greatJob = "Musician";
    }else if (drama>=artist && drama>=musician){
      greatJob = "Drama";
    }else if (artist>=drama && artist>=musician){
      greatJob = "Artist";
    }
  }else if (greater == "service"){
    if(question == 13){
    ctx.fillText(serviceList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        chef += point;
        question++;
        answer = false;
      }
    }else if(question == 14){
      ctx.fillText(serviceList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        cashier += point;
        question++;
        answer = false;
      }
    }else if(question == 15){
      ctx.fillText(serviceList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        flight += point;
        question++;
        answer = false;
      }
    }
    if (chef>=cashier && chef>=flight){
      greatJob = "Chef";
    }else if (cashier>=chef && cashier>=flight){
      greatJob = "Cashier";
    }else if (flight>=chef && flight>=cashier){
      greatJob = "Flight Attendant";
    }
  }else if (greater == "science"){
    if(question == 13){
    ctx.fillText(sciList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        chemist += point;
        question++;
        answer = false;
      }
    }else if(question == 14){
      ctx.fillText(sciList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        doctor += point;
        question++;
        answer = false;
      }
    }else if(question == 15){
      ctx.fillText(sciList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        physicist += point;
        question++;
        answer = false;
      }
    }
    if (chemist>=doctor && chemist>=physicist){
      greatJob = "Chemist";
    }else if (doctor>=chemist && doctor>=physicist){
      greatJob = "Doctor";
    }else if (physicist>=doctor && physicist>=chemist){
      greatJob = "Physicist";
    }
  }else if (greater == "education"){
    if(question == 13){
    ctx.fillText(englishList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        lawyer += point;
        question++;
        answer = false;
      }
    }else if(question == 14){
      ctx.fillText(englishList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        businessman += point;
        question++;
        answer = false;
      }
    }else if(question == 15){
      ctx.fillText(englishList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        teacher += point;
        question++;
        answer = false;
      }
    }
    if (lawyer>=teacher && lawyer>=businessman){
      greatJob = "Lawyer";
    }else if (businessman>=teacher && businessman>=lawyer){
      greatJob = "Businessman";
    }else if (teacher>=businessman && teacher>=lawyer){
      greatJob = "Teacher";
    }
  }else if (greater == "trade"){
    if(question == 13){
    ctx.fillText(tradeList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        electrician += point;
        question++;
        answer = false;
      }
    }else if(question == 14){
      ctx.fillText(tradeList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        plumber += point;
        question++;
        answer = false;
      }
    }else if(question == 15){
      ctx.fillText(tradeList[question-13], canvas.width/4, canvas.height/2);
      if (answer == true){
        mechanic += point;
        question++;
        answer = false;
      }
    }
    if (electrician>=plumber && electrician>=mechanic){
      greatJob = "Electrician";
    }else if (plumber>=electrician && plumber>=mechanic){
      greatJob = "Plumber";
    }else if (mechanic>=plumber && mechanic>=electrician){
      greatJob = "Mechanic";
    }
  }
  if(question >= 16){
   ctx.fillText("Island three unlocked!", canvas.width/4, canvas.height/2);
    ctx.fillText("Click anywhere to continue", canvas.width/4, (canvas.height/2 + canvas.height/6));
    if (answer == true){
      answer = false;
    }
    lock2 = false;
    canvas.onclick = function(event){
      scene = 0;
    }
  }
}