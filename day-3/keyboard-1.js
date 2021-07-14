let x= 200,y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  if(keyIsPressed){
    if(key === 'a') {
      x--;
    }
    else if(key === 'd') {
      x++;
    }
    else if(key === 'w') {
      y--;
    }
    else if(key === 's') {
      y++;
    }
  }
  
  ellipse(x,y,40,40);
  
}