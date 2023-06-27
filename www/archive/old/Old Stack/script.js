//Lukas Krampitz
//Semester 1 2019
//A Javascript P5 stacking game

//keeps track of time elapsed
var timerValue = 0;

//canvas dimentions
canvasWid = 640;
canvasHei = 700;

function preload() {
  athletica = loadFont('Athletic.ttf');
  arial = loadFont('Arial.ttf');
}

function setup() {
  createCanvas(canvasWid, canvasHei);
  canvas.style = "position:relative; left: 32.5%; width: 35%;";
  
  setInterval(timeIt, 1000); //need to make the timer work
}

//-----var setup-----
var clickMade = false; //has the user made a full click?
var mode = 0; //mode 0 is menu, mode 1 is the game and mode 2 is game over

var lives = 1;
var score = 0;
var difficulty = 1; //the number of lives given

var brickApearTime = 5; //time in seconds until the next brick
var fallingSpeed = 1; //speed of the falling bricks
var lastAddTime = 0; //the time the last brick was add. This controls how many get added in the 1 second adition window. It should be 1.
var lastSpeedTime = 0;

var brickWid = 100;
var brickHei = 50;
var brickErrorMargin = brickHei / 20; //a 10% error margin for detecting adding a block to the stack
var maxStack = 6; //what is the most amount of blocks

//the falling bricks array
var fallingBricks = [
  
];
var drawFalling = true; 

//the colour pallet
var coloursOld = [
  [255,0,0],
  [255,128,0],
  [255,255,0],
  [0,255,0],
  [0,128,0],
  [0,255,255],
  [0,128,255],
  [50,0,255],
  [128,0,255],
  [255,0,255]
];

//the colour pallet
var colours = [
  '#6D246C',
  '#770029',
  '#772B36',
  '#EF946C',
  '#9B6981'
];

//the stack array
var stack = [
  {brickOffX: 0,
  brickOffY: 0,
  colour: '#770029'}
];
var stackTop; //the y pos of the top of the stack plus on brick to check to see if the stack shoul be expanded
var brickDist; //the distance from the brick to the stack
var newBrickOffY; //the new offset for the newst stack member

//----------the draw funtion----------

