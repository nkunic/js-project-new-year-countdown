// Import stylesheets & scripts
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

// Set the date
var countDownDate = new Date('jan 1, 2023 0:0:0').getTime();

// Countdown
var x = setInterval(function () {

  // Today's date
  var now = new Date().getTime();

  // The difference between today's and the requested date
  var distance = countDownDate - now;

  // Calculation for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Show result in element id = "counterText" i id = "counterTime"
  var counterText = document.getElementById('counterText');
  var counterTime = document.getElementById('counterTime');

  // counterText.innerHTML = 'Remaining time until the New Year: ';
  // counterTime.innerHTML = days + 'd: ' + hours + 's: ' + minutes + 'm: ' + seconds + 's ';
  document.getElementById("counterText").innerHTML = "Preostalo vreme do Nove godine: " + days + "d: " + hours + "s: "
  + minutes + "m: " + seconds + "s ";

  // If the countdown is over, write something
  // if (distance < 0) {
  //   clearInterval(x);
  //   counterText.innerHTML = 'Time is up';
  // }

}, 1000);
