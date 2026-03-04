function setup() {
   cnv = new Canvas(800, 800);
   console.log("setup:");
   //world.gravity.y = 10;

    wallLH = new Sprite(0, height / 2, 8, height, 'k');

    wallLH.color = 'black';

    wallRH = new Sprite(800, 400, 25, 800, 'k');

    wallTop = new Sprite(400, 0, 800, 25, 'k');

    wallBot = new Sprite(400, 800, 800, 25, 'k');

cube = new Sprite(750, 750, 150, 150, 'd')
cube.color='eef3f5'


}

function draw() {
    background(255, 100, 100);


    //movement making it to one side very quickly.
if (kb.pressing('left')){

    cube.vel.x= -80;
}
else if (kb.pressing ('right')) {

   cube.vel.x= 80;

};
if (kb.released('left')) {

    // Set sprite's velocity to zero
 cube.vel.x= 0;
}
if (kb.released('right')){

    cube.vel.x= 0;
}
 

}
