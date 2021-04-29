var trackimage,track;
var car1image,car1
var car2image,car2


function preload(){
  trackimage=loadImage("images/trackimage.jpg")
  car1image=loadImage("images/car 1 bmw.png")
  car2image=loadImage("images/car 2 ferrari.png")



}
function setup() {

  createCanvas(800,800);

 track= createSprite(400, 200, 400, 400);track.addImage(trackimage);track.scale=2;
 car1=   createSprite(192,359,40,40);car1.addImage(car1image);car1.scale=0.6
 car2=    createSprite(347,373,40,40);car2.addImage(car2image);car2.scale=0.6
}

function draw() {
  background(255,255,255); 
  if(keyDown("UP_ARROW")) {
    car1.y=car1.y-10;
  }
    if(keyDown("DOWN_ARROW")) {
    car1.y=car1.y+10;

    }
    if(keyDown("RIGHT_ARROW")){
      car1.x=car1.x+10;
    }
  
    if(keyDown("LEFT_ARROW")){
      car1.x=car1.x-10;
    }
     
    if(keyDown("DOWN_ARROW")) {
      car2.y=car2.y+10;
  
      }

      if(keyDown("UP_ARROW")) {
        car2.y=car2.y-10;
      }

      if(keyDown("RIGHT_ARROW")){
        car2.x=car2.x+10;
      }

      if(keyDown("LEFT_ARROW")){
        car2.x=car2.x-10;
      }
       



  
  drawSprites();
  text(mouseX + "," + mouseY, mouseX, mouseY);
  
}