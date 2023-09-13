var pl2 = document.querySelector(".pmm");
var pl2TopPos = 0;
var pl2LeftPos = 0;
var sound = new Audio("Runing.mp3"); // Add audio file

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

function movePL1(e){
    // go top
    if(e.key == "w"){
        pl1TopPos += 10;
        pl1.getBoundingClientRect() 
        pl1.x += pl1TopPos;
        console.log(pl1.x);
    }
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if( seconds == 0 ){
            alert('وقت بازی تمام شد!')
        }
    }, 1000);
}

window.onload = function () {
    var fortyFivesecondes = 45,
        display = document.querySelector('.timer');
    startTimer(fortyFivesecondes, display);
};