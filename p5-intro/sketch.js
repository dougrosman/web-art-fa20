//global variables
// declare variables
$(document).ready(function(){

  $(p).css('font-weight', `${wght}`)

  setInterval(function(){
    wght++;
  }, 16);

});


let x;
let y;
let c;



function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("#sketch-parent");
  background(0);
  
  //initialize the color
  c = color(random(255), random(255), random(255));
  
  
  // initialize variables (give them values)
  x = 0;
  y = 0;
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 15);
  
  
  fill(x, y, x/y);
  //ellipse(x, y, 20, 20);
  ellipse(mouseX, mouseY, 20, 20);

  
  // each frame, increment x amd y
  x+=random(15);
  y+=4.3;
  
  
  // if circle reaches bottom of screen, reset back to top
  if(y > height) {
    y = 0;
    //c = color(random(255), random(255), random(255));
  }
  
  if(x > width){
    x = 0;
    //c = color(random(255), random(255), random(255));
  }
  
}