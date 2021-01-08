var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;
var Edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(95,580,180,25);
    surface1.shapeColor = "blue";

    surface2 = createSprite(300,580,180,25);
    surface2.shapeColor = "orange";

    surface3 = createSprite(500,580,180,25);
    surface3.shapeColor = "red";

    surface4 = createSprite(705,580,180,25);
    surface4.shapeColor = "green";
    

    //create box sprite and give velocity
    box = createSprite(500,100,40,40);
    box.x=random(20,750);
    
    box.shapeColor= "white";
    box.velocityY=3;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    Edges=createEdgeSprites();
    
    if(box.isTouching(Edges)){
        box.bounceoff(Edges);
    }

    drawSprites();

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) ){
        box.shapeColor = "blue";
         box.bounceoff(surface1)
    }

    if(surface2.isTouching(box) ){
        box.shapeColor = "orange";
         box.bounceoff(surface2)
    }

    if(surface3.isTouching(box) ){
        box.shapeColor = "red";
         box.bounceoff(surface3)
    }

    if(surface4.isTouching(box) ){
        box.shapeColor = "green";
         box.bounceoff(surface4)
    }



}
