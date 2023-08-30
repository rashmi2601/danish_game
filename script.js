let danish = document.getElementById("danish");
let block = document.getElementById("block");
let result = document.getElementById("result");
let score = document.getElementById("score");
let game_container = document.getElementById("game_container");
let count = 0;

//jump function

let jump = () => {
  danish.style.top = "90px";

  setTimeout(() => {
    danish.style.top = "160px";
  }, 400);
  count++;
};
window.addEventListener("keydown", jump);

//  game over function
let touch = 0;
let gameOver = setInterval(() => {
  let blockleft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  let danishTop = parseInt(
    window.getComputedStyle(danish).getPropertyValue("top")
  );
  
//   console.log("blockleft: " + danishTop, blockleft);
 
  if (blockleft < 65 && danishTop > 90) {
    touch++;
    
    // console.log("blockleft: " + danishTop); 
  

    if (touch===100){
        result.style.display = "block";

         game_container.style.display = "none";

    // score.innerHTML = `score:${count}`;
    alert("game over Danish");
    // console.log("game over",touch);


    }

    // game_container.style.display = "none";

    score.innerHTML = `score:${count}`;
    // alert("game over Danish");

  }
}, 10);
