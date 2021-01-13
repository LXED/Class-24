const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,750,50,50);
    box2 = new Box(950,750,50,50);
    box3 = new Box(800,700,50,50);
    box4 = new Box(950,700,50,50);
    box5 = new Box(850,600,50,50);

    ground = new Ground(600,height,1200,20)

    bird1 = new bird(100,100);
    
    pig1 = new Pig(880,750);
    pig2 = new Pig(880,700);

    log1 = new Log(880,700,250,PI/2)
    log2 = new Log(880,650,250,PI/2)
    log3 = new Log(850,500,150,PI/7)
    log4 = new Log(950,500,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    bird1.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
}