
function setup() {
    createCanvas(400, 400);
    background(0);
    frameRate(5)
}

function draw() {
    let size = random(100);
    fill(random(255), random(255), random(255))
    ellipse(random(400), random(400), size, size)
}