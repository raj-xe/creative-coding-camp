const canvasH = 400; // declared the variable
const canvasW = 400;

var baseH = 100;
var baseW = canvasW;
var posX = 0
var posY = 300

var sun = 50

let r,g,b;
function setup() {
  createCanvas(400, 400);
  r = random(255);
  g = random(255);
  b = random(255);
  frameRate(10) // -> draw function executed per second
  
}

function draw() {
  background(0,235,255);
  fill(0,255,0)
  rect(posX,posY,baseW,baseH);
  fill(250)
  ellipse(baseH*2, posY, baseH+50, baseH+50)
  ellipse(baseH*2, baseH*2, baseH+10, baseH+10)
  ellipse(baseH*2, baseH+25, baseH-25, baseH-25)
  line(160,baseH*2,160-75,baseH*2-75)
  line(240,baseH*2,240+75,baseH*2-75)

  //sun
  fill(random(255),random(255),random(255))
  ellipse(sun,sun,75,75)
}
