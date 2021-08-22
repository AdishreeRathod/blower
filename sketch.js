const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var blower;
var ball;
var mouth;
var button;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
   world=engine.world;
 
   blower=new Blower(320,230,250,20);
   ball=new Ball(450,20,40);
   mouth=new Blowermouth(450,200,100,100);
   
  button=createButton("click to blow");
  button.position(width/2,height-100);
  button.class("blowButton");
  button.mousePressed(blow);


  
}

function draw() {
  background("lightgrey");
  Engine.update(engine);
  blower.show();
  mouth.show();
  ball.show();
  drawSprites();
  
}
function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.02});
}