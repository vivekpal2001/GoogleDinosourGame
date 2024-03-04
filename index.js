const dino = document.querySelector(".dinosour");
const cactus = document.querySelector(".cactus");
const gameover = document.querySelector(".gameOver");
const cloudOne = document.querySelector(".cOne");
const cloudTwo = document.querySelector(".cTwo");
const cloudThree = document.querySelector(".cThree");
let score = document.querySelector(".score");
const replaybtn = document.querySelector(".btn");

let dinoScore = 0;
//jump function
const jump = function () {
  if (dino.classList !== "animate") {
    dino.classList.add("animate");
  }
  //dino.style.left = "330px";
  dinoScore = dinoScore;
  setTimeout(function () {
    dino.classList.remove("animate");
  }, 500);
};

// game over scenerio
const checkGameOver = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  dinoScore += 1;
  score.innerHTML = `<h1>Score :   ${dinoScore} </h1>`;

  if (cactusLeft < 275 && cactusLeft > 210 && dinoTop >= 435) {
    cactus.style.animationPlayState = "paused";
    dino.style.animationPlayState = "paused";
    cloudOne.style.animationPlayState = "paused";
    cloudTwo.style.animationPlayState = "paused";
    cloudThree.style.animationPlayState = "paused";
    gameover.style.display = "flex";
    clearInterval(checkGameOver);
  }
}, 30);

const reload = function () {
  window.location.reload();
};

replaybtn.addEventListener("click", reload);
document.addEventListener("click", jump);
