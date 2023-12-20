// put your code between START and END

let title = "Mouse";
let author = "Lezanne Nap"
let font;

function preload() {
  font = loadFont('fonts/IndieFlower-Regular.ttf');
}

function setup() {
  pixelDensity(2);
  createCanvas(500, 500); 
  
  noLoop();
}

function draw() {
  background(230);
  
  // =============== START PNG ===============  
  

    noStroke();

  
    //lichaam
  fill(255);
  ellipse (200,330,130,170);
    
    //linker oor
    fill(0);
    ellipse( 130,150, 100, 100);
    //rechter oor
    fill(0);
    ellipse( 270,150, 100, 100);
    //zwarte cirkel head
    fill(0);
    ellipse( 200,200, 175, 150);
    //witte cirkel gezicht
    fill(255);
    ellipse( 200,225,125,100);
    //zwart vierkant muts
     rotate(45*Math.PI/180)
     fill(0);
     rect (240,-45,50,50);
    
    
    //neus zwart
    rotate(-45*Math.PI/180)
    fill (0);
    ellipse (200,235,20,15)
  
    //neus roze
    fill (	246	,164,	215);
    ellipse (200,235,15,10)
  
    //linker oog
  fill (0);
  ellipse (175,210,20,25);
    //rechter oog
  fill (0);
  ellipse (225,210,20,25);
  
  //skelet
  fill (246,164,215);
  ellipse (200,175,30,30);
  //skelet
  fill (246,164,215);
  rect (190,170,20,20);
  //skelet oog
  fill (0);
  ellipse (207,175,10,10);
  //skelet oog
  fill (0);
  ellipse (193,175,10,10);
  //mounth
  fill (0);
  ellipse(200,260,19,20);
  fill (246,164,215);
  ellipse(200,260,15,16);
  fill (0);
  ellipse(200,257,18,10);
  fill (255);
  ellipse(200,254,20,10);
  
  //linker been
  fill (255);
  rect (160,390,35,80);
  //linker voet
  fill(255);
  ellipse (160,458,60,25)
  
  //rechter been
  fill (255);
  rect (200,390,35,80);
  //rechter voet
  fill(255);
  ellipse (235,458,60,25);
  //linker arm
  rotate(45*Math.PI/180);
  fill (255);
  rect (300,90,20,70);
  rotate(-45*Math.PI/180);
  fill(255);
  ellipse (105,330,20,20);
  rotate(125*Math.PI/180);
  fill (255);
  rect (200,-340,20,70);
  //rokje
  rotate(-125*Math.PI/180);
  fill (0);
  rect (145,370,110,40);
  fill (0);
  ellipse (160,405,30,30);
  fill (0);
  ellipse (185,405,30,30);
  fill (0);
  ellipse (215,405,30,30);
  fill (0);
  ellipse (240,405,30,30);
  //truitje
  fill (0);
  ellipse (195,310,120,45);
  fill (0);
  rect (135,313,120,30);
  fill (246,164,215);
  ellipse (195,310,20,20);
  
  
  // =============== END PNG ===============

  //canvase frame and text
  push();
  stroke(255);
  strokeWeight(20);
  noFill();
  rect(0,0,width,height);
  noStroke();
  fill(0);
  textSize(20)
  textAlign(CENTER);
  textFont(font);  
  text(`"${title}" by ${author}`, width/2, height-30);
  pop();

}

function mousePressed(){
  saveCanvas(`${author.toLowerCase().replace(" ","-")}.png`);
}
