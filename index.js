// Import stylesheets
import './style.css';

// Write Javascript code!

// Podesi datum
var countDownDate = new Date('jan 1, 2020 0:0:0').getTime();

// Odbrojavanje
var x = setInterval(function () {
  // Današnji datum
  var now = new Date().getTime();

  // Razlika imedju današnjeg i traženog datuma
  var distance = countDownDate - now;

  // Kalkulacija za dane, sate, minute i sekunde
  var dani = Math.floor(distance / (1000 * 60 * 60 * 24));
  var sati = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minuti = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sekunde = Math.floor((distance % (1000 * 60)) / 1000);

  // Prikazi rezultat u elementu id="brojac"
  document.getElementById('brojac').innerHTML =
    'Preostalo vreme do Nove godine: ' +
    dani +
    'd: ' +
    sati +
    's: ' +
    minuti +
    'm: ' +
    sekunde +
    's ';

  // Ako se završi odbrojavanje ispiši nešto
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('brojac').innerHTML = 'Isteklo je vreme';
  }
}, 1000);
