const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    
}

function setup(){
   var canvas = createCanvas(600, 1000);
   engine = Engine.create();
   world = engine.world;

   drop1 = new Drop(100, 100, 50, 50);
    
}

function draw(){
    background('black');
    Engine.update(engine);
    drop1.display();
    console.log(drop1.positiony)
}   

