var hypnoticBall, database;
var position;
var gameState = 0 ;
var playerCount = 0 ;
var form , player , game ;


function setup(){
  database = firebase.database();
  createCanvas(400,400);

  game = new Game();
  game.getGameState();
  game.start();
  

  //var hypnoticBallPosition = database.ref('ball/position');
  //hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  //background("orange");
  

  
}
/*
function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
*/