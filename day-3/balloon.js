
function setup() {
    createCanvas(600, 600);
    background(0);
    frameRate(3)
}

function balloon(x, y, r, g, b) {
    noFill();
    bezier(x, y, x - 80, y + 50, x + 100, y + 100, x, y + 150);
    fill(r, g, b);
    ellipse(x, y - 70, 90, 150)
}

function draw() {
    stroke(255);
    balloon(random(600), random(600), random(255), random(255), random(255))
}