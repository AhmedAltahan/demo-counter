
let startNumberHome = 0;
let startNumberGuest = 0;

let homeNumber = document.getElementById("zeroHome").innerText = startNumberHome;

let guestNumber = document.getElementById("zeroGuest").innerText = startNumberGuest;



function homeOne() {
    homeNumberPlusOne = startNumberHome += 1;
    let homeNumber = document.getElementById("zeroHome").innerText = homeNumberPlusOne;
}

function homeTwo() {
    homeNumberPlusTwo = startNumberHome += 2;
    let homeNumber = document.getElementById("zeroHome").innerText = homeNumberPlusTwo;
}

function homeThree() {
    homeNumberPlusThree = startNumberHome += 3;
    let homeNumber = document.getElementById("zeroHome").innerText = homeNumberPlusThree;
}



function guestOne() {
    guestNumberPlusOne = startNumberGuest += 1;
    let guestNumber = document.getElementById("zeroGuest").innerText = guestNumberPlusOne;
}

function guestTwo() {
    guestNumberPlusTwo = startNumberGuest += 2;
    let guestNumber = document.getElementById("zeroGuest").innerText = guestNumberPlusTwo;
}

function guestThree() {
    guestNumberPlusThree = startNumberGuest += 3;
    let guestNumber = document.getElementById("zeroGuest").innerText = guestNumberPlusThree;
}
