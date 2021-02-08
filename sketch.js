var mr,fr;

function setup() {
  createCanvas(1200,800);

  mr=createSprite(400,200,80,30);
  mr.shapeColor="blue";
  fr=createSprite(200,200,50,80);
  fr.shapeColor="blue";

}

function draw() {
  background(255,200,100); 
   
   console.log(mr.x-fr.x);

   mr.x=mouseX;
   mr.y=mouseY;

  if(mr.x-fr.x<fr.width/2+mr.width/2 && fr.x-mr.x<fr.width/2+mr.width/2 && mr.y-fr.y<fr.height/2+mr.height/2 && fr.y-mr.y<fr.height/2+mr.height/2){
    mr.shapeColor="yellow";
    fr.shapeColor="yellow";
  }
  else{
    mr.shapeColor="blue";
    fr.shapeColor="blue";
  }
  

  drawSprites();
}