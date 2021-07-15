// create an array
/*

Task: to draw number of ellipse using the positions array - take the elements inside it as x coordinates
      and then take y coordinate of the ellipse as variable y defined here
      take arbitary size of the ellipse.

*/
let positions_x = [100,150,200,300,250] // x coordinates of ellipse
let positions_y = [50,100,120,230,440];
function setup() {
    createCanvas(600, 600);
    background(255);
    noFill()
    for(let i = 0; i < positions_x.length; i++) {
      ellipse(positions_x[i],positions_y[i],80,80)
    }
}

function draw() {
  
}