const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand;
var polygonImg;

function preload() {
   polygonImg = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground(600,height,1200,20);


    box1 = new Box(600, 260, 30, 40);
    box2 = new Box(570, 260, 30, 40);
    box3 = new Box(540, 260, 30, 40);
    box4 = new Box(630, 260, 30, 40);
    box5 = new Box(660, 260, 30, 40);


    box6 = new Box(585, 220, 30, 40);
    box7 = new Box(555, 220, 30, 40);
    box8 = new Box(615, 220, 30, 40);
    box9 = new Box(645, 220, 30, 40);


    box10 = new Box(600, 170, 30, 40);
    box11 = new Box(570, 180, 30, 40);
    box12 = new Box(630, 180, 30, 40);


    box13 = new Box(600, 140, 30, 40);


    box14 = new Box(900, 170, 30, 40);
    box15 = new Box(930, 170, 30, 40);
    box16 = new Box(870, 170, 30, 40);
    box17 = new Box(840, 170, 30, 40);
    box18 = new Box(960, 170, 30, 40);


    box19 = new Box(900, 140, 30, 40);
    box20 = new Box(930, 140, 30, 40);
    box21 = new Box(870, 140, 30, 40);
    box22 = new Box(900, 110, 30, 40);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world,polygon);

    chain = new Chain(this.polygon, {x:100, y:200});
    
    
}

function draw(){
    background("white");
    Engine.update(engine);
    textSize(20);
    fill("black");
    text("Drag The Hexagonal Stone And Realease It To Lauch It Towards The Box", 100, 30);
    ground.display();

    
    box1.display();
    box2.display();
    box3.display();

    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box9.display();
    
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();

    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();

    chain.display();
    fill("gold");
    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}
