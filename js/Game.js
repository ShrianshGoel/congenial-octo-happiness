class Game {
  constructor() {
    this.resetTitle=createElement("h2","Reset");
    this.reset = createButton("")

    
  }
  getState(){
    database.ref("gameState").on("value",(data)=>{
      gameState = data.val();
    });
    
      }
    
      updateState(state){
    database.ref("/").update({
     gameState:state
      
    })}
  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getCount();

  

    car1 = createSprite(width/2.50,height/1.20);
    car1.addImage("first",c1);
    car1.scale=0.1
    car2 = createSprite(width/1.80,height/1.20);
    car2.addImage("second",c2);
car2.scale=0.1

    cars = [car1,car2];
  }
play(){
this.handleElements()
this.handleReset();
Player.getPlayerInfo()


if(allPlayers!=undefined){
  image(track,0,-height*4,width,height*5);
  console.log(allPlayers)
  var index =0
  for (var i in allPlayers){
var x = allPlayers[i].positionX
var y = height-allPlayers[i].positionY
index+=1

cars[index-1].position.x = x
cars[index-1].position.y = y

if(player.index===index){
  fill("cyan")
 ellipse(x,y,90,90)
 
 camera.position.y = y
}
}
this.handleControls();

}

drawSprites()
}

handleElements(){
form.hide();
form.title.position(width/6.50,height/6.50);
form.title.class("gameTitle1")
this.resetTitle.position(width/1.20,height/9.30);
this.reset.position(width/1.20,height/5.30);
this.reset.class("reset")
}
handleReset(){
this.reset.mousePressed(
  ()=>{
    database.ref("/").set({
      playerCount:0,
      gameState:0

    })
    window.location.reload()
  })}

handleControls(){
  if(keyIsDown(UP_ARROW)){
    
player.positionY = player.positionY + 15;
player.updatePosition();

  }
  if(keyIsDown(LEFT_ARROW)&&player.positionX>width/5){
    
    player.positionX = player.positionX - 15;
    player.updatePosition();
    
      }

if(keyIsDown(RIGHT_ARROW)&&player.positionX<width/1.50){
    
  player.positionX = player.positionX + 15;
  player.updatePosition();
  
    }
}
}