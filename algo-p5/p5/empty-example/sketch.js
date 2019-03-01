let xmin = -2;
let xmax = 1;
let ymin = -1.5;
let ymax = 1.5;
function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  test();
}

function iter(z, c) {
  let z2 = createVector(z.x * z.x - z.y * z.y + c.x, 2 * z.x * z.y + c.y);
  return z2;
}

function keyPressed(){
  if(keyCode == 107){
    maxIter += 10;
  }
  if (keyCode == 109) {
    maxIter -= 10; 
  }
}

function test() {
  let c = color(random(255), random(255), random(255));

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let zx = map(x, 0, width, xmin, xmax);
      let zy = map(y, 0, width, ymin, ymax);
      let c = createVector(zx, zy);
      let z = createVector(0,0); 
      let i = 0
      
      /* if (z.mag() <= 10) {
        stroke(255);
      } */
      while (i < 30 && z.mag() < 9) {
        z = iter(z,c);
        i++;
      }
      let clr = color(map(i,0,30,255,0),random(99),random(71));
      stroke(clr);
      point(x,y);
    }
  }
}