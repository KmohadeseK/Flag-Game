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

// -----=animation PL2 move=-----

// select safeh bazi
let overlapGroup = document.querySelector(".overlap-group");

document.addEventListener("keydown", animationmovePL2);
document.addEventListener("keyup", animationmovePL2Stop);

// slect PL2
let PL2 = document.querySelector(".PL2");
let spaceAlki = 0;

// function == move animation CK
let PL2LeftMove = 0;
let PL2TopMove = 0;

// ejad sound
let sound = new Audio("Runing.mp3");

let iskeyPressed = false;

function animationmovePL2(e) {
  // select mohgaeyat makani
  const road = overlapGroup.getBoundingClientRect();
  // key press
  if (iskeyPressed) {
    // if == move CK ba key
    if (e.keyCode == 65 && PL2LeftMove > 0) {
      // move PL2 left
      PL2LeftMove -= 10;
      PL2 = document.querySelector(".PL2").style.left = PL2LeftMove + "px";

      // move animation
      PL2 = document.querySelector(".PL2").style.animationName =
        "move-left-run-PL2";
      PL2 = document.querySelector(".PL2").style.backgroundImage =
        "url(asist/img/PL2/normalleft.png)";
    } else if (e.keyCode == 68 && PL2LeftMove < 1210) {
      // move PL2 right
      PL2LeftMove += 10;
      PL2 = document.querySelector(".PL2").style.left = PL2LeftMove + "px";

      // move animation
      PL2 = document.querySelector(".PL2").style.animationName =
        "move-right-run-PL2";
      PL2 = document.querySelector(".PL2").style.backgroundImage =
        "url(asist/img/PL2/normalRight.png)";
    } else if (e.keyCode == 87 && PL2TopMove > -57) {
      // move PL2 top
      PL2TopMove -= 10;
      PL2 = document.querySelector(".PL2").style.top = PL2TopMove + "px";

      // move animation
    } else if (e.keyCode == 83 && PL2TopMove < 530) {
      // move PL2 btoom
      PL2TopMove += 10;
      PL2 = document.querySelector(".PL2").style.top = PL2TopMove + "px";
      // move animation
    }

    //space if
    if ((e.keyCode == 32) & (spaceAlki == 0)) {
      alert("میخوای از صفحه بپره بیرون بیاد پیشت ؟");
      spaceAlki += 1;
    } else if (spaceAlki == 1) {
      alert("ببین بیا منظقی بهش فکر کنیم چطوری انتظار داری بپره ؟");
      spaceAlki += 1;
    } else if (spaceAlki == 2) {
      alert("ما اینجا داریم زحمت میکشیم ...");
      spaceAlki += 1;
    } else if (spaceAlki == 3) {
      alert("اونی که اسپیس میزنو رو ...");
      spaceAlki += 1;
    }
    sound.play();
  }
}

// select key down bra sound
document.addEventListener("keydown", function (event) {
  if (!iskeyPressed) {
    iskeyPressed = true;
    animationmovePL2(event)
  }
});

// select keyup bra sound
document.addEventListener('keyup',function(){
  iskeyPressed = false;
  sound.pause();
})

// function == stop move animation CK
function animationmovePL2Stop(e) {
  // if == stop move animation CK
  if (e.keyCode == 65) {
    PL2 = document.querySelector(".PL2").style.animationName = "none";
    PL2 = document.querySelector(".PL2").style.backgroundImage =
      "url(asist/img/PL2/normalleft.png)";
  } else if (e.keyCode == 68) {
    PL2 = document.querySelector(".PL2").style.animationName = "none";
    PL2 = document.querySelector(".PL2").style.backgroundImage =
      "url(asist/img/PL2/normalRight.png)";
  }
}

// ---------------- animation CK --------------------
// -----=animation PL2 move=-----
document.addEventListener("keydown", animationmovePL1);
document.addEventListener("keyup", animationmovePL1Stop);

// slect PL2
let PL1 = document.querySelector(".PL1");

// function == move animation CK
let PL1LeftMove = 0;
let PL1TopMove = 0;

function animationmovePL1(e) {
  // if == move CK ba key
  if (e.keyCode == "37" && PL1LeftMove > -42) {
    // move CK left
    PL1LeftMove -= 10;
    PL1 = document.querySelector(".PL1").style.left = PL1LeftMove + "px";

    PL1 = document.querySelector(".PL1").style.backgroundImage =
      "url(asist/img/PL1/normalLeft.png)";

    PL1 = document.querySelector(".PL1").style.animationName =
      "move-left-run-PL1";
  } else if (e.keyCode == "39" && PL1LeftMove < 1149) {
    // move CK right
    PL1LeftMove += 10;
    PL1 = document.querySelector(".PL1").style.left = PL1LeftMove + "px";

    PL1 = document.querySelector(".PL1").style.animationName =
      "move-right-run-PL1";

    PL1 = document.querySelector(".PL1").style.backgroundImage =
      "url(asist/img/PL1/normalRight.png)";
  } else if (e.keyCode == "38" && PL1TopMove > -50) {
    // move top
    PL1TopMove -= 10;
    PL1 = document.querySelector(".PL1").style.top = PL1TopMove + "px";
  } else if (e.keyCode == "40" && PL1TopMove < 530) {
    // move bttom
    PL1TopMove += 10;
    PL1 = document.querySelector(".PL1").style.top = PL1TopMove + "px";
  }
}

// function == stop move animation CK
function animationmovePL1Stop(e) {
  // if == stop move animation CK
  if (e.keyCode == "37") {
    PL1 = document.querySelector(".PL1").style.animationName = "none";

    PL1 = document.querySelector(".PL1").style.backgroundImage =
      "url(asist/img/PL1/normalLeft.png)";
  } else if (e.keyCode == "39") {
    PL1 = document.querySelector(".PL1").style.animationName = "none";

    PL1 = document.querySelector(".PL1").style.backgroundImage =
      "url(asist/img/PL1/normalRight.png)";
  }
}

// ------manster [start]-------
document.addEventListener("keydown", mansterMove);
document.addEventListener("keyup", mansterMovestop);
let manster = document.querySelector(".manster");
function mansterMove(e) {
  console.log(e.keyCode);
  // move left anm
  if (e.keyCode == 65 || e.keyCode == 37 && document.getElementsByClassName == "manster") {
    manster = document.querySelector(".manster").style.backgroundImage ="url(asist/img/labas-monster/monsterNormalLeft.png)"

    PL1 = document.querySelector(".manster").style.animationName = "mansterleft";
  }
}



function mansterMovestop(e) {

}