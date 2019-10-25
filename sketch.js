let sceneNum = 0;
let dot = new Mover();
let dots = [];
let stickman;

function setup() {
  createCanvas(400, 400);
  stickman = loadImage ('stickman.png');
  for (let i = 0; i < 4000; i++) {
    dots[i] = new Mover();
  }
}

function draw() {
  
  mouseClicked = function() {
    sceneNum++;
  }
  if (sceneNum == 0) {
    background(random(102)%100,random(255,128,0)%100);
    
    fill(255,255,0);
    textSize(50);
    textFont('fontBold');
    text("My Artshow", 70, 100);
    textSize(40);
    textFont('fontBold');
    text("Click to Start", 84, 250)
  } else if (sceneNum == 1) {
    background(102,0,51);
    image(stickman,200,200, 80, 80);
    
    for (let i =0; i < 4000; i++) {
      dots[i].update();
      dots[i].show();
    }

    
   
  } else if (sceneNum == 2) {
    background (255)
    fill(94);
    textSize(35);
    text("Thank you for watching!", 50, 150);
    fill(0);
    textSize(35);
    textFont('fontItalic');
    text("Thank you for watching!", 46, 150);

   }


}
