let x = 0;
let y = 300;
let speed = 1;
function setup() {
  createCanvas(400, 400);
  // frameRate(10);
  background(220);
}

function draw() {
  background(255)
  noStroke();
  fill(255,0,0)
  rect(x,y,100,25);
  rect(x+20,y-25,60,25);
  fill(0,0,0)
  ellipse(x + 20, y + 25, 20,20)
  ellipse(x + 80, y + 25, 20,20)
  
  // if car hits the wall then do not move the car
  if(x >= 300) {
    speed = -1;
  } 
  
  if(x <= 0) {
    speed = 1;    
  }
  
  // move car - for animating we want to change X
  x += speed;    
  
}