let homeCount = 0;
let guestCount= 0;

let homeEl = document.getElementById("home-el");
let guestEl= document.getElementById("guest-el");
homeEl.textContent = 0;
guestEl.textContent = 0;

let addHomePoint1 = function() {homeEl.textContent = homeCount+=1}
let addHomePoint2 = function() {homeEl.textContent = homeCount+=2}
let addHomePoint3 = function() {homeEl.textContent = homeCount+=3}


let addGuestPoint1 = function() {guestEl.textContent = guestCount+=1}
let addGuestPoint2 = function() {guestEl.textContent = guestCount+=2}
let addGuestPoint3 = function() {guestEl.textContent = guestCount+=3}
