let state = [
    [-1,-1,-1], // 0
    [-1,-1,-1], // 1
    [-1,-1,-1]  // 2
  ]
  
  let player = 0;
  let winner = -1;
  
  function setup() {
    createCanvas(600, 600);
  }
  
  function cross(x,y,l) {
    line(x+l,y+l,x-l,y-l)
    line(x+l,y-l,x-l,y+l)
  }
  
  function mouseClicked() {
    
    if(winner !== -1) {
      return;
    }
    
    let x = mouseX, y = mouseY;
    if(x < 200 && y < 200) {
      if(state[0][0] == -1)
        state[0][0] = player;
    } else if (x < 400 && y < 200) {
      if(state[1][0] == -1)
        state[1][0] = player;
    } else if (x < 600 && y < 200) {
      if(state[2][0] == -1)
        state[2][0] = player;
    } else if (x < 200 && y < 400) {
      if(state[0][1] == -1)
        state[0][1] = player;
    } else if (x < 400 && y < 400) {
      if(state[1][1] == -1)
        state[1][1] = player;
    } else if (x < 600 && y < 400) {
      if(state[2][1] == -1)
        state[2][1] = player;
    } else if (x < 200 && y < 600) {
      if(state[0][2] == -1)
        state[0][2] = player;
    } else if (x < 400 && y < 600) {
      if(state[1][2] == -1)
        state[1][2] = player;
    } else if (x < 600 && y < 600) {
      if(state[2][2] == -1)
        state[2][2] = player;
    }   
    
    if(player == 1) {
      player = 0;
    } else {
      player = 1;
    }
    
    checkWinner();
    if(winner !== -1) {
      console.log("Winner is:", winner)
    }
  }
  
  function checkWinner() {
    // check each rows
    for (let i = 0; i < 3; i++){
      if(state[0][i] === state[1][i] && state[1][i] === state[2][i]) {
        winner = state[0][i];
        return;
      }
    }
    
    // check each columns
    for (let i = 0; i < 3; i++){
      if(state[i][0] === state[i][1] && state[i][0] === state[i][2]) {
        winner = state[i][0];
        return;
      }
    }
    
    // check for diagonals
    if(state[0][0] == state[1][1] && state[1][1] == state[2][2]) {
      winner = state[0][0];
      return;
    }
    
    if(state[0][2] == state[1][1] && state[1][1] == state[2][0]) {
      winner = state[1][1];
      return;
    }
    
  }
  
  function draw() {
    background(255);
    line(200,0,200,600)
    line(400,0,400,600)
    line(0,200,600,200)
    line(0,400,600,400)
    
    for(let r = 0; r < 3; r++) {
      for(let c = 0; c < 3; c++) {
        if(state[r][c] == 0) {
          ellipse(100 + r * 200, 100 + c * 200,100,100)        
        }
        
        if(state[r][c] == 1) {
          cross(100 + r * 200, 100 + c * 200,50)  
        }
      }
    }
  }