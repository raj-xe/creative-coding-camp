function setup() {
    createCanvas(400, 400)
}

function draw() {

    background(255);
    rect(0, 300, 400, 100);
    ellipse(200, 300, 150, 150);
    ellipse(200, 200, 100, 100);
    ellipse(200, 125, 75, 75);
    line(160, 200, 160 - 75, 200 - 75);
    line(240, 200, 240 + 75, 200 - 75);
}