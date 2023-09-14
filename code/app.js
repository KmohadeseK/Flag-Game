// date:1402/06/20
// project:flag-game
// gr:...,...,...
// description:...

// code function brai start v setTime [START]
function startTime() {
  let time = 45;
  let countDown = setInterval(function () {
    // time braber ba 0
    if (time <= 0) {
      clearInterval(countDown);
    }
    // select kardn timer
    document.querySelector(".timer").innerHTML = time--;
  }, 1000);
}

document.addEventListener("keydown", moveImage);