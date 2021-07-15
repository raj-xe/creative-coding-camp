
let positions = 
[
  [200,210], // 0
  [100,150], // 1
  [200,250], // 2
  [150,300]  // 3
];

function setup() {
createCanvas(400, 400);
for(let i = 0; i < positions.length; i++) {
ellipse(positions[i][0], positions[i][1], 100, 100);    
}
}

function draw() {
// background(220);
}