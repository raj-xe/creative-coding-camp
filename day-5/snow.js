let snow_balls = [];

function setup() {
  createCanvas(400, 400);
}

function mouseClicked() {
  snow_balls.push([mouseX, mouseY])
  console.log(snow_balls)
}

function draw() {
  background(0);
  for(let i = 0; i < snow_balls.length; i++) {
    ellipse(snow_balls[i][0], snow_balls[i][1], 25, 25);
    if(snow_balls[i][1] < 400)
      snow_balls[i][1]++;
  }
}