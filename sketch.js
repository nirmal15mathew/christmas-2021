let snow;
function setup(){
  //setup function
  createCanvas(windowWidth, windowHeight)
  snow = new Snow();
  snow.populate(100)
  strokeWeight(10)
}

function draw(){
  //loop here
  background(11);
  snow.show()
}