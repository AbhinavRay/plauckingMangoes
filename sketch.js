var boyImage,boy
var tree,treeImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("sprites/boy.png")
	treeImage = loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
  world = engine.world;

	stone = new Stone(185,670,100,100)
	ground = new Ground(600,height,1800,20);
	mango1 = new Mango(1250, 370,20,20);
	mango2 = new Mango(1200, 370,20,20);
	mango3 = new Mango(1300, 400,20,20);
	mango4 = new Mango(1260, 430,20,20);
  mango5 = new Mango(1220, 430,20,20);
  mango6 = new Mango(1280, 350,20,20);
  mango7 = new Mango(1160, 410,20,20);
  launcher = new Launcher(stone.body,{x:185, y:575})
  tree = new Tree(1250,490)

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  
  boy = createSprite(235,630,100,100)
  boy.addImage(boyImage)
  boy.scale = 0.1
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  launcher.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if(keyCode === 32){
      launcher.attach(stone.body)
  }
}

function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
  }
}