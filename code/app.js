//..................↓ PLAYER BLUE 1 ↓....................

var pl1 = document.querySelector(".p");
var pl1TopPos = 0;
var pl1LeftPos = 0;
var sound = new Audio("Runing.mp3"); // Added audio file

var isKeyPressed = false; // Saved Key Status Completed
function moveImage(event) {
    if (isKeyPressed) { // Checking the pressed key status
        if (event.keyCode === 97) { // Left arrow key => (A)
            pl1LeftPos -= 10;
            pl1.style.left = pl1LeftPos + "px";
        } else if (event.keyCode === 119) { // Top arrow key => (W)
            pl1TopPos -= 10;
            pl1.style.top = pl1TopPos + "px";
        } else if (event.keyCode === 100) { // Right arrow key => (D)
            pl1LeftPos += 10;
            pl1.style.left = pl1LeftPos + "px";
        } else if (event.keyCode === 115) { // Down arrow key => (S)
            pl1TopPos += 10;
            pl1.style.top = pl1TopPos + "px";
        }
        sound.play(); // Play audio
    }
}

document.addEventListener("keydown", function (event) {
    if (!isKeyPressed) {
        isKeyPressed = true; // Set pressed key state to true
        moveImage(event); // Call the moveImage function
    }
});

document.addEventListener("keyup", function (event) {
    isKeyPressed = false; // Set pressed key state to false
    sound.pause(); // Stop playing audio
});

//..................↓ PLAYER RED 2 ↓....................

var pl2 = document.querySelector(".pmm");
var pl2TopPos = 0;
var pl2LeftPos = 0;
var sound = new Audio("Runing.mp3"); // Added audio file

var isKeyPressed = false; // Saved Key Status Completed
function moveImage(event) {
  switch (event.keyCode) {
    case 37: // left arrow key
      pl2LeftPos -= 10;
      pl2.style.left = pl2LeftPos + "px";

      break;
    case 38: // up arrow key
      pl2TopPos -= 10;
      pl2.style.top = pl2TopPos + "px";

      break;
    case 39: // right arrow key
      pl2LeftPos += 10;
      pl2.style.left = pl2LeftPos + "px";
      break;
    case 40: // down arrow key
      pl2TopPos += 10;
      pl2.style.top = pl2TopPos + "px";
      break;
  }
  sound.play(); // Play Audio
}

document.addEventListener("keydown", moveImage);

// Moving the character 1
// slect character 1
let pl1 = document.querySelector(".p");
// move the character varble
let pl1TopPos = 0;
let pl1LeftPos = 0;

document.addEventListener("keydown", movePL1);

function movePL1(e) {
  // go top
  if (e.key == "w") {
    pl1TopPos += 10;
    pl1.getBoundingClientRect();
    pl1.x += pl1TopPos;
    console.log(pl1.x);
  }
}

// code startTimer [START]
function startTimer(duration, display,) {
  let timer = duration,
    minutes,
    seconds;

    // ejad function brai modat zaman
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

    //   brai makos kardan zaman
      if (--timer < 0) {
        timer = duration;
      }

    }, 100);
}
// function time safeh
window.onload = function () {
  let fortyFivesecondes = 45,
    display = document.querySelector(".timer");
  startTimer(fortyFivesecondes, display);
};
