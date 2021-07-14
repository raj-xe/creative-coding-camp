let x= 200,y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  if(keyIsPressed){   
    switch(key) {
      case 'a':
        x--;
        break;
      case 'd':
        x++;
        break;
      case 'w':
        y--;
        break;
      case 's':
        y++;
        break;
      default:
        console.log(key, "is a deafult case - invalid key");  
    }
  }
  
  ellipse(x,y,40,40);
  
}