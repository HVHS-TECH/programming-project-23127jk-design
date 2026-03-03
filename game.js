function setup() {
   cnv = new Canvas(800, 800);
   console.log("setup:");
   //world.gravity.y = 10;

    wallLH = new Sprite(0, height / 2, 8, height, 'k');

    wallLH.color = 'black';

    wallRH = new Sprite(800, 400, 25, 800, 'k');

    wallTop = new Sprite(400, 0, 800, 25, 'k');

    wallBot = new Sprite(400, 800, 800, 25, 'k');

cube = new Sprite(200, 200, 150, 150, 'd')
cube.color='eef3f5'


}

function draw() {
    background(255, 100, 100);

    if (kb.pressing('left')) {

square.vel.x = -5;
}

else if (kb.pressing ('right')) {

   square.vel.x= 0;

};

if (kb.released('left')) {

 square.vel.x= 0;
}

}
