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

/* Keys */
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

function startGame(){
  let div = document.createElement('div');
  div.setAttribute('class', 'playerCar');
  div.x = 250;
  div.y = 500;
  container.appendChild(div);
  gamePlay = true
}

function pressKeyOn(){

}

function pressKeyOff() {

}

function playGame(){
  console.log('car race')
}
