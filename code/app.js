var img = document.querySelector(".pmm");
var topPos = 0;
var leftPos = 0;
var sound = new Audio("Runing.mp3"); // اضافه کردن فایل صوتی

function moveImage(event) {
    switch (event.keyCode) {
        case 37: // left arrow key
            leftPos -= 10;
            img.style.left = leftPos + "px";
            break;
        case 38: // up arrow key
            topPos -= 10;
            img.style.top = topPos + "px";
            break;
        case 39: // right arrow key
            leftPos += 10;
            img.style.left = leftPos + "px";
            break;
        case 40: // down arrow key
            topPos += 10;
            img.style.top = topPos + "px";
            break;
    }
    sound.play(); // پخش صدا
}

document.addEventListener("keydown", moveImage); ener("keydown", moveImage);

