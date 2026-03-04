function setup() {
   cnv = new Canvas(800, 800);
   console.log("setup:");
   //world.gravity.y = 10;

    wallLH = new Sprite(0, height / 2, 8, height, 'k');

    wallLH.color = 'black';

    wallRH = new Sprite(800, 400, 25, 800, 'k');

    wallTop = new Sprite(400, 0, 800, 25, 'k');

    wallBot = new Sprite(400, 800, 800, 25, 'k');

player = new Sprite(725, 725, 150, 150,'d')
player.color='eef3f5'
player.rotationlock = true;
platform_1 = new Sprite(400, 400, 450, 10, 's');
platform_1.friction = 0;


}

function draw() {
    background(255, 100, 100);


    //movement making it to one side very quickly and not go diagonal.

    player.vel.x = 0;
    player.vel.y = 0;
 if (kb.pressing('up')){

    player.vel.y= -250;
 }

else if (kb.pressing('down')){

  player.vel.y= 250;
}


else if (kb.pressing('left')){

  player.vel.x= -250;
}
else if (kb.pressing ('right')) {

  player.vel.x= 250;

}

}
