`use strict`

var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var reset = document.getElementById("reset");
var h1 = document.querySelector("h1");
var p = document.querySelector("p");
var rodymas1 = document.getElementById("rodymas1");
var rodymas2 = document.getElementById("rodymas2");
var numInput = document.querySelector("input");
var playingToDisplay = document.querySelector('#gameScore');
var p1Score = 0;
var p2Score = 0;
var gameScore = 0;


function printScore(){
  rodymas1.innerHTML = p1Score;
  rodymas2.innerHTML = p2Score;
}

function resetGame(){
  p1Score = 0;
  p2Score = 0;
  rodymas1.style.color = "black";
  rodymas2.style.color = "black";
  gameOver = false;
  printScore();
}

playerOne.addEventListener("click",function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === gameScore){
      rodymas1.style.color = "white";
      gameOver = true;
    }
  }
  printScore();
});

playerTwo.addEventListener("click",function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === gameScore){
      rodymas2.style.color = "white";
      gameOver = true;
    }
  }
    printScore();
});

reset.addEventListener("click",function(){
  resetGame();
});

numInput.addEventListener("change", function(){
  gameScore = Number(this.value);
  playingToDisplay.textContent = gameScore;
  resetGame();
});
