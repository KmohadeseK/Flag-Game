// date:1402/06/20
// project:flag-game
// gr:...,...,...
// description:...

// code function brai start v setTime [START]
function startTime() {
  let PL2Winer = 0;
  let PL1Winer = 0;
  let time = 45;
  let countDown = setInterval(function () {
    // time braber ba 0
    if (time <= 0) {
      clearInterval(countDown);
    }
    // select kardn timer
    document.querySelector(".timer").innerHTML = time--;
    // -----timer 0 shod game END-----
    if (document.querySelector(".timer").innerHTML == 0) {
      if (PL2Winer == 1) {
        // PL2 winer
        alert(
          "بازیکن شماره 2 همون پرچم دار برد فشار فشار بخور نوب با شمشیر نتونستی بزنیش ؟ نوب ..."
        );

        PL2 = document.querySelector(".PL2").style.top = null;
        PL2 = document.querySelector(".PL2").style.left = null;

        PL1 = document.querySelector(".PL1").style.top = null;
        PL1 = document.querySelector(".PL1").style.left = null;

        // flager PL2
        PL2 = document.querySelector(".PL2").setAttribute("class", "  PL2");
        PL2Winer = 1;
        // monster PL1
        PL1 = document.querySelector(".PL1").setAttribute("class", "  PL1");
      } else if (PL1Winer == 1) {
        // PL2 winer
        alert(
          "بازیکن شماره1  همون پرچم دار برد فشار فشار بخور نوب با شمشیر نتونستی بزنیش ؟ نوب ..."
        );

        PL2 = document.querySelector(".PL2").style.top = null;
        PL2 = document.querySelector(".PL2").style.left = null;

        PL1 = document.querySelector(".PL1").style.top = null;
        PL1 = document.querySelector(".PL1").style.left = null;

        PL2 = document.querySelector(".PL2").setAttribute("class", "  PL2");

        PL1 = document.querySelector(".PL1").setAttribute("class", "  PL1");
      }
    }
  }, 1000);
}

// ----------code of random monster or flager----------
// slect PL2
let PL2 = document.querySelector(".PL2");
// slect PL1
let PL1 = document.querySelector(".PL1");
monsterFlag = Math.floor(Math.random() * 2);
if (monsterFlag == 1) {
  // flager PL2
  PL2 = document.querySelector(".PL2").setAttribute("class", "  PL2 flag");
  PL2Winer = 1;
  // monster PL1
  PL1 = document.querySelector(".PL1").setAttribute("class", "  PL1 manster");
} else if (monsterFlag == 0) {
  // flager PL2
  PL1 = document.querySelector(".PL1").setAttribute("class", "  PL1 flag");
  // monster PL1
  PL2 = document.querySelector(".PL2").setAttribute("class", "  PL2 manster");
  PL1Winer = 1;
}
// -----=animation PL2 move=-----
// select safeh bazi
let overlapGroup = document.querySelector(".macbook-air");

document.addEventListener("keydown", animationmovePL2);
document.addEventListener("keyup", animationmovePL2Stop);

// slect PL2
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
    if (e.keyCode == 65 && PL2LeftMove > -1108) {
      // move PL2 left
      PL2LeftMove -= 10;
      PL2 = document.querySelector(".PL2").style.left = PL2LeftMove + "px";

      // move animation
      PL2 = document.querySelector(".PL2").style.animationName =
        "move-left-run-PL2";
      PL2 = document.querySelector(".PL2").style.backgroundImage =
        "url(asist/img/PL2/normalleft.png)";
    } else if (e.keyCode == 68 && PL2LeftMove < 110) {
      // move PL2 right
      PL2LeftMove += 10;
      PL2 = document.querySelector(".PL2").style.left = PL2LeftMove + "px";

      // move animation
      PL2 = document.querySelector(".PL2").style.animationName =
        "move-right-run-PL2";
      PL2 = document.querySelector(".PL2").style.backgroundImage =
        "url(asist/img/PL2/normalRight.png)";
    } else if (e.keyCode == 87 && PL2TopMove > -553) {
      // move PL2 top
      PL2TopMove -= 10;
      PL2 = document.querySelector(".PL2").style.top = PL2TopMove + "px";

      // move animation
    } else if (e.keyCode == 83 && PL2TopMove < 30) {
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
      alert("ببین بیا منظقی بهش فکر کنیم چطوری انتظار داری بپره   ؟");
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
    animationmovePL2(event);
  }
});

// select keyup bra sound
document.addEventListener("keyup", function () {
  iskeyPressed = false;
  sound.pause();
});

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
  // move left anm
  if (
    (e.keyCode == 65) & (monsterFlag == 0) ||
    (e.keyCode == 37) & (monsterFlag == 1)
  ) {
    manster = document.querySelector(".manster").style.backgroundImage =
      "url(asist/img/labas-monster/ monsterNormalLeft.png)";

    PL1 = document.querySelector(".manster").style.animationName =
      "mansterleft";
  }
  // move right
  else if (
    (e.keyCode == 68 && monsterFlag == 0) ||
    (e.keyCode == 39 && monsterFlag == 1)
  ) {
    manster = document.querySelector(".manster").style.backgroundImage =
      "url(asist/img/labas-monster/ monsterNormalRight.png)";

    PL1 = document.querySelector(".manster").style.animationName =
      "mansterRghit";
  }
  // attk right
  else if (e.keyCode == 75) {
    manster = document.querySelector(".manster").style.backgroundImage =
      "url(asist/img/labas-monster/ monsterNormalRight.png)";

    PL1 = document.querySelector(".manster").style.animationName = "attkleft";
  }
  // atkk left
  else if (e.keyCode == 76) {
    manster = document.querySelector(".manster").style.backgroundImage =
      "url(asist/img/labas-monster/ monsterNormalLeft.png)";

    PL1 = document.querySelector(".manster").style.animationName = "attkright";
  }
}

function mansterMovestop(e) {
  if (
    (e.keyCode == 65 && monsterFlag == 0) ||
    (e.keyCode == 37 && monsterFlag == 1)
  ) {
    manster = document.querySelector(".manster").style.backgroundImage =
      "url(asist/img/labas-monster/ monsterNormalLeft.png)";

    PL1 = document.querySelector(".manster").style.animationName = "none";
  }
  // move right
  else if (
    (e.keyCode == 68 && monsterFlag == 0) ||
    (e.keyCode == 39 && monsterFlag == 1)
  ) {
    manster = document.querySelector(".manster").style.backgroundImage =
      "url(asist/img/labas-monster/ monsterNormalRight.png)";

    PL1 = document.querySelector(".manster").style.animationName = "none";
  }
  // attk right
  else if (e.keyCode == 75) {
    manster = document.querySelector(".manster").style.backgroundImage =
      "url(asist/img/labas-monster/ monsterNormalLeft.png)";

    PL1 = document.querySelector(".manster").style.animationName = "none";
  }
  // atkk left
  else if (e.keyCode == 76) {
    manster = document.querySelector(".manster").style.backgroundImage =
      "url(asist/img/labas-monster/ monsterNormalRight.png)";

    PL1 = document.querySelector(".manster").style.animationName = "none";
  }
}

function rahnma() {
  alert(
    "سلام خیلی خوش آمدید . بازی ما به این شکل است که کاراکتر اول ما با جهات (فلش ها) کار میکنه و کاراکتر دوم ما با حروف w ,d,a,s  کار میکند و برای استفاده از شمشیر از حروف k,L استفاده کنید امیدوارم از بازی لذت کامل رو ببرید."
  );
}
