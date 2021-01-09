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
    var surface1_options={
        isStatic:true
    }
    surface1 = createSprite(95,580,180,25,surface1_options);
    surface1.shapeColor = "blue";
    
    var surface2_options={
        isStatic:true
    }
    surface2 = createSprite(300,580,180,25,surface2_options);
    surface2.shapeColor = "orange";

    var surface3_options={
        isStatic:true
    }
    surface3 = createSprite(500,580,180,25,surface3_options);
    surface3.shapeColor = "red";

    var surface4_options={
        isStatic:true
    }
    surface4 = createSprite(705,580,180,25,surface4_options);
    surface4.shapeColor = "green";
    

    //create box sprite and give velocity
    var box_options={
        restitution:2
    }
    
    box = createSprite(500,100,40,40,box_options);
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
