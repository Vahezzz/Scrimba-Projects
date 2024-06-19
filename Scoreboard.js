let homeScoreEl = document.getElementById("homeScore-el")
let homecount = 0
let awayScoreEl = document.getElementById("awayScore-el")
let awaycount = 0

function home1() {
    homecount = homecount + 1
    homeScoreEl.textContent = homecount

    if (homeScoreEl = awayScoreEl) {
        console.log("true");
    
    }  else {
        console.log("False")
    }
        
}
function home2(){
    homecount = homecount + 2
    homeScoreEl.textContent = homecount
}
function home3(){
    homecount = homecount + 3
    homeScoreEl.textContent = homecount
}


function guest1() {
    awaycount = awaycount + 1
    awayScoreEl.textContent = awaycount
}
function guest2(){
    awaycount = awaycount + 2
    awayScoreEl.textContent = awaycount
}
function guest3(){
    awaycount = awaycount + 3
    awayScoreEl.textContent = awaycount
}

function reset(){
    homeScoreEl.textContent = 0
    awayScoreEl.textContent = 0
    homecount = 0
    awaycount = 0
}



// const homeHightlight = document.getElementById("homeScore-el")
//homeHightlight.addEventListener (homeScoreEl > awayScoreEl) {
    //homeHightlight.style.backgroundColor = #FFFF00}


