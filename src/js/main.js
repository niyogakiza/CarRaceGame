const speedDash = document.querySelector(".speedDash");
const scoreDash = document.querySelector(".scoreDash");
const lifeDash = document.querySelector(".lifeDash");
const btnStart = document.querySelector(".btnStart");
const container = document.getElementById('container');

btnStart.addEventListener('click', startGame);
document.addEventListener('keydown', pressKeyOn);
document.addEventListener('keyup', pressKeyOff);

let animationGame;
let gamePlay = false;
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
  animationGame = requestAnimationFrame(playGame);
  player = {
    ele: div,
    speed: 9,
    lives: 3,
    gameScore: 0,
    carsToPass: 10,
    score: 0,
    roadWidth: 250
  };
  startBoard();
}

function startBoard(){
  [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15].forEach(item => {
    let div = document.createElement('div');
    div.setAttribute('class', 'road');
    div.style.top = (item * 50)+'px';
    div.style.width = player.roadWidth + 'px';
    container.appendChild(div)
  })
}

function pressKeyOn(event){
  event.preventDefault();
  console.log(keys);
  keys[event.key] = true
}

function pressKeyOff(event) {
  event.preventDefault();
  keys[event.key] = false
}

function updateDash(){
  scoreDash.innerHTML = player.score;
  lifeDash.innerHTML = player.lives;
  speedDash.innerHTML = player.speed;
}

function playGame(){
  if(gamePlay){
    updateDash();

    if(keys.ArrowUp) {
      player.ele.y -= 1;
      player.speed = player.speed < 20 ? (player.speed +0.05) :20;
    }

  if(keys.ArrowDown) {
    player.ele.y += 1;
    player.speed = player.speed > 0  ? (player.speed -0.2) :0;
  }

  if(keys.ArrowRight) {
    player.ele.x += (player.speed/4)
  }

  if(keys.ArrowLeft) {
    player.ele.x -= (player.speed/4)
  }
  // Move Car
  player.ele.style.top = player.ele.y +'px';
  player.ele.style.left = player.ele.x +'px';
  }

  animationGame = requestAnimationFrame(playGame);
}
