var dog, hdog, database, foodS, foodStock;
var dogS;
var button;
var Happy;
var milkimg;
var milkS;
var d,hours;
var seconds,s;
var h;
var m;
var bedroom,garden,washroom;
var gameState,gs;
function preload()
{
  hdog = loadImage("images/dogImg1.png");
  dog = loadImage("images/dogImg.png");
  milkimg = loadImage("images/Milk.png");
  bedroom = loadImage("images/BedRoom.png");
  garden = loadImage("images/Garden.png");
  washroom = loadImage("images/WashRoom.png");
}

function setup() {
  createCanvas(500, 800);
  database=firebase.database();
  d= new Date();
  button = new Food();
  foodStock.on("value",readStock);
  dogS = createSprite(250,150);
  dogS.addImage("img",dog);
  dogS.scale = 0.15;
  Happy = false;
  milkS = createSprite(-10,180,20,10);
  milkS.addImage("image",milkimg);
  milkS.scale = 0.05;
  hours = database.ref('hours');
  hours.on("value", readHours);
  seconds = -1;
  s = database.ref('seconds');
  s.on("value", readSeconds);
  m = "am";
  h = 0;
  gameState = "hungry";
  gs = database.ref('gamestate');
  gs.on("value", button.getGs);
}

function draw() {  
  background(46, 139, 87);
//  button.display();

  if(Happy===false){
    dogS.addImage("img",dog);
  }
  else{
    dogS.addImage("img",hdog);
    glide(milkS);
  }
  if(World.frameCount%30===0){
    s = s+1;
    seconds = s;
    setSeconds(seconds);
  }
  if(seconds>30){
    Happy = false;
    milkS.x = -10;
  }
  drawSprites();
  fill(255);
  textSize(18);
//  if(button.button1){
  text("x "+ foodS,250,255);
  if(m==="am"){
    text("Dog was last fed at " + h + " am",150,350);
    }else{
    if(m==="pm"){
    text("Dog was last fed at " + h + " pm",150,350);
  }}
//}

if(gameState === "hungry"){
  button.display();
if(button.currenttime>=(hours+1)  && button.currenttime<(hours+5)){
  button.Garden();
}
else
 {
  if(button.currenttime===(hours+6))
  {
  button.Washroom();
  }
  else
      {
      if(button.currenttime>(hours+10) && button.currenttime<=(hours+12))
      {
       button.Bedroom();
      }
    }
  }  
}else{
      button.display();
      gameState = "hungry";
      gs = gameState;
      (gs);
      }

}

function readStock(data){
  foodS = data.val();
}

function glide(obj){
  if(obj.x<=200){
  obj.x = obj.x+10;
  }
}

function readHours(data){
  hours = data.val();
}

function setHours(x){
  database.ref('/').update({hours:x});
}

function readSeconds(data){
  s = data.val();
}

function setSeconds(x){
  database.ref('/').update({seconds:x});
}

function ampm(){
  if(h>12){
    h = h%12
    m ="pm";
}else{
  if(m==="pm"){
     m = "am";
  }
}
}