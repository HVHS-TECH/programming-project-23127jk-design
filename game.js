function setup() {
  cnv = new Canvas(800, 800);
  console.log("setup:");
  //world.gravity.y = 10;

  wallLH = new Sprite(0, height / 2, 8, height, 'k');
  wallLH.color = 'black';
  wallLH.bounciness=0;
  wallRH = new Sprite(800, 400, 25, 800, 'k');
  wallRH.bounciness= 0;
  wallTop = new Sprite(400, 0, 800, 25, 'k');
  wallTop.bounciness= 0;
  wallBot = new Sprite(400, 800, 800, 25, 'k');
wallBot.bounciness=0;

  player = new Sprite(755, 755, 65, 65, 'd')
  player.color = 'eef3f5'
  player.friction = 0;
    player.bounciness= 0;
  //
  player.collider = 'dynamic';
  player.rotationlock = true;
  //
  platform_1 = new Sprite(400, 400, 425, 10, 'k');
  platform_1.friction = 0;
platform_1.bounciness = 0;
  platform_2 = new Sprite(600, 200, 450, 10, 'k')
  platform_2.bounciness= 0;
  wallRH_2 = new Sprite(600, 700, 25, 600, 'k')
  wallRH_2.bounciness=0;
  platform_3 = new Sprite(200, 600, 450, 10, 'k')
  platform_3.bounciness = 0;
  platform_4 = new Sprite(737, 600, 100, 10, 'k')
  platform_4.bounciness= 0;
  platform_4.drag =0;

  box = new Sprite(765, 170, 50, 50,'k')
  box.bounciness = 0;
  box.collides(player, func2call);
  function func2call(_ssss, _player){
    _ssss.remove();

    box_2 = new Sprite(30, 630, 50, 50, 'k')
    box_2.bounciness =0;
     box_2.collides(player, func3call);
  function func3call(_ssss, _player){
    _ssss.remove();

  }
}
}

function draw() {
  background('rgb(0, 0, 0)');

  //movement making it to one side very quickly and not go diagonal.
 // player.vel.x = 0;
 // player.vel.y = 0;
 if (kb.pressing('up') && !kb.pressing('down') && !kb.pressing('left') && !kb.pressing('right')) {
    player.vel.y = -40;
  }
  else if(kb.released('up')){
    player.vel.y = -40
  }
if (kb.pressing('down') && !kb.pressing('up') && !kb.pressing('right') && !kb.pressing('left')) {
    player.vel.y = 40;
  }
 else if (kb.released('down')){
    player.vel.y = 40;
  }
  if (kb.pressing('left') && !kb.pressing('up') && !kb.pressing('right') && !kb.pressing('down')) {
    player.vel.x = -40;
  }
  else if (kb.released('left')){
player.vel.x = -40;
  }
if (kb.pressing('right') && !kb.pressing('up') && !kb.pressing('down') && !kb.pressing('left')) {
    player.vel.x = 40;
  }
  else if (kb.released('right')){
    player.vel.x= 40;
  }
  
}

