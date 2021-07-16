// initialize the empty array
let positions = [];

function setup() {
 createCanvas(400, 400); 
 for(let y = 0; y <= 400; y += 40) {
    // this is to fetch the points on a row - horizontally
    for(let x = 0; x <= 400; x += 40) {
      if(y >= 400 - x)
        positions.push([x, y]) // points - [x, y]
    }   
 }
}

function draw() {
  background(220);
  for(let i = 0; i < positions.length; i++){
    // to fetch each points in the positions array
    
    let point = positions[i];
    
    ellipse(point[0], point[1], 10,10)
    
  }
}