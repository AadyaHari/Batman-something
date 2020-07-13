const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, drop;
var Raindrops = [];
var puImg, cloudImg;
var pu;




function preload(){
    cloudImg = loadImage("image/cloud.png");
    puImg = loadImage("images/pu.img");
    
}

function setup(){
   createCanvas(400,800);

   engine = Engine.create();
   world = engine.world;

   ground = new Ground(200,790,400,20);
   pu = new Pu();

    
}

function draw(){
    background('#141C30')
    Engine.update(engine);
    Raindrops.push(drop);
    
}   

for (var j = 0; j < Raindrops.length; j++){
    if(Raindrops[j] !== null){
        pu.display();
            Raindrops[j].display();
    }
}

image(puImg, 96,600);

updatePos();

cloudImg.resize(236,98);
image(cloudImg, -60, -25);
image(cloudImg, 60, -25);
image(cloudImg, 200,-25);

ground.display();

function updatePos(){
    for(var i = 0; i < Raindrops.length; i++){
        if(Raindrops[i] !== null){
            if (Raindrops[i].body.position.y > 760){
           Raindrops[i].body.position.y = 830;
           Raindrops.splice(i,1);
            }
        }
    }
}

