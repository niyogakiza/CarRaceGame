const speedDash = document.querySelector(".speedDash");
const scoreDash = document.querySelector(".scoreDash");
const lifeDash = document.querySelector(".lifeDash");
const btnStart = document.querySelector(".btnStart");
const container = document.getElementById('container');

btnStart.addEventListener('click', startGame);
btnStart.addEventListener('keydown', pressKeyOn);
btnStart.addEventListener('keyup', pressKeyOff);

let gamePlay = false;
let animationGame = requestAnimationFrame(playGame);
let player;

/* Keys */
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

function startGame(){
  btnStart.style.display="none";
  let div = document.createElement('div');
  div.setAttribute('class', 'playerCar');
  div.x = 250;
  div.y = 500;
  container.appendChild(div);
  gamePlay = true;
  player ={
    speed: 1,
    lives: 3,
    gameScore: 0,
    carsToPass: 10,
    score: 0
  };
}

function pressKeyOn(){

}

function pressKeyOff() {

}

function updateDash(){
  scoreDash.innerHTML = player.score;
  lifeDash.innerHTML = player.lives;
  speedDash.innerHTML = player.speed;
  console.log(player)
}

function playGame(){
  if(gamePlay){
    updateDash()
  }
  animationGame = requestAnimationFrame(playGame);
}
