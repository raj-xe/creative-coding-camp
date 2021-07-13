
let start = 0;

let end = 400;

let stepSize = 40;



let LStart = 0;

let LEnd = 400;

let LStepSize = 20;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
  background(220);
}

function draw() {
  
  // red -> 255,0,0
  // blue -> 0,0,255
  
  // loop for drawing multiple layers
  for(let j = LStart; j < LEnd; j += LStepSize) {
    // draw a layer
  
    // a layer
    for(let i = start; i < end; i += stepSize) {
      
       if(int(random(2)) == 0) {
         // 0 -> red
          fill(255,0,0)  
       } else {
         // 1 -> blue
          fill(0,0,255)
       }
      
      rect(i,j, 40,20)
    }
    
  }
  
}