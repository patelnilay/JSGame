let player1;
let player2;
let player3;
var bomb;
let bombGroup;
let bombSpeed;
let playerGroup;


function preload(){
  player1_img = loadImage("Emojis/1f435.png");
  player2_img = loadImage("Emojis/1f436.png");
  player3_img = loadImage("Emojis/1f439.png");
  bombs_img = loadImage("Emojis/1f525.png");
}
// function that creates players, in order to use cretae player
function createPlayer(sprite){
  player = createSprite()
  player.addImage(sprite)
  playerGroup.add(player)
  return player
}

//allows players to move, assigned to arrows keys, [W.D] keys and [J,L,] keys
function move(){
  let speed = 0.3
  let maxSpeed = 2
  if (keyIsDown(LEFT_ARROW)) {
    player1.addSpeed(speed, 180);

  }

  if (keyIsDown(RIGHT_ARROW)) {
    player1.addSpeed(speed, 0);

  }

// the numebr represents a key in the keyboard
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
  playerGroup = new Group();
  player1 = createPlayer(player1_img)
  player1.scale = 0.5
  player1.position.x = 0
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
  bomb1 = createBomb(bombs_img);
  bomb1.position.x = random(0,800)
  bomb1.position.y = 20;
  bomb1.friction = 1;
  bomb2 = createBomb(bombs_img);
  bomb2.position.x = random(0,800)
  bomb2.position.y = 130;
  bomb2.friction = 1;
  bomb3 = createBomb(bombs_img);
  bomb3.position.x = random(0,800)
  bomb3.position.y = 0;
  bomb3.friction = 1;
  bomb4 = createBomb(bombs_img);
  bomb4.position.x = random(0,800)
  bomb4.position.y = 0;
  bomb4.friction = 1;
  bomb5 = createBomb(bombs_img);
  bomb5.position.x = random(0,800)
  bomb5.position.y = 0;
  bomb5.friction = 1;
  bomb6 = createBomb(bombs_img);
  bomb6.position.x = random(0,800)
  bomb6.position.y = 0;
  bomb6.friction = 1;
  bomb7 = createBomb(bombs_img);
  bomb7.position.x = random(0,800)
  bomb7.position.y = 0;
  bomb7.friction = 1;
  bomb8 = createBomb(bombs_img);
  bomb8.position.x = random(0,800)
  bomb8.position.y = 0;
  bomb8.friction = 1;




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
  if (sprite.position.y > 800) { //off bottom of canvas
    sprite.position.x = random(0,800)
    sprite.position.y = 0
  }
}

//collision against bomb and player
function bombPlayerCollision(sprite){
  sprite.remove()
}

function createBomb(sprite){
  bomb = createSprite()
  bomb.addImage(sprite)
  bomb.scale = 0.3;
  bombGroup.add(bomb)
  return bomb
}

function bombFall(sprite){

  sprite.position.y += 4.5
  }

function draw() {
background("#232323");
bombCanvasCollision(bomb1)
bombCanvasCollision(bomb2)
bombCanvasCollision(bomb3)
bombCanvasCollision(bomb4)
bombCanvasCollision(bomb5)
bombCanvasCollision(bomb6)
bombCanvasCollision(bomb7)
bombCanvasCollision(bomb8)
bombFall(bomb1)
bombFall(bomb2)
bombFall(bomb3)
bombFall(bomb4)
bombFall(bomb5)
bombFall(bomb6)
bombFall(bomb7)
bombFall(bomb8)
playerGroup.overlap(bombGroup, bombPlayerCollision)
move()
canvasCollision(player1)
canvasCollision(player2)
canvasCollision(player3)
drawSprites();
}
