var hypnoticBall, database;
var position;
var allPlayers
var gameState=0,playerCount=0;
var form,player,game;
var car1,car2,car3,car4,cars;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-130);
 game=new Game()
 game.getState()
 game.start()
}

function draw(){
  if(playerCount==4){
    game.updateState(1)
  }
  if(gameState===1){
    game.play()
  }
}