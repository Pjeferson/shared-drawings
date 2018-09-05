let socket; 
let url;

function setup() {
  createCanvas(640,480);
  background(51);

  url = 'http://localhost:3000/';
  //url = 'http://192.168.0.27:3000/'; //an exemple for local network connection
  socket = io.connect(url);

  socket.on('draw', (data) => {
    newDraw(data.x, data.y);
  });
}

function mouseDragged(){
  newDraw(mouseX,mouseY);
  socket.emit('draw', {x: mouseX, y: mouseY});
}

function newDraw(x,y){
  noStroke();
  fill(255);
  ellipse(x, y, 20,20);
}

function draw() {// Unused
  
}
