function setup() {
  cnv = new Canvas(800, 800);
  console.log("setup:");
  //world.gravity.y = 10;

  wallLH = new Sprite(0, height / 2, 8, height, 'k');
  wallLH.color = 'black';
  wallRH = new Sprite(800, 400, 25, 800, 'k');
  wallTop = new Sprite(400, 0, 800, 25, 'k');
  wallBot = new Sprite(400, 800, 800, 25, 'k');

  player = new Sprite(725, 725, 65, 65, 'd')
  player.color = 'eef3f5'
  player.friction = 0;
  //
  player.collider = 'dynamic';
  player.rotationlock = true;
  //
  platform_1 = new Sprite(400, 400, 425, 10, 'k');
  platform_1.friction = 0;

  platform_2 = new Sprite(600, 200, 450, 10, 'k')
  wallRH_2 = new Sprite(600, 700, 25, 600, 'k')

  platform_3 = new Sprite(200, 600, 450, 10, 'k')
}

function draw() {
  background(255, 100, 100);
  //movement making it to one side very quickly and not go diagonal.
 // player.vel.x = 0;
 // player.vel.y = 0;
  if (kb.pressing('up')) {
    player.vel.y = -300;
  }
  else if (kb.pressing('down')) {
    player.vel.y = 300;
  }
 else if (kb.pressing('left')) {
    player.vel.x = -300;
  }
  else if (kb.pressing('right')) {
    player.vel.x = 300;
  }
}
