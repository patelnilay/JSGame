let player1;
let player2;
let player3;



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
}

function canvasCollisionDetection(sprite){
  if (sprite.position.x < 0) { //off left of window
    sprite.position.x = canvas.width;
  }
  if (sprite.position.x > canvas.width) { //off right of window
    sprite.position.x = 0;
  }
}

function bombs(){

}

function draw() {
background(0);
move()
canvasCollisionDetection(player1)
canvasCollisionDetection(player2)
canvasCollisionDetection(player3)





drawSprites();
}
