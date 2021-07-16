function setup() {
    createCanvas(800, 800);
    background(0);
  }
  
  let x,y;
  
  //  when the mouse is clicked we want to store the location
  
  function mousePressed(){
    x = mouseX;
    y = mouseY;
    stroke(random(255),random(255),random(255))
  }
  
  function mouseDragged(){
    line(mouseX,mouseY,x,y);
  }