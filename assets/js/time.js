// Set the date we're counting down to
var countDownDate = new Date("Mar 30, 2024 11:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("dd").innerHTML = days;
    document.getElementById("hh").innerHTML = hours;
    document.getElementById("mm").innerHTML = minutes;
    document.getElementById("ss").innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clear").innerHTML = "LAUNCH";
    }
}, 1000);


const close = document.getElementById('x')
const modal = document.getElementById('modal')
const open = document.getElementById('open')
const joined = document.getElementById('joined')



open.addEventListener('click', () => {
    modal.style.display = "block"
})


close.addEventListener('click', () => {
    modal.style.display = "none"

})

// function waitlist() {
//     alert('Thanks for joining our waitlist')
// }

const name = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
let namerror = document.getElementById('namerror')
const join = document.getElementById('join')


join.addEventListener("click", (e) => {
    e.preventDefault()

    if (name.value == "") {
        console.log('name field is empty')
        namerror.innerText = "Please enter your name"
    } else if (name.value <= '2') {
        namerror.innerText = "Name is too short"
    } else if (phone.value == "") {
        namerror.innerText = "Please enter your phone number"
    } else if (email.value == "") {
        namerror.innerText = "Enter your email address"
    } else if (email.value.includes('@') == false) {
        namerror.innerText = "Email must include @"
    } else {
        alert('Thanks for joining our waitlist')
    }
})