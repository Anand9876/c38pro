var canvas;
var gameState=0;
var runnerCount;
var database;
var game;
var form;
var runner;
var allRunners;
var distance=0
var runners,runner1,runner2,runner3,runner4;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("orange");
  if(runnerCount === 4){
    game.update(1);
    } 
    if(gameState === 1){
       clear();
        game.play();
        }
  
}
