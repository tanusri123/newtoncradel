
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  roof = createSprite(200,100,200,10);
  ball1 = createSprite(120,250,30,30);
  ball2 = createSprite(170,250,30,30);
  ball3 = createSprite(220,250,30,30);
  ball4 = createSprite(270,250,30,30);
  background(0);
  
  drawSprites();
 
}



