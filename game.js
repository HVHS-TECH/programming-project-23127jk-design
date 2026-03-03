function setup() {
   cnv = new Canvas(800, 800);
   console.log("setup:");
   world.gravity.y = 10;

    wallLH = new Sprite(0, height / 2, 8, height, 'k');

    wallLH.color = 'black';

    wallRH = new Sprite(800, 400, 25, 800, 'k');

    wallTop = new Sprite(400, 0, 800, 25, 'k');

    wallBot = new Sprite(400, 800, 800, 25, 'k');





}

function draw() {
    background(255, 100, 100);
}
