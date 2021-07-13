
let size = 50;
let x = 200, y = 300;
function setup() {
  createCanvas(400, 400);
  // frameRate(10);
  background(255);
}

function draw() {
  background(0, 217, 255)
  noStroke();
  
  fill(255, 247, 0) // yellow
  
  //draw sun
  ellipse(x,y,size,size);
  
  fill(0, 209, 3) // green
  
  rect(0,300,400,100) 
  
  
  if(size >= 300) {
   // do nothing  
  } else {
    // increase the size
    size += 1;
    y -= 1;
  }
}