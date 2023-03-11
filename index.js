let homeBox = document.getElementById("homeScore")
let guestBox = document.getElementById("guestScore")
let homeScore = 0;
let guestScore = 0;


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
}