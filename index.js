let homeValue = document.getElementById("valuehom");
let guestValue = document.getElementById("valueguest");

let homeScore = 0;
let guestScore = 0;

function incrementByOne() {
    homeScore += 1;
    updateDisplay();
}

function incrementByTwo() {
    homeScore += 2;
    updateDisplay();
}

function incrementByThree() {
    homeScore += 3;
    updateDisplay();
}

function incrementGuest(points) {
    guestScore += points;
    updateDisplay();
}

function updateDisplay() {
    homeValue.textContent = homeScore;
    guestValue.textContent = guestScore;
}
