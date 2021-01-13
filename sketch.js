var canvas;
var music;
var box;
var surface1, surface2,surface3,surface4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);
     
    //create 4 different surfaces
    surface1 = createSprite(780,560,230,50);
    surface1.shapeColor = "black";
    surface2 = createSprite(510,560,230,50);
    surface2.shapeColor = "yellow";
    surface3 = createSprite(240,560,230,50);
    surface3.shapeColor = "green";
    surface4 = createSprite(40,560,120,50);
    surface4.shapeColor = "orange";
    box = createSprite(random (20,750.450,80))
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 3;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  

      drawSprites();
    //add condition to check if box touching surface and make it box
}
