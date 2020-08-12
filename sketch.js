const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var radius=this.radius;
var width=this.width;
var height=this.height;
var length = this.length;
var particles = [];
var plinko = [];

function setup() {
  createCanvas(540,800);
  engine = Engine.create();
  world = engine.world;

  for (var i= 40; i<=length;i=i+50){
    plinko.push(new Plinko(i,75));
  }


  ground = new Ground(240,790,800,20);

  division1 = new Division(0,600,30,400);
  division2 = new Division(90,600,20,400);
  division3 = new Division(180,600,20,400);
  division4 = new Division(270,600,20,400);
  division5 = new Division(360,600,20,400);
  division6 = new Division(450,600,20,400);
  division7 = new Division(540,600,30,400);
  
}

function draw() {
  background(0,0,0);  
  
  Engine.update(engine);
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  
  for (var i=0; i<length;i++){
    plinko[i].display();
  }

  drawSprites();
}

