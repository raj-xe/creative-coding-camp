function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    stroke(255);

    fill(255)

    if (mouseX <= 200) {
        // 1st section
        fill(255, 0, 0)
    } else if (mouseX > 200 && mouseX <= 400) {
        // 2nd section
        fill(255, 251, 0)
    } else if (mouseX > 400) {
        // 3rd section
        fill(0, 255, 0)
    }

    ellipse(300, 200, 100, 100)

}