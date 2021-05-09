var cat;
var mouse;
var catStart, catRun, catStop;  
var mouseStart, mouseMove, mouseStop; 
var bgImg; 

function preload() {
    //cat images
    catStart = loadAnimation("images/cat1.png");
    catRun = loadAnimation("images/cat2.png", "images/cat3.png"); 
    catStop = loadAnimation("images/cat4.png");

    //mouse images 
    mouseStart = loadAnimation ("images/mouse1.png"); 
    mouseMove = loadAnimation("images/mouse2.png", "images/mouse3.png"); 
    mouseStop = loadAnimation("images/mouse4.png");

    //garden image
    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    //cat sprite
    cat = createSprite(800, 700); 
    cat.addAnimation("cstart",catStart);
    cat.scale = 0.20; 
     
    //mouse sprite
    mouse = createSprite(200,670); 
    mouse.addAnimation("mstart",mouseStart);
    mouse.scale = 0.15;
}

function draw() {

    background(bgImg);

      //cat walks towards the mouse

    if(keyDown("left")){ 
        cat.velocityX = -3; 
        cat.addAnimation("crun", catRun); 
        cat.changeAnimation("crun", catRun)

        mouse.addAnimation("mMove", mouseMove); 
        mouse.changeAnimation("mMove", mouseMove);
    }

    //cat stops when it touches the mouse
    if(cat.x -mouse.x <(cat.width -mouse.width)/2){
        cat.velocityX = 0; 
        cat.addAnimation("cStop", catStop); 
        cat.changeAnimation("cStop", catStop); 
        cat.x = 300; 
       
        mouse.addAnimation("mStop",mouseStop);
        mouse.changeAnimation("mStop",mouseStop);
        


    }
    drawSprites();
}



