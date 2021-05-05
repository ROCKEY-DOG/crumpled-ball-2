
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var ground;
var paper;
var dustbinImage;
function preload()
{
	dustbinImage=loadImage("images/dustbingreen.png");
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	 dustbin=new Dustbin(1200,650);
	 paper=new Paper(200,450,40);
     ground=new Ground(width/2,670,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
   dustbin.display();
   image (dustbinImage,1100,500,200,200);
   paper.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}

