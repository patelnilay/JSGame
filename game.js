let player1;
let player2;
let player3;
var bomb;
let bombGroup;




function preload(){
  player1_img = loadImage("Unit 14 Game/Emojis/1f435.png");
  player2_img = loadImage("Unit 14 Game/Emojis/1f436.png");
  player3_img = loadImage("Unit 14 Game/Emojis/1f439.png");
  bombs_img = loadImage("Unit 14 Game/Emojis/1f525.png");
}
// function that creates players, in order to use cretae player
function createPlayer(sprite){
  player = createSprite()
  player.addImage(sprite)
  return player
}

//allows players to move, assigned to arrows keys, [W.A.S.D] keys and [O,K,L,;] keys
function move(){
  let speed = 0.3
  let maxSpeed = 2
  if (keyIsDown(LEFT_ARROW)) {
    player1.addSpeed(speed, 180);

  }

  if (keyIsDown(RIGHT_ARROW)) {
    player1.addSpeed(speed, 0);

  }

  if (keyIsDown(65)) {
    player2.addSpeed(speed, 180);

  }

  if (keyIsDown(68)) {
    player2.addSpeed(speed, 0);

  }


  if (keyIsDown(74)) {
    player3.addSpeed(speed, 180);

  }

  if (keyIsDown(76)) {
    player3.addSpeed(speed, 0);

  }

}




function setup() {
  canvas = createCanvas(800,800)
  bombGroup = new Group();
  player1 = createPlayer(player1_img)
  player1.scale = 0.5
  player1.position.x = 40
  player1.position.y = 760
  player1.friction = 0.04;
  player2 = createPlayer(player2_img)
  player2.scale = 0.5
  player2.position.x = 400
  player2.position.y = 760
  player2.friction = 0.04;
  player3 = createPlayer(player3_img)
  player3.scale = 0.5
  player3.position.x = 750
  player3.position.y = 760
  player3.friction = 0.04
  bomb1 = createBomb(bombs_img)
  bomb1.position.x = random(0,800)
  bomb1.position.y = 0
  bomb2 = createBomb(bombs_img)
  bomb2.position.x = random(0,800)
  bomb2.position.y = 0
  bomb3 = createBomb(bombs_img)
  bomb3.position.x = 0
  bomb3.position.y = 0
  bomb4 = createBomb(bombs_img)
  bomb4.position.x = random(0,800)
  bomb4.position.y = 0
  bomb5 = createBomb(bombs_img)
  bomb5.position.x = random(0,800)
  bomb5.position.y = 0




}

function canvasCollision(sprite){
  if (sprite.position.x < 0) { //off left of window
    sprite.position.x = canvas.width;
  }
  if (sprite.position.x > canvas.width) { //off right of window
    sprite.position.x = 0;
  }
}

function bombCanvasCollision(sprite){
  if (sprite.position.y > 100) { //off bottom of canvas
    sprite.position.y += 20
  }
}


function createBomb(sprite){
  bomb = createSprite()
  bomb.addImage(sprite)
  bomb.scale = 0.2
  bombGroup.add(bomb)
  return bomb
}

function draw() {
background(0);
move()
canvasCollision(player1)
canvasCollision(player2)
canvasCollision(player3)
bombCanvasCollision(bomb1)





drawSprites();
}
 /* create collision rule on ball group */
