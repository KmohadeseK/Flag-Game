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
let spaceAlki = 0 
// function == move animation CK
function animationmovePL2(e){
  //space if
  if (e.keyCode == 32 & spaceAlki == 0){
    alert("میخوای از صفحه بپره بیرون بیاد پیشت ؟")
    spaceAlki +=1
  }
  else if(spaceAlki == 1){
    alert("ببین بیا منظقی بهش فکر کنیم چطوری انتظار داری بپره ؟")
    spaceAlki +=1
  }
  
  else if(spaceAlki == 2){
    alert("ما اینجا داریم زحمت میکشیم ...")
    spaceAlki +=1
  }
  else if(spaceAlki == 3){
    alert("اونی که اسپیس میزنو رو ...")
    spaceAlki +=1
  }


  // if == move CK ba key
  if(e.keyCode == 65){
    PL2 =document.querySelector(".PL2").style.animationName ="move-left-run-PL2";
    PL2 =document.querySelector(".PL2").style.backgroundImage =  "url(asist/img/PL2/normalleft.png)"

  }
  else if(e.keyCode == 68){
    PL2 =document.querySelector(".PL2").style.animationName ="move-right-run-PL2";
    PL2 =document.querySelector(".PL2").style.backgroundImage =  "url(asist/img/PL2/normalRight.png)"
    
  }
}

// function == stop move animation CK
function animationmovePL2Stop(e){
// if == stop move animation CK
  if(e.keyCode == 65){
    PL2 =document.querySelector(".PL2").style.animationName = "none";
    PL2 =document.querySelector(".PL2").style.backgroundImage =  "url(asist/img/PL2/normalleft.png)"
  }
  
  else if(e.keyCode == 68){
    PL2 =document.querySelector(".PL2").style.animationName = "none";
    PL2 =document.querySelector(".PL2").style.backgroundImage =  "url(asist/img/PL2/normalRight.png)"
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
    PL2 =document.querySelector(".PL1").style.backgroundImage =  "url(asist/img/PL1/normalLeft.png)"
    PL2 =document.querySelector(".PL1").style.animationName ="move-left-run-PL1";

  }
  else if(e.keyCode == "39"){
    PL2 =document.querySelector(".PL1").style.animationName ="move-right-run-PL1";
    
    PL2 =document.querySelector(".PL1").style.backgroundImage =  "url(asist/img/PL1/normalRight.png)"

  }
}

// function == stop move animation CK
function animationmovePL1Stop(e){
// if == stop move animation CK
  if(e.keyCode == "37"){
    PL2 =document.querySelector(".PL1").style.animationName = "none";
    PL2 =document.querySelector(".PL1").style.backgroundImage =  "url(asist/img/PL1/normalLeft.png)"
  }
  
  else if(e.keyCode == "39"){
    PL2 =document.querySelector(".PL1").style.animationName = "none";
    PL2 =document.querySelector(".PL1").style.backgroundImage =  "url(asist/img/PL1/normalRight.png)"
  }
}