function draw() {

  if (mode === 0) { //mode 0, the start menu
    //only draw this if there has not been a click

    cursor();

    //console.log("X: " + mouseX + "\nY: " + mouseY + "\n")

    textFont(athletica);

    fill(0,0,0);
    noStroke();
    rect(0,0,canvas.width,canvas.height);

    fill(255);
    textSize(130);
    text("Menu",180,120);

    textSize(65);
    text("Select a Difficulty",60,300);

    //check for the mouse over "normal"
    if (mouseX > 60 && mouseX < 280 && mouseY > 330 && mouseY < 430) {
      fill(0,255,0);
      stroke(0,255,0);
      //check for a click
      if (clickMade) {
        clickMade = false;
        if (mouseButton === LEFT) {
          difficulty = 1;
          mode = 1;

          //reset game
          timerValue = 0;
          lives = difficulty;
          score = 0;
          stack = [
            {brickOffX: 0,
            brickOffY: 0,
            colour: '#770029'}
          ];
          fallingBricks = [

          ];
        }
      }
    } else {
      fill(0,128,0);
      stroke(0,128,0);
    }
    
    //draw the yes button
    text("Normal",70,400);
    noFill();
    strokeWeight(5);
    rect(60,330,220,100);
    noStroke();

    //check for the mouse over "easy"
    if (mouseX > 420 && mouseX < 570 && mouseY > 330 && mouseY < 430) {
      fill(255,0,0);
      stroke(255,0,0);
      //check for a click
      if (clickMade) {
        clickMade = false;
        if (mouseButton === LEFT) {
          difficulty = 3;
          mode = 1;

          //reset game
          timerValue = 0;
          lives = difficulty;
          score = 0;
          stack = [
            {brickOffX: 0,
            brickOffY: 0,
            colour: '#770029'}
          ];
          fallingBricks = [

          ];
        }
      }
    } else {
      fill(128,0,0);
      stroke(128,0,0);
    }

    //draw the no button
    text("Easy", 430,400);
    noFill();
    strokeWeight(5);
    rect(420,330,150,100);
    noStroke();

    //reset the click
    clickMade = false;
  }

  if (mode === 1) { //mode 1, the game
    noCursor();

    var brickX = mouseX - brickWid / 2;
    var brickY = 650;

    //the background
    fill(255,255,255);
    rect(0,0,canvas.width,canvas.height);

    //setup
    strokeWeight(0);
    fill(255,0,0);

    //calculate the height of the top block in the stack
    stackTop = (canvas.height - brickHei) - (brickHei * stack.length);
    strokeWeight(2);
    stroke(0,0,0);
    line(0, stackTop, canvas.width, stackTop);

    stroke(0,0,0);
    strokeWeight(1);

    //check to see if there are even any laffing blocks before the rest
    if (fallingBricks.length !== 0) {  
      //draw the falling blocks
      for (var i = 0; i < fallingBricks.length; i++) {

        //check for stacking and collision
        if (fallingBricks[i].y > stackTop && fallingBricks[i].y < stackTop + brickErrorMargin ) { //check to see if a brick is at stacking height
          //calculate the distance from the brick to the stack in x axis
          brickDist = (brickX + stack[stack.length - 1].brickOffX) - fallingBricks[i].x;

          if (abs(brickDist) < brickWid) { //check to see if the brick is also eligable to stack

            //since it is stop drawing it
            drawFalling = false;

            //find the new brickOffY
            newBrickOffY = (stack[stack.length - 1].brickOffY) + brickHei;

            //add it to the stack
            stack.push(
              {brickOffX: stack[stack.length - 1].brickOffX - brickDist,
              brickOffY: newBrickOffY, colour: fallingBricks[i].colour}
            );

            //remove the new added stack member from the falling block array
            fallingBricks.splice(i,1);

            //add 1 to the score
            score++;
          } else {
            drawFalling = true;
          }
        } else {
          drawFalling = true;
        }
        
         if (drawFalling) { //if the falling block can't stack then draw it. This stops a wierd bug where the stack disapears. In short this ensure there is always a falling brick if it looks for one
        
          //set the colour
          fill(fallingBricks[i].colour);
          //draw the falling blocks
          rect(fallingBricks[i].x,fallingBricks[i].y, brickWid, brickHei);

          //move the brick down
          fallingBricks[i].y += fallingSpeed;

          //check for a brick going off screen and removing It. If this happens remove a life
          if (fallingBricks[i].y > canvasHei) {
            fallingBricks.splice(i,1);
            lives--;
          }
        }
      }
    }

    stroke(0,0,0);
    strokeWeight(1);

    //drawing each block in the stack
    for (var i = 0; i < stack.length; i++) {
      //set the colour bassed of of the array
      fill(stack[i].colour);
      //fill(0,0,255);
      rect(brickX + stack[i].brickOffX, brickY - stack[i].brickOffY, brickWid, brickHei);
    }

    //the border
    strokeWeight(10);
    fill(230,230,230,.5);
    rect(0,0,canvas.width, canvas.height);

    //adding a new falling brick at the intervals in seconds from brickApearTime
    if (timerValue % brickApearTime === 0) {    
      //check if a brick has already been added for the current time, if no add one
      if (lastAddTime!== timerValue) {
        //record the time
        lastAddTime = timerValue;

        //generate a random x pos for the brick
        var randPosX = random(0, (canvas.width - brickWid)) ;

        //pick a colour randomly from the list
        var randColour = random(colours);

        //add the brick //do it high up so that there will alaway be a new block, you just can't see it
        append(fallingBricks, {x: randPosX, y: 0 - brickHei, colour: randColour});
      }
      
    }

    //speed up the falling bricks
    if (timerValue !== 0 && timerValue % 15 === 0) {
      //check to see if it has already sped up
      if (lastSpeedTime !== timerValue) {
        lastSpeedTime = timerValue; //set it so it only runs once

        //increse speed along as its below the max
        if (fallingSpeed < 13) {       
          fallingSpeed++;

          //check to see if the tollarance for stacking needs to increased
          if (fallingSpeed >= brickErrorMargin) {
            brickErrorMargin = brickErrorMargin * 2; //double the amount of error
          }

          //increase spawn rate
          if (brickApearTime > 1) {
            brickApearTime--;
          }
        }
      }

    }

    //just make the player wait its too much. I have no clue as to how I could do this
    // //at the start of the game add a whole bunch to reduce waiting time
    // if (timerValue === brickApearTime) {
    //   //check to see if the mass add has already happend
    //   if (startMassAdd === false) {
    //     startMassAdd = true;

    //     //add a whole bunch. Only add bricks up to the normal spawn point
    //     for (var i = 0; i < canvas.height / 2; i+=brickHei*2) {

    //       //generate a random x pos for the brick
    //       var randPosX = random(0, (canvas.width - brickWid)) ;

    //       //add the brick
    //       append(fallingBricks, {x: randPosX, y: (0 - (i)) });
    //     }
    //   }
    // }

    //check to see if the stack size should be reduced
    if (stack.length > maxStack) {
      //remove the first block in the stack, the bottom
      stack.splice(0,1);

      //go down the stack and reduce the y offset
      for (var i = 0; i < stack.length; i++) {
        stack[i].brickOffY -= brickHei;
      }
    }

    //check to see if the player has Died
    if (lives < 1) {
      //kill the game/switch modes
      //reset game
      timerValue = 0;
      lives = difficulty;
      score = 0;
      stack = [
        {brickOffX: 0,
        brickOffY: 0,
        colour: '#770029'}
      ];
      fallingBricks = [

      ];

      mode = 2;
    }

    //reset the click
    clickMade = false;

    //the ui/HUD
    fill(0);

    textFont(athletica);
    textSize(canvas.width/15);
    noStroke();
    text("Time: " + timerValue,15,50);
    text("Score: " + score,15,100);

    //show the lives
    text("Lives: " + lives, 500,50);
  }

  if (mode === 2) { //mode 2, the end scene and also the death scene

    cursor();

    textFont(arial);

    fill(0,0,0);
    noStroke();
    rect(0,0,canvas.width,canvas.height);

    fill(255);
    textSize(canvas.width/5);
    text("You Died",62,120);

    textSize(canvas.width/10);
    text("Play again?",162,300);

    //check for the mouse over "yes"
    if (mouseX > 130 && mouseX < 270 && mouseY > 330 && mouseY < 430) {
      fill(0,255,0);
      stroke(0,255,0);
      //check for a click
      if (clickMade) {
        clickMade = false;
        if (mouseButton === LEFT) {
          mode = 1;
          timerValue = 0;
          lives = difficulty;
          score = 0;
          stack = [
            {brickOffX: 0,
            brickOffY: 0,
            colour: '#770029'}
          ];
          fallingBricks = [
  
          ];
        }
      }
    } else {
      fill(0,128,0);
      stroke(0,128,0);
    }
    
    //draw the yes button
    text("Yes",145,400);
    noFill();
    strokeWeight(5);
    rect(130,330,140,100);
    noStroke();

    //check for the mouse over "no"
    if (mouseX > 380 && mouseX < 520 && mouseY > 330 && mouseY < 430) {
      fill(255,0,0);
      stroke(255,0,0);
      //check for a click
      if (clickMade) {
        clickMade = false;
        if (mouseButton === LEFT) {
          //got to menu
          mode = 0;
        }
      }
    } else {
      fill(128,0,0);
      stroke(128,0,0);
    }

    //draw the no button
    text("No", 410,400);
    noFill();
    strokeWeight(5);
    rect(380,330,140,100);
    noStroke();

    //reset the click
    clickMade = false;
  }
}

function timeIt() {
  if (timerValue >= 0) {
    timerValue++;
  }
}

function mouseClicked() {
  clickMade = true;
}