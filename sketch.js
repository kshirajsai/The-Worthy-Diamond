var spookyRoom, mazeBackground, diamond, diamondIMG, skyIMG
var security
var system
var gameState = 0
var score = 0
var mainPlayer
var mainPlrImg
var mainPlayerFinal, diamondFinal
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16
var wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31
var wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45


const accessCode1 = "DIAMOND"
const accessCode2 = "PYTHON"
const accessCode3 = "GLOVE"
const accessCode4 = "AGE"

function preload(){
  spookyRoom = loadImage("images/Spooky room.jpeg")
  mazeBackground = loadImage("images/Maze Background.jpeg");
  mainPlrImg = loadImage("images/Clipart_boy.png");
  diamondIMG = loadImage("images/Diamond pic.png");
  skyIMG = loadImage("images/Cloud,sky.jpeg");
}

function setup(){
createCanvas(1450, 700)
security = new Security()
system = new System()

diamond = createSprite(690,620)
diamond.addImage(diamondIMG);
diamond.scale = 0.3
diamond.visible = false

mainPlayer = createSprite(650,100,50,27)
mainPlayer.addImage(mainPlrImg)
mainPlayer.scale = 0.08
mainPlayer.visible = false

}

function draw(){
background(spookyRoom);

clues();
security.display();



if(score === 4) {
 gameState = 1
}

if(gameState === 1){
  clear()
  background(mazeBackground);
   wall1 = createSprite(400,350,10,500)
  wall1.shapeColor = "black"
   wall2 = createSprite(505,100,220,10)
  wall2.shapeColor = "black"
   wall3 = createSprite(525,600,260,10) 
  wall3.shapeColor = "black"
   wall4 = createSprite(1000,350,10,500) 
  wall4.shapeColor = "black"
   wall5 = createSprite(850,100,310,10)
  wall5.shapeColor = "black"
   wall6 = createSprite(870,600,270,10)
  wall6.shapeColor = "black"
   wall7 = createSprite(430,225,70,10) 
  wall7.shapeColor = "black"
   wall8 = createSprite(520,150,70,10) 
  wall8.shapeColor = "black"
   wall9 = createSprite(555,180,10,70) 
  wall9.shapeColor = "black"
   wall10 = createSprite(690,210,270,10); 
  wall10.shapeColor = "black"
   wall11 = createSprite(600,215,10,140);
  wall11.shapeColor = "black"
   wall12 = createSprite(880,275,10,140);
  wall12.shapeColor = "black"
   wall13 = createSprite(900,200,50,10);
  wall13.shapeColor = "black"
   wall14 = createSprite(930,180,10,50);
  wall14.shapeColor = "black"
   wall15 = createSprite(900,300,50,10);
  wall15.shapeColor = "black"
   wall16 = createSprite(920,420,10,240);
  wall16.shapeColor = "black"
   wall17 = createSprite(900,540,50,10);
  wall17.shapeColor = "black"
   wall18 = createSprite(820,550,10,100);
  wall18.shapeColor = "black"
   wall19 = createSprite(730,580,10,50);
  wall19.shapeColor = "black"
   wall20 = createSprite(710,560,50,10);
  wall20.shapeColor = "black"
   wall21 = createSprite(680,540,10,50);
  wall21.shapeColor = "black"
   wall22 = createSprite(700,520,50,10);
  wall22.shapeColor = "black"
   wall23 = createSprite(730,475,10,100);
  wall23.shapeColor = "black"
   wall24 = createSprite(650,230,10,50);
  wall24.shapeColor = "black"
   wall25 = createSprite(790,430,120,10);
  wall25.shapeColor = "black"
   wall26 = createSprite(850,450,10,50);
  wall26.shapeColor = "black"
   wall27 = createSprite(670,250,50,10);
  wall27.shapeColor = "black"
   wall28 = createSprite(690,330,10,170);
  wall28.shapeColor = "black"
   wall29 = createSprite(660,410,50,10);
  wall29.shapeColor = "black"
   wall30 = createSprite(630,500,10,190);
  wall30.shapeColor = "black"
   wall31 = createSprite(980,250,50,10);
  wall31.shapeColor = "black"
   wall32 = createSprite(730,350,80,10);
  wall32.shapeColor = "black"
   wall33 = createSprite(500,550,10,100);
  wall33.shapeColor = "black"
   wall34 = createSprite(500,300,100,10)  
  wall34.shapeColor = "black"
   wall35 = createSprite(450,345,10,100)
  wall35.shapeColor = "black"
   wall36 = createSprite(520,400,150,10)
  wall36.shapeColor = "black"
   wall37 = createSprite(480,350,50,10)
  wall37.shapeColor = "black"
   wall38 = createSprite(600,355,10,100);
  wall38.shapeColor = "black"
   wall39 = createSprite(600,500,50,10);
  wall39.shapeColor = "black"
   wall40 = createSprite(720,310,60,10);
  wall40.shapeColor = "black"
   wall41 = createSprite(745,280,10,50);
  wall41.shapeColor = "black"
   wall42 = createSprite(765,250,50,10);
  wall42.shapeColor = "black"
   wall43 = createSprite(700,190,10,40);
  wall43.shapeColor = "black"
   wall44 = createSprite(720,175,50,10);
  wall44.shapeColor = "black"
   wall45= createSprite(820,180,10,50);
  wall45.shapeColor = "black"

  mainPlayer.visible = true 
  diamond.visible = true

  mainPlayer.collide(wall1)
  mainPlayer.collide(wall2)
  mainPlayer.collide(wall3)
  mainPlayer.collide(wall4)
  mainPlayer.collide(wall5)
  mainPlayer.collide(wall6)
  mainPlayer.collide(wall7)
  mainPlayer.collide(wall8)
  mainPlayer.collide(wall9)
  mainPlayer.collide(wall10)
  mainPlayer.collide(wall11)
  mainPlayer.collide(wall12)
  mainPlayer.collide(wall13)
  mainPlayer.collide(wall14)
  mainPlayer.collide(wall15)
  mainPlayer.collide(wall16)
  mainPlayer.collide(wall17)
  mainPlayer.collide(wall18)
  mainPlayer.collide(wall19)
  mainPlayer.collide(wall20)
  mainPlayer.collide(wall21)
  mainPlayer.collide(wall22)
  mainPlayer.collide(wall23)
  mainPlayer.collide(wall24)
  mainPlayer.collide(wall25)
  mainPlayer.collide(wall26)
  mainPlayer.collide(wall27)
  mainPlayer.collide(wall28)
  mainPlayer.collide(wall29)
  mainPlayer.collide(wall30)
  mainPlayer.collide(wall31)
  mainPlayer.collide(wall32)
  mainPlayer.collide(wall33)
  mainPlayer.collide(wall34)
  mainPlayer.collide(wall35)
  mainPlayer.collide(wall36)
  mainPlayer.collide(wall37)
  mainPlayer.collide(wall38)
  mainPlayer.collide(wall39)
  mainPlayer.collide(wall40)
  mainPlayer.collide(wall41)
  mainPlayer.collide(wall42)
  mainPlayer.collide(wall43)
  mainPlayer.collide(wall44)
  mainPlayer.collide(wall45)

  


  if(keyDown("UP")){
    mainPlayer.y -= 10
  }
 
  if(keyDown("DOWN")){
    mainPlayer.y += 10
  }

  if (keyDown("RIGHT")){
    mainPlayer.x += 10
  }

  if (keyDown("LEFT")){
    mainPlayer.x -= 10
  }

  if(mainPlayer.isTouching(diamond)){
    gameState = 2
  }

 
}

if (gameState == 2){
  background(skyIMG)

  mainPlayerFinal = createSprite(200,400);
  mainPlayerFinal.addImage(mainPlrImg);

  diamondFinal = createSprite(280,450)
  diamondFinal.addImage(diamondIMG);

  textSize(30)
  fill("black")
  text("CONGRATULATIONS!!!", 550,50) 
  text("You have saved your family by collecting the precious diamond!",300,80)

 


}

drawSprites();
}

function clues(){
  fill("white")
  textSize(15);
  text("What is very shiny and very costly?",100,50);
  fill("cyan")
  text("Hint : This is required to beat the game, or to save your family...", 100, 70)

  fill("white")
  textSize(15);
  text("Which is the coding platform that is also the name of an animal?",750,50);
  fill("cyan")
  text("Hint : T H P O Y N", 750,70)

  fill("white")
  textSize(15);
  text("What has 5 fingers but is a Non-living object?",750,500);
  fill("cyan")
  text("Hint :  E O G V L", 750,520)

  fill("white")
  textSize(15);
  text("What goes up, but never comes down?",100,500);
  fill("cyan")
  text("Hint : G A E", 100,520)

  fill("cyan")
  textSize(25);
  text("Your family is capured by some kidnappers! In order to save them you need to solve these riddles, ",180,250)
  text("and finish the maze to acquire the WORTHY DIAMOND!!",350,280)
}
