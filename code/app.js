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
document.addEventListener("keydown", animationmovePL2);
document.addEventListener("keyup", animationmovePL2Stop);
// slect PL2
let PL2 = document.querySelector(".PL2")
// function == move animation CK
function animationmovePL2(e){
  // if == move CK ba key
  if(e.keyCode == 65){
    PL2 =document.querySelector(".PL2").style.animationName ="move-left-run-PL2";
  }
  else if(e.keyCode == 68){
    PL2 =document.querySelector(".PL2").style.animationName ="move-right-run-PL2";
    
  }
}

// function == stop move animation CK
function animationmovePL2Stop(e){
// if == stop move animation CK
  if(e.keyCode == 65){
    PL2 =document.querySelector(".PL2").style.animationName = "none";
    PL2 =document.querySelector(".PL2").style.backgroundImage =  "url(/code/img/PL2/normalleft.png)"
  }
  
  else if(e.keyCode == 68){
    PL2 =document.querySelector(".PL2").style.animationName = "none";
    PL2 =document.querySelector(".PL2").style.backgroundImage =  "url(/code/img/PL2/normalRight.png)"
  }
}

// ---------------- animation CK --------------------
// -----=animation PL2 move=-----
document.addEventListener("keydown", animationmovePL1);
document.addEventListener("keyup", animationmovePL1Stop);
// slect PL2
let PL1 = document.querySelector(".PL1")
// function == move animation CK
function animationmovePL1(e){
  // if == move CK ba key
  if(e.keyCode == "37"){
    PL2 =document.querySelector(".PL1").style.animationName ="move-left-run-PL1";

  }
  else if(e.keyCode == "39"){
    PL2 =document.querySelector(".PL1").style.animationName ="move-right-run-PL1";
    
  }
}

// function == stop move animation CK
function animationmovePL1Stop(e){
// if == stop move animation CK
  if(e.keyCode == "37"){
    PL2 =document.querySelector(".PL1").style.animationName = "none";
    PL2 =document.querySelector(".PL1").style.backgroundImage =  "url(/code/img/PL1/normalLeft.png)"
  }
  
  else if(e.keyCode == "39"){
    PL2 =document.querySelector(".PL1").style.animationName = "none";
    PL2 =document.querySelector(".PL1").style.backgroundImage =  "url(/code/img/PL1/normalRight.png)"
  }
}