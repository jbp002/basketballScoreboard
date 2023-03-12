let homeBox = document.getElementById("homeScore")
let guestBox = document.getElementById("guestScore")
let homeScore = 0;
let guestScore = 0;
let time = 15
let running = true

function incrementScore() {
    console.log("Btn Click")
}
function incrementScore(team, pts){
    console.log("Btn Click: " + team + " "+ pts)
    console.log(homeBox)
    console.log(guestBox)
    if (team == "home") {
        homeScore += pts
        homeBox.textContent = homeScore
    } else {
        guestScore += pts
        guestBox.textContent = guestScore
    }
}

function resetGame() {
    homeScore = 0;
    guestScore = 0;
    homeBox.textContent = homeScore;
    guestBox.textContent = guestScore;
    document.getElementById("timer__seconds").textContent = "00"
    document.getElementById("timer__minutes").textContent = 15
}

function timer() {
    let sec = document.getElementById("timer__seconds")
    let min = document.getElementById("timer__minutes")
    let seconds = sec.textContent
    let minutes = min.textContent
    if (running != true){
        return
    }
    seconds--

    seconds = correctSeconds(seconds)

    if (seconds == 59){
        minutes--
    }

    if(minutes < 0){return}

    sec.textContent = seconds
    min.textContent = minutes
    
    setTimeout(timer, 1000)
}

function correctSeconds(seconds){
    if (seconds < 10 && seconds >= 0){
        seconds = "0" + seconds
    }
    if (seconds < 0){ seconds = 59}
    
    return seconds
}
function start(){
    running = true
    timer()
}
function stop() {
    running = false
    console.log(running)
}