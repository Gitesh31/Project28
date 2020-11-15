
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var mango1,mango2,mango3,mango4,mango5;
var stone;
var tree;
var boy;
var chain;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Creating some Bodies

	ground = new Ground(600,height,1200,20);

	mango1 = new Mango(600,500,50,50);
	mango2 = new Mango(600,500,50,50);
	mango3 = new Mango(600,500,50,50);
	mango4 = new Mango(600,500,50,50);
	mango5 = new Mango(600,500,50,50);

	stone = new Stone(325,500,50,50);

	tree = new Tree(600,625,35,110);

	boy = new Boy(300,625,20,65);

	chain = new Chain(boy.body,stone.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);



  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone.display();

  tree.display();

  boy.display();
 
  keyPressed();

}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stone.fly();
}

function detectCollision (lstone,lmango){
	mangoBodyPosition = lmango.body.setPosition
	stoneBodyPosition = lstone.body.setPosition
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
		if(distance<=lmango.body,false){
			Matter.body.setStatic(lmango.body,false);
		}
}

function keyPressed(){
	if(keyCode == 32){
		Matter.body.setPosition(stone.body, {x:235,y:420});
		chain.attach(stone.body);
	}
}