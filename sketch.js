const Engine=Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world

var ground

var stand1,stand2

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,
box22,box23,box24,box25,box26

var polygon

var slingshot

function setup(){

    var canvas=createCanvas(700,450)

    engine=Engine.create()
    world=engine.world
  
    ground=new Ground(350,444,700,14)

    stand1=new Stand(350,300,170,14)
    stand2=new Stand(600,250,170,14)

    box1=new Box1(290,270,30,30)
    box2=new Box1(320,270,30,30)
    box3=new Box1(350,270,30,30)
    box4=new Box1(380,270,30,30)
    box5=new Box1(410,270,30,30)
    box6=new Box2(310,230,30,30)
    box7=new Box2(340,230,30,30)
    box8=new Box2(370,230,30,30)
    box9=new Box2(400,230,30,30)
    box10=new Box3(325,200,30,30)
    box11=new Box3(355,200,30,30)
    box12=new Box3(385,200,30,30)
    box13=new Box4(340,170,30,30)
    box14=new Box4(370,170,30,30)
    box15=new Box4(360,140,30,30)

    box16=new Box1(550,240,30,30)
    box17=new Box1(580,240,30,30)
    box18=new Box1(610,240,30,30)
    box19=new Box1(640,240,30,30)
    box20=new Box2(565,210,30,30)
    box21=new Box2(595,210,30,30)
    box22=new Box2(625,210,30,30)
    box23=new Box3(580,180,30,30)
    box24=new Box3(610,180,30,30)
    box25=new Box4(600,140,30,30)

    polygon=new Polygon(100,200,30,30)

    slingshot=new Slingshot(polygon.body,{x:100,y:200})

}

function draw(){

    background(random(0,255),random(0,255),random(0,255))

    Engine.update(engine)

    ground.display()

    stand1.display()
    stand2.display()

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()

    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()

    polygon.display()

    slingshot.display()

    text("To play this game drag the mouse and release it on blocks,Good luck*(-__-)*",50,50)

}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){

    slingshot.fly()

}
