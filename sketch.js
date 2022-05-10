
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


//1st - create eNGINE--creating environment of physics
//2nd- create World -- creating canvas
//3rd -  create Body -- creating sprite

let engine;
var ball;let world;
var ground;
var rock

function setup()
{


  createCanvas(400,400);
  //creating engine for game
  engine = Engine.create()
  //world inside our game's engine
  world=engine.world
    
  //creating body inside our game's world
  var ball_options={
    restitution:1
  }

  ball= Bodies.circle(100,10,20,ball_options)
  World.add(world,ball)

  var ground_options={
    isStatic:true
  }
  ground= Bodies.rectangle(200,390,400,20, ground_options)
  World.add(world,ground)
  

  
  rock= Bodies.circle(150,15, 20,ball_options)
  World.add(world,rock)



  rectMode(CENTER)
  ellipseMode(RADIUS)
}

function draw() 
{
  
  background(118);
  //to update physics engine
  Engine.update(engine)

  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,400,20)
  ellipse(rock.position.x,rock.position.y,20)
}

