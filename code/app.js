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
    if (isKeyPressed) { // Checking the pressed key status
        if (event.keyCode === 37) { // Left arrow key
            pl2LeftPos -= 10;
            pl2.style.left = pl2LeftPos + "px";
        } else if (event.keyCode === 38) { // Top arrow key
            pl2TopPos -= 10;
            pl2.style.top = pl2TopPos + "px";
        } else if (event.keyCode === 39) { // Right arrow key
            pl2LeftPos += 10;
            pl2.style.left = pl2LeftPos + "px";
        } else if (event.keyCode === 40) { // Down arrow key
            pl2TopPos += 10;
            pl2.style.top = pl2TopPos + "px";
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


// move the character varble
// let pl1TopPos = 0;
// let pl1LeftPos = 0;

// document.addEventListener("keydown", movePL1);

// function movePL1(e) {
//     // go top
//     if (e.key == "w") {
//         pl1TopPos += 10;
//         pl1.getBoundingClientRect()
//         pl1.x += pl1TopPos;
//         console.log(pl1.x);
//     }
// }

