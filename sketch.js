const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var phyeng,myworld;
var ground1;
var physicsengine;

var box1;
var box2;


function setup() {
  createCanvas(400,400);     
  
    phyeng  =  Engine.create();      // phyeng.world
    myworld = phyeng.world;

    box1 = new Box(200,300,50,60);

    box2 = new Box(230,200,70,80);

    ground1 = new Ground(200,380,400,10);

    
}

function draw() {
  Engine.update(phyeng)
  background(0);  

  box1.display();
  box2.display();
  ground1.display();
}