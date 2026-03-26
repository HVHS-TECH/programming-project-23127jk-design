
let score = 0;
let randNum
let win = 0;
let timer = 1;
let limit = 500;
let player;
let gamestate = "menu";
//this makes the timer go up in 1 second
let timeUp = false;
let secondTimer = 0;
let intervalID = setInterval(() => {
  secondTimer = secondTimer + 1;
}, 1000); //1000ms timer

function setup() {
  cnv = new Canvas(800, 800);
  console.log("setup:");

  wallLH = new Sprite(0, height / 2, 8, height, 'k');
  wallLH.color = 'black';
  wallLH.bounciness = 0;
  wallRH = new Sprite(800, 400, 25, 800, 'k');
  wallRH.bounciness = 0;
  wallTop = new Sprite(400, 0, 800, 25, 'k');
  wallTop.bounciness = 0;
  wallBot = new Sprite(400, 800, 800, 25, 'k');
  wallBot.bounciness = 0;

  player = new Sprite(755, 755, 65, 65, 'd');
  player.color = 'eef5fs';
  player.friction = 0;
  player.bounciness = 0;
  //this should make the player not spin when colliding with certain platforms or walls.
  player.collider = 'dynamic';
  player.rotationlock = true;
  //end goal is the portal
  portal = new Sprite(760, 168, 60, 60, 'k');
  portal.bounciness = 0;

  platform_1 = new Sprite(380, 400, 600, 10, 'k');
  platform_1.friction = 0;
  platform_1.bounciness = 0;
  platform_2 = new Sprite(600, 200, 800, 10, 'k');
  platform_2.bounciness = 0;
  wallRH_2 = new Sprite(600, 700, 25, 600, 'k');
  wallRH_2.bounciness = 0;
  platform_3 = new Sprite(200, 600, 630, 10, 'k');
  platform_3.bounciness = 0;
  platform_4 = new Sprite(737, 600, 100, 10, 'k');
  platform_4.bounciness = 0;
  platform_4.drag = 0;

  box = new Sprite(760, 568, 50, 50, 'k');
  box.bounciness = 0;
  box.color = '56be5b';

  box_2 = new Sprite(30, 630, 50, 50, 'k');
  box_2.bounciness = 0;
  box_2.color = '56be5b';

  box_3 = new Sprite(563, 430, 50, 50, 'k');
  box_3.bounciness = 0;
  box_3.color = '56be5b';

  //coins in some parts of the map
circleGroup = new Group();
   //circle = new Sprite(width/2, height/2, 50, 'd');
   const VELARRAY = [-1, 1];

randNum = random(2, 5) * random(VELARRAY);
  for (i = 0; i < 5; i++) {
 circle = new Sprite(width/2, height/2, 50, 'd');
  circle.color= 'rgb(255, 255, 255)'
  circle.bounciness = 0;
  circle.friction = 0;
  circleGroup.add(circle);
}
  box.collides(player, func2call);
  box_2.collides(player, func3call);
  box_3.collides(player, func4call);
  player.collides(portal, func5call);
  circleGroup.collides(player, func6call);

}
//the stars that get collected when player collides with the stars
// this makes the player get the point and the point disappear after player collects it.
function func2call(_ssss, _player) {
  score = score + 1;
  _ssss.remove();
};
function func3call(_ssss, _player) {
  score = score + 1;
  _ssss.remove();
};
function func4call(_ssss, _player) {
  score = score + 1;
  _ssss.remove();
};
function func5call(_ssss, _portal) {
  _ssss.remove();
  win = win + 1;
};
function func6call(_ssss, _player) {
  _ssss.remove();
};

function draw() {
  //background('rgb(117, 104, 104)');

  //movement making it to one side very quickly and not go diagonal.
  // player.vel.x = 0;
  // player.vel.y = 0;
  if (kb.pressing('up') && !kb.pressing('down') && !kb.pressing('left') && !kb.pressing('right')) {
    player.vel.y = -37;
  }
  if (kb.pressing('down') && !kb.pressing('up') && !kb.pressing('right') && !kb.pressing('left')) {
    player.vel.y = 37;
  }
  if (kb.pressing('left') && !kb.pressing('up') && !kb.pressing('right') && !kb.pressing('down')) {
    player.vel.x = -37;
  }
  if (kb.pressing('right') && !kb.pressing('up') && !kb.pressing('down') && !kb.pressing('left')) {
    player.vel.x = 37;
  }

  fill(0);
  textSize(20);
  text("score: " + score, 10, 30);
  text("win:" + win, 10, 100);
  var name = " player";
  text("welcome" + name, 100, 30);
  text("the arrow keys are your movements", 400, 30)
  text("timer:" + secondTimer, 10, 50)
  if (secondTimer >= 10) {
    gamestate = "gameover"
    fill(0, 0, 0);
    background(200);
    textSize(35);
    text("time's up", 100, 100)
  }
  if (gamestate == "play") {

  } 
  else () => {
    timer = 0;
  }
  //this shows that you complete the stage or skipped points

  
  //this will stop the sprite from moving when timer hits ten.
  if (secondTimer >= 10) {
    timeUp = true;
  }
  if (timeUp == true) {
    player.collider = 's';
  }
  if (gamestate === "menu") {
    drewMenu();
  }
  else if (gamestate === "play") {
    drawGame();
  }
  else if (gamestate === "gameover") {
    drawGameOver();
  }
}

function drewMenu() {
  background('rgb(49, 168, 95)');
    textSize(20);
   text("space to start", 400, 30)
  player.collider = 's';
  if (kb.pressing('space')) {
    gamestate = "play";
  }
  console.log("menu");
  console.log(gamestate);
}

function drawGame() {
  background('rgb(117, 104, 104)');
   player.collider = 'd'
  fill(0);
  textSize(20);
  text("score: " + score, 10, 30);
  text("win:" + win, 10, 100);
  var name = " player";
  text("welcome" + name, 100, 30);
  text("the arrow keys are your movements", 400, 30)
  text("timer:" + secondTimer, 10, 50)
  if (secondTimer >= 10) {
    fill(0, 0, 0);
    background(200);
    textSize(35);
    text("time's up", 100, 100);
  }
  if (player.collides(portal)) {
     gamestate = "gameover"
      win = 1;
  }
  if (win >= 1 && score >= 0) {
    fill(0, 0, 0);
    background(200);
    textSize(35);
    text("you skipped the all the stars in the level", 100, 100);
  }
  if (win >= 1 && score >= 1) {
    fill(0, 0, 0);
    background(200);
    textSize(35);
    text("you have 25% stars in the level", 100, 100);
  }
  if (win >= 1 && score >= 2) {
    fill(0, 0, 0);
    background(200);
    textSize(35);
    text("you have 75% stars in the level", 100, 100);
  }
  if (win >= 1 && score >= 3) {
    fill(0, 0, 0);
    textSize(37);
    background(200);
    text("you 100% the level", 100, 100);
  }
  if (kb.pressing('r')) {
    gamestate = "gameover"
  }
}

function drawGameOver() {
background('rgb(179, 62, 62)')
  fill(0, 0, 0);
  textSize(37)
  text("you press m to go menu", 100, 100);

 // remove.allsprites()
    player.collider = 's';
   if (kb.pressing('m')) {
    gamestate = "menu"
  }
}