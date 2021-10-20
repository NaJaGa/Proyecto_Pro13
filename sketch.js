var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//crear sprite de rabbit (conejo)
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
 rabbit.x = World.mouseX;
 var SelecSprite = Math.round(random(0,3));

  if (frameCount%50 === 0){
    if (SelecSprite == 1){
      createRedleaf();
      console.log(SelecSprite + " Hoja Roja");
    }
    else if (SelecSprite == 2){
      createApples();
      console.log(SelecSprite + " Manzana");
    }
    else if (SelecSprite == 3){
     createOrangeleaf();
     console.log(SelecSprite + " Hoja Naranja");
    }
  }
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}

//crear Funciones de la creacion y duracion de sprites
function createApples(){
  var apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale =0.07;
  apple.velocityY=3;
  apple.lifetime= 150;
}
function createOrangeleaf(){
  var orangeLeaf = createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeImg);
  orangeLeaf.scale =0.07;
  orangeLeaf.velocityY=3;
  orangeLeaf.lifetime= 150;
}

function createRedleaf(){
  var redLeaf = createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redImg);
  redLeaf.scale =0.07;
  redLeaf.velocityY=3;
  redLeaf.lifetime= 150;
}