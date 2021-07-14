
function setup() {
    createCanvas(400, 400);
    background(0);
    noStroke();
    fill(255, 0, 0)
    ellipse(170, 200, 200, 200)
    ellipse(230, 200, 200, 200)
    fill(0, 255, 0);
    rect(190, 80, 20, 40)
}

function draw() {
    fill(0);
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 100)
    }
}