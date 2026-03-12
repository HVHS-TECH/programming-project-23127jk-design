
let score = 0;

function setup() {
  cnv = new Canvas(800, 800);
  console.log("setup:");
  //world.gravity.y = 10;


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
  player.color = 'eef3f5';
  player.friction = 0;
  player.bounciness = 0;
  //this should make the player not spin when colliding with certain platforms or walls.
  player.collider = 'dynamic';
  player.rotationlock = true;
  //end goal is the portal
  portal = new Sprite(760, 168, 60, 60, 'k');
  portal.bounciness = 0;

  platform_1 = new Sprite(400, 400, 425, 10, 'k');
  platform_1.friction = 0;
  platform_1.bounciness = 0;
  platform_2 = new Sprite(600, 200, 450, 10, 'k');
  platform_2.bounciness = 0;
  wallRH_2 = new Sprite(600, 700, 25, 600, 'k');
  wallRH_2.bounciness = 0;
  platform_3 = new Sprite(200, 600, 450, 10, 'k');
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

  //if ( portal.colliding(player) ){
  //gameState = 2;
  //console.log(gameState);
  //}

  box.collides(player, func2call);
  box_2.collides(player, func3call);
  box_3.collides(player, func4call);
  player.collides(portal, func5call);


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
};

function draw() {
  background('rgb(117, 104, 104)');

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

  var name = " player";
  text("welcome"+ name, 100, 30);
  text("the arrow keys are your movements", 400, 30)
} 
