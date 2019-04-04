const speedDash = document.querySelector(".speedDash");
const scoreDash = document.querySelector(".scoreDash");
const lifeDash = document.querySelector(".lifeDash");
const btnStart = document.querySelector(".btnStart");
const container = document.getElementById('container');
let gamePlay = false;
let animationGame = requestAnimationFrame(playGame);

/* Keys */
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

function playGame(){
  console.log('car race')
}